import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDsc: description
      }
    }
  }
`

const SEO = ({ title, dsc }) => {
  const { site } = useStaticQuery(getData)
  const { siteDsc, siteTitle } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "fr" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={dsc || siteDsc} />
    </Helmet>
  )
}

export default SEO
