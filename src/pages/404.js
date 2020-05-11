import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SEO from "../components/SEO"
//components
import Layout from "../components/Layout"

const error = ({ className }) => {
  return (
    <div className={className}>
      <SEO title="Page 404" dsc="Page inexistante" />
      <Layout>
        <div className="wrapper error">
          <div className="container">
            <h1>Erreur 404</h1>
            <p>Ouuuuups ! Cette page n'existe pas ou n'existe plus. </p>
            <div className="btn">
              <Link to="/">Retour à la page d'accueil</Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default styled(error)`
  .error {
    padding: 50px 0px;

    h1 {
      font-size: 3em;
      font-weight: bolder;
      font-family: var(--fontTitle);
      color: var(--darkColor);
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
    p {
      line-height: 150%;
      color: rgba(0, 0, 0, 0.5);
      font-size: 1.5em;
    }
    .btn a {
      text-decoration: none;
      background-color: var(--darkColor);
      color: #fff;
      padding: 10px 20px;
      display: inline-block;
      margin-top: 10px;
    }
    .btn a:hover {
      color: var(--darkColor);
      background-color: var(--contrastColor);
    }
  }
`
