import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
//consants
import MainMenu from "../constants/MainMenu"

const getData = graphql`
  {
    info: allContentfulInfo {
      nodes {
        aRetenir
        phoneTitle
        phoneLink
      }
    }
    images: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        name: { eq: "bg-footer" }
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

const Footer = () => {
  const data = useStaticQuery(getData)
  const info = data.info.nodes[0]
  const fluid = data.images.nodes[0].childImageSharp.fluid
  return (
    <BackgroundImage fluid={fluid} className="footerBg">
      <div className="wrapper footer">
        <div className="container flex">
          <div className="block">
            <h2>A retenir</h2>
            <p>{info.aRetenir}</p>
            <p>
              Contactez-nous: <a href={info.phoneLink}>{info.phoneTitle}</a>
            </p>
          </div>
          <div className="block">
            <h2>Nos services</h2>
            <ul>
              {MainMenu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Footer
