import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

//components
import Layout from "../components/Layout"
import PageTitle from "../components/PageTitle"
import ContactBlock from "../components/Block/ContactBlock"
import ServicesBlock from "../components/Block/ServicesBlock"
import SEO from "../components/SEO"

//richText
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"

//css
import "../css/simplePage.css"

const SimplePageTemplate = ({
  data: {
    simple: {
      title,
      background: {
        fluid,
        file: { url },
      },
      content,
      seoDsc: { seoDsc },
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
      <SEO title={title} dsc={seoDsc} image={url} />
      <div className="simplePage">
        <PageTitle crumbs={crumbs} title={title} fluid={fluid} />
        <div className="wrapper">
          <div className="container flex flex-column-reverse">
            <div className="sidebar">
              <ContactBlock />
              <ServicesBlock />
            </div>
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
  query GetSimplePage($slug: String) {
    simple: contentfulSimplePage(id: { eq: $slug }) {
      path
      title
      seoDsc {
        seoDsc
      }
      background {
        fluid {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
      content: childContentfulSimplePageContentRichTextNode {
        json
      }
    }
  }
`

export default SimplePageTemplate
