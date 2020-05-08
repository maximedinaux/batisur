import React from "react"

//components
import Layout from "../components/Layout"
import Slider from "../components/Homepage/SlideShowHome"
import Services from "../components/Homepage/ServicesHome"
import Chiffres from "../components/Homepage/Chiffre"
import Philo from "../components/Homepage/Philo"
import Phone from "../components/Homepage/Phone"

//css
import "../css/index.css"

export default () => (
  <Layout>
    <Slider />
    <Services />
    <Chiffres />
    <Philo />
    <Phone />
  </Layout>
)
