import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const getData = graphql`
  {
    services: allContentfulSimplePage(sort: { fields: order }) {
      nodes {
        path
        title
        icon {
          svg {
            content
          }
        }
        childContentfulSimplePageResumeTextNode {
          resume
        }
      }
    }
  }
`

const ServicesHome = () => {
  const data = useStaticQuery(getData)

  return (
    <div className="wrapper">
      <div className="container">
        <h2>Nos services</h2>
        {data.services.nodes.map((item, index) => {
          return (
            <section key={index}>
              <div
                className="icon"
                dangerouslySetInnerHTML={{
                  __html: item.icon.svg.content,
                }}
              />
              <h3>{item.title}</h3>
              <p>{item.childContentfulSimplePageResumeTextNode.resume}</p>
              <Link to={item.path}>En savoir plus</Link>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default ServicesHome
