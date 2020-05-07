import React from "react"
import { graphql } from "gatsby"

//component
import Layout from "../components/Layout"
import PageTitle from "../components/PageTitle"

const ContactTemplate = ({
  data: {
    contact: {
      title,
      slogan,
      background: { fluid },
    },
    info,
  },
  pageContext,
}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <PageTitle crumbs={crumbs} title={title} fluid={fluid} />
      <div className="wrapper">
        <div className="container">
          <div>
            <div className="slogan">{slogan}</div>
            <h2>
              Téléphone : <a href={info.phoneLink}>{info.phoneTitle}</a>
            </h2>
            <p>
              Pour toute information ou pour une intervention rapide (aussi en
              urgence) contactez-nous au 0495.44.46.90.
            </p>
            <p>
              Pour le service administratif et facturation contactez-nous au
              0486 88 23 92
            </p>
          </div>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <p>
              <label htmlFor="nom">
                Nom <span>*</span>
              </label>
              <input type="text" id="nom" />
            </p>
            <p>
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input type="text" id="email" />
            </p>
            <p>
              <label htmlFor="sujet">
                Sujet <span>*</span>
              </label>
              <select id="sujet">
                <option value="info">Demande d'information</option>
                <option value="autre">Autre</option>
              </select>
            </p>
            <p>
              <label htmlFor="msg">
                Votre message <span>*</span>
              </label>
              <textarea id="msg"></textarea>
            </p>
            <p>
              <input type="submit" value="envoyer" />
            </p>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetContactPage($slug: String) {
    contact: contentfulContact(id: { eq: $slug }) {
      path
      title
      slogan
      background {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    info: contentfulInfo {
      phoneTitle
      phoneLink
    }
  }
`

export default ContactTemplate
