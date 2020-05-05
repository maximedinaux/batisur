import React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import BackgroundImage from "gatsby-background-image"

const PageTitle = ({ crumbs, title, fluid }) => {
  return (
    <BackgroundImage fluid={fluid} className="wrapper">
      <div className="container">
        <h1>{title}</h1>
        <Breadcrumb crumbs={crumbs} crumbSeparator=" / " crumbLabel={title} />
      </div>
    </BackgroundImage>
  )
}

export default PageTitle
