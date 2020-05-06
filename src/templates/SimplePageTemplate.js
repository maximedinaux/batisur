import React from "react"
import { graphql, Link } from "gatsby"

//components
import Layout from "../components/Layout"
import PageTitle from "../components/PageTitle"
import ContactBlock from "../components/Block/ContactBlock"
import ServicesBlock from "../components/Block/ServicesBlock"

//richText
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"

const SimplePageTemplate = ({
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
        return (
          <img
            src={node.data.target.fields.file["fr-BE"].url}
            alt={node.data.target.fields.title["fr-BE"]}
            loading="lazy"
            width="800px"
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

  console.log(content)
  return (
    <Layout>
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
    </Layout>
  )
}

export const query = graphql`
  query GetSimplePage($slug: String) {
    simple: contentfulSimplePage(id: { eq: $slug }) {
      path
      title
      background {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content: childContentfulSimplePageContentRichTextNode {
        json
      }
    }
  }
`

export default SimplePageTemplate
