import React from "react"
import { graphql } from "gatsby"

//component
import Layout from "../components/Layout"
import PageTitle from "../components/PageTitle"
import SEO from "../components/SEO"

//css
import "../css/contact.css"

const ContactTemplate = ({
  data: {
    contact: {
      title,
      slogan,
      background: { fluid },
      seoDsc: { seoDsc },
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
      <SEO title={title} dsc={seoDsc} />
      <PageTitle crumbs={crumbs} title={title} fluid={fluid} />
      <div className="wrapper contact">
        <div className="container">
          <div>
            <div className="slogan">{slogan}</div>
            <h2>
              Téléphone : <a href={info.phoneLink}>{info.phoneTitle}</a>
            </h2>
            <div className="element">
              <p>
                Pour toute information ou pour une intervention rapide (aussi en
                urgence) contactez-nous au 0495.44.46.90.
              </p>
              <p>
                Pour le service administratif et facturation contactez-nous au
                0486 88 23 92
              </p>
            </div>
          </div>
          <form
            method="POST"
            name="contact"
            data-netlify="true"
            action="/message"
          >
            <input type="hidden" data-netlify-recaptcha="true" />
            <p>
              <label htmlFor="nom">
                Nom <span>*</span>
                <input type="text" id="nom" name="nom" />
              </label>
            </p>
            <p>
              <label htmlFor="email">
                Email <span>*</span>
                <input type="text" id="email" name="email" />
              </label>
            </p>
            <p>
              <label htmlFor="sujet">
                Sujet <span>*</span>
                <select id="sujet" name="type[]">
                  <option value="info">Demande d'information</option>
                  <option value="autre">Autre</option>
                </select>
              </label>
            </p>
            <p>
              <label htmlFor="msg">
                Votre message <span>*</span>
                <textarea id="msg" name="msg"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Envoyer</button>
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
      seoDsc {
        seoDsc
      }
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
