import React from "react"
import { Link } from "gatsby"

//components
import Branding from "../components/Block/Branding"
import InfoHeader from "../components/Block/InfoHeader"
import MainMenu from "../components/Block/MainMenuList"

const Header = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Branding />
          <InfoHeader />
          <div className="btn">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <MainMenu />
        </div>
      </div>
    </>
  )
}

export default Header
