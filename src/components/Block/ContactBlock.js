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

const ContactBlock = () => {
  const data = useStaticQuery(getData)
  const info = data.info.nodes[0]
  return (
    <div className="block">
      <h2>Contactez-nous</h2>
      <h3>Par téléphone</h3>
      <ul>
        <li>
          <a href={info.phoneLink}>{info.phoneTitle}</a>
        </li>
      </ul>
      <p>Contactez-nous pour vos travaux, demandes, informations, urgences.</p>
    </div>
  )
}

export default ContactBlock
