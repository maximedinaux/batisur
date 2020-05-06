import React from "react"
import { graphql } from "gatsby"

//component
import Layout from "../components/Layout"
import PageTitle from "../components/PageTitle"

const InfoPageTemplate = ({
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
      {title}
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
    }
  }
`

export default InfoPageTemplate
