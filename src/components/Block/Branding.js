import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

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

const Branding = ({ className }) => {
  const data = useStaticQuery(getData)
  const info = data.info.nodes[0]
  return (
    <h1 className={className}>
      <Link to="/">
        <Img fluid={info.logo.fluid} alt="logo bati-sur" className="logo" />
        {info.title}
      </Link>
    </h1>
  )
}

export default styled(Branding)`
  .logo {
    width: 50px;
  }
`
