import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDsc: description
        image
        siteUrl
      }
    }
  }
`

const SEO = ({ title, dsc }) => {
  const { site } = useStaticQuery(getData)
  const { siteDsc, siteTitle, siteUrl, image } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "fr" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={dsc || siteDsc} />
      <meta name="image" content={image} />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={dsc || siteDsc} />
      <meta name="twitter:image" content={`${siteUrl}/${image}`} />
    </Helmet>
  )
}

export default SEO
