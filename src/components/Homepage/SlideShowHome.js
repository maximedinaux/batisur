import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

//react
import { Zoom } from "react-slideshow-image"

const getData = graphql`
  {
    slide: allContentfulSlideShowHome {
      nodes {
        background {
          fluid(maxWidth: 1200) {
            ...GatsbyContentfulFluid
          }
        }
        title
        subtitle
        content: childContentfulSlideShowHomeTextTextNode {
          text
        }
        btnLink
        btnTitle
      }
    }
  }
`

const zoomOutProperties = {
  duration: 10000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
}

const SlideShowHome = () => {
  const data = useStaticQuery(getData)

  return (
    <div className="slideshow">
      <Zoom {...zoomOutProperties}>
        {data.slide.nodes.map((item, index) => {
          return (
            <BackgroundImage
              key={index}
              fluid={item.background.fluid}
              className="slide"
            >
              <div className="container">
                <h1>
                  {item.title} <span>{item.subtitle}</span>
                </h1>
                <p>{item.content.text}</p>
                <div className="btn">
                  <Link to="/contact">Contactez-nous</Link>
                  {item.btnLink ? (
                    <Link to={item.btnLink}>{item.btnTitle}</Link>
                  ) : null}
                </div>
              </div>
            </BackgroundImage>
          )
        })}
      </Zoom>
    </div>
  )
}

export default SlideShowHome
