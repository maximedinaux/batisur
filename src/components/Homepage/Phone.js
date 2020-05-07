import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const getData = graphql`
  {
    info: allContentfulInfo {
      nodes {
        phoneTitle
        phoneLink
      }
    }
    images: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        name: { eq: "bg-hotline" }
      }
    ) {
      nodes {
        sourceInstanceName
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Phone = () => {
  const data = useStaticQuery(getData)
  const info = data.info.nodes[0]
  const fluid = data.images.nodes[0].childImageSharp.fluid
  return (
    <BackgroundImage fluid={fluid} className="hotline">
      <div className="wrapper phone">
        <div className="container">
          <h2>Pour les urgences</h2>
          <h3>
            24/7 : <a href={info.phoneLink}>{info.phoneTitle}</a>
          </h3>
          <p>
            Pour toutes vos questions et les interventions urgentes sur
            chantier. Nous sommes là.
          </p>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Phone
