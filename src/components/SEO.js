import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDsc: description
        siteImage: image
        siteUrl
      }
    }
  }
`

const SEO = ({ title, dsc, image }) => {
  const { site } = useStaticQuery(getData)
  const { siteDsc, siteTitle, siteUrl, siteImage } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "fr" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={dsc || siteDsc} />
      <meta name="image" content={image} />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={dsc || siteDsc} />
      <meta name="twitter:image" content={`${siteUrl}/${siteImage}`} />
    </Helmet>
  )
}

export default SEO
