import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
  }
`

const Footer = () => {
  const data = useStaticQuery(getData)
  const info = data.info.nodes[0]
  return (
    <div className="wrapper">
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
  )
}

export default Footer
