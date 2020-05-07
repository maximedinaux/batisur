import React, { useState } from "react"

//components
import Branding from "../components/Block/Branding"
import InfoHeader from "../components/Block/InfoHeader"
import MainMenu from "../components/Block/MainMenuList"

const Header = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <div className="header">
      <div className="wrapper ">
        <div className="container flex">
          <Branding />
          <InfoHeader />
          <button type="button" className="mobileBtn" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <MainMenu statut={isOpen ? "open" : "closed"} />
        </div>
      </div>
    </div>
  )
}

export default Header
