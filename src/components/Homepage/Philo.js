import React from "react"
import { Link } from "gatsby"

const Philo = () => {
  return (
    <div className="wrapper">
      <div className="container flex">
        <div className="content">
          <span className="slogan">Notre philosphie</span>
          <h2>La passion du confort</h2>
          <p>
            Nos clients méritent ce qui se fait de mieux en matière de confort.
            Nous mettons tout en œuvre pour vous offrir ce qu’il a de mieux.
            Savoir que nos clients sont bien chez eux après notre intervention
            est notre plus grande fierté. Chaque projet est traité avec plus
            grand intérêt.
          </p>
        </div>
        <div className="sidebar">
          <h2>Une question ?</h2>
          <p>
            N’hésitez pas à nous contacter pour une prise d’informations ou en
            cas d’une urgence sur un chantier. Pour chaque question, nous avons
            une réponse et pour chaque problème nous avons une solution.
          </p>
          <Link to="/contact">Contactez-nous</Link>
        </div>
      </div>
    </div>
  )
}

export default Philo
