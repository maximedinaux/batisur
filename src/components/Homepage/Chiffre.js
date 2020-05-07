import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    chiffres: allContentfulChiffre(sort: { fields: order }) {
      nodes {
        number
        suffixe
        title
        icon {
          svg {
            content
          }
        }
      }
    }
  }
`

const Chiffre = () => {
  const data = useStaticQuery(getData)
  return (
    <div className="wrapper chiffre">
      <div className="container">
        {data.chiffres.nodes.map((item, index) => {
          return (
            <section key={index}>
              <div
                className="icon"
                dangerouslySetInnerHTML={{
                  __html: item.icon.svg.content,
                }}
              />
              <div className="content">
                <span>
                  <span className="number">{item.number}</span>
                  {item.suffixe ? item.suffixe : null}
                </span>
                <p>{item.title}</p>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default Chiffre
