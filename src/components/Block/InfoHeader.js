import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    info: allContentfulInfo {
      nodes {
        phoneTitle
        phoneLink
        phoneIcon {
          svg {
            content
          }
        }
        argTitle
        argIcon {
          svg {
            content
          }
        }
      }
    }
  }
`

const InfoHeader = () => {
  const data = useStaticQuery(getData)
  const info = data.info.nodes[0]
  return (
    <div>
      <ul>
        <li>
          <div
            className="icon"
            dangerouslySetInnerHTML={{ __html: info.phoneIcon.svg.content }}
          />
          <a href={info.phoneLink}>{info.phoneTitle}</a>
        </li>
        <li>
          <div
            className="icon"
            dangerouslySetInnerHTML={{ __html: info.argIcon.svg.content }}
          />
          <span>{info.argTitle}</span>
        </li>
      </ul>
    </div>
  )
}

export default InfoHeader
