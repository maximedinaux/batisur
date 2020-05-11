import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

//component
import Layout from "../components/Layout"
import PageTitle from "../components/PageTitle"
import SEO from "../components/SEO"

//richText
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"

const InfoPageTemplate = ({
  data: {
    simple: {
      title,
      background: { fluid },
      content,
    },
  },
  pageContext,
}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const option = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log(node)
        const image = node.data.target.fields.file["fr-BE"]
        const width = image.details.image.width
        return (
          <Img
            width={image.details.image.width}
            fluid={{
              aspectRatio: width / image.details.image.height,
              src: image.url + "?w=630&q=80",
              srcSet: ` 
              ${image.url}?w=${width / 4}&&q=80 ${width / 4}w,
              ${image.url}?w=${width / 2}&&q=80 ${width / 2}w,
              ${image.url}?w=${width}&&q=80 ${width}w,
              ${image.url}?w=${width * 1.5}&&q=80 ${width * 1.5}w,
              ${image.url}?w=1000&&q=80 1000w,
          `,
              sizes: "(max-width: 630px) 100vw, 630px",
            }}
          />
        )
      },
      [INLINES.EMBEDDED_ENTRY]: node => {
        return (
          <Link to={node.data.target.fields.path["fr-BE"]}>
            {node.data.target.fields.title["fr-BE"]}
          </Link>
        )
      },
      [INLINES.ENTRY_HYPERLINK]: node => {
        return (
          <a href={node.data.target.fields.path["fr-BE"]}>
            {node.data.target.fields.title["fr-BE"]}
          </a>
        )
      },
    },
  }

  return (
    <Layout>
      <SEO title={title} />
      <div className="simplePage">
        <PageTitle crumbs={crumbs} title={title} fluid={fluid} />
        <div className="wrapper">
          <div className="container flex flex-column-reverse">
            <div className="content">
              {content
                ? documentToReactComponents(content.json, option)
                : "no content"}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetInfoPage($slug: String) {
    simple: contentfulInfoPage(id: { eq: $slug }) {
      path
      title

      background {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content: childContentfulInfoPageContentRichTextNode {
        json
      }
    }
  }
`

export default InfoPageTemplate
