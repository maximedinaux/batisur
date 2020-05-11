import React from "react"
import { graphql, Link } from "gatsby"

//component
import Layout from "../components/Layout"
import PageTitle from "../components/PageTitle"
import SEO from "../components/SEO"

const message = ({
  data: {
    contact: {
      background: { fluid },
    },
  },
  pageContext,
}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
  const title = "Contact"
  return (
    <Layout>
      <SEO title="Message envoyé" />
      <PageTitle crumbs={crumbs} title={title} fluid={fluid} />
      <div className="wrapper contact">
        <div className="container">
          <h1>Message envoyé</h1>
          <p>
            Votre message a bien été envoyé. Merci pour la confiance que vous
            nous accordez. Nous vous recontacterons dans les plus bref délais.
          </p>
          <div className="btn">
            <Link to="/">Retour à la Page d'accueil</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetMessagePage($slug: String) {
    contact: contentfulContact(id: { eq: $slug }) {
      background {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default message
