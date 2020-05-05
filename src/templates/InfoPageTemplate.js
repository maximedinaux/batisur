import React from "react"
import { graphql } from "gatsby"

const InfoPageTemplate = ({
  data: {
    simple: { title },
  },
}) => {
  return <div>{title}</div>
}

export const query = graphql`
  query GetInfoPage($slug: String) {
    simple: contentfulInfoPage(id: { eq: $slug }) {
      path
      title
    }
  }
`

export default InfoPageTemplate
