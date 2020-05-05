import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

//constant
import InfoPageMenu from "../constants/InfoPageMenu"

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
        slogan
      }
    }
  }
`

const Bottom = ({ className }) => {
  const data = useStaticQuery(getData)
  const info = data.info.nodes[0]
  return (
    <div className={className}>
      <div className="wrapper">
        <div className="container">
          <h1>
            <Link to="/">
              <Img
                fluid={info.logo.fluid}
                alt="logo bati-sur"
                className="logo"
              />
              {info.title}
            </Link>
          </h1>
          <p>
            {info.title} - {info.slogan}
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
    </div>
  )
}

export default styled(Bottom)`
  text-align: center;
  .logo {
    width: 50px;
    margin: 0 auto;
  }
`
