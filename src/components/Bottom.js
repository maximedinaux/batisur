import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

//constant
import InfoPageMenu from "../constants/InfoPageMenu"

const getData = graphql`
  {
    info: allContentfulInfo {
      nodes {
        title
        logo: logoBottom {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slogan
      }
    }
  }
`

const Bottom = () => {
  const data = useStaticQuery(getData)
  const info = data.info.nodes[0]

  const sitename = info.title.split("-")
  return (
    <div className="wrapper bottom">
      <div className="container">
        <h1>
          <Link to="/">
            <Img fluid={info.logo.fluid} alt="logo bati-sur" className="logo" />
            <div className="sitename">
              {sitename[0]}
              <span>{sitename[1]}</span>
            </div>
          </Link>
        </h1>
        <p>
          <span className="sitename">{info.title}</span>- {info.slogan}
        </p>
        <ul>
          {InfoPageMenu.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Bottom
