import React from "react"
import { graphql } from "gatsby"

//components
import Layout from "../components/Layout"
import PageTitle from "../components/PageTitle"
import ContactBlock from "../components/Block/ContactBlock"
import ServicesBlock from "../components/Block/ServicesBlock"

const SimplePageTemplate = ({
  data: {
    simple: {
      title,
      background: { fluid },
    },
  },
  pageContext,
}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <PageTitle crumbs={crumbs} title={title} fluid={fluid} />
      <div className="wrapper">
        <div className="container">
          <div className="sidebar">
            <ContactBlock />
            <ServicesBlock />
          </div>
          <div className="content">content</div>
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
    }
  }
`

export default SimplePageTemplate
