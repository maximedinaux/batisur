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
    contact: allContentfulContact {
      nodes {
        sidebarText
      }
    }
  }
`

const ContactBlock = () => {
  const data = useStaticQuery(getData)
  const info = data.info.nodes[0]
  const contact = data.contact.nodes[0]
  return (
    <div className="block contact">
      <h2>Contactez-nous</h2>
      <div className="element">
        <h3>Par téléphone</h3>
        <ul>
          <li>
            <a href={info.phoneLink}>{info.phoneTitle}</a>
          </li>
        </ul>
      </div>

      <p>{contact.sidebarText}</p>
    </div>
  )
}

export default ContactBlock
