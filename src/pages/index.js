import React from "react"

//components
import Layout from "../components/Layout"
import Slider from "../components/Homepage/SlideShowHome"
import Services from "../components/Homepage/ServicesHome"
import Chiffres from "../components/Homepage/Chiffre"
import Philo from "../components/Homepage/Philo"
import Phone from "../components/Homepage/Phone"
import SEO from "../components/SEO"

//css
import "../css/index.css"

export default () => (
  <Layout>
    <SEO title="Accueil" />
    <Slider />
    <Services />
    <Chiffres />
    <Philo />
    <Phone />
  </Layout>
)
