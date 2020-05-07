import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const getData = graphql`
  {
    info: allContentfulInfo {
      nodes {
        title
        logo {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Branding = () => {
  const data = useStaticQuery(getData)
  const info = data.info.nodes[0]

  const sitename = info.title.split("-")
  return (
    <div className="branding">
      <h1>
        <Link to="/">
          <Img fluid={info.logo.fluid} alt="logo bati-sur" className="logo" />
          <div className="sitename">
            {sitename[0]}
            <span>{sitename[1]}</span>
          </div>
        </Link>
      </h1>
    </div>
  )
}

export default Branding
