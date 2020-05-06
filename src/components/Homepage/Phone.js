import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    info: allContentfulInfo {
      nodes {
        phoneTitle
        phoneLink
      }
    }
  }
`

const Phone = () => {
  const data = useStaticQuery(getData)
  const info = data.info.nodes[0]
  return (
    <div className="wrapper">
      <div className="container">
        <h2>Pour les urgences</h2>
        <h3>
          24/7 : <a href={info.phoneLink}>{info.phoneTitle}</a>
        </h3>
        <p>
          Pour toutes vos questions et les interventions urgentes sur chantier.
          Nous sommes là.
        </p>
      </div>
    </div>
  )
}

export default Phone
