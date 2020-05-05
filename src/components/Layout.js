import React from "react"

//css
import "../css/layout.css"

// components
import Header from "../components/Header"
import Footer from "../components/Footer"
import Bottom from "../components/Bottom"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main">{children}</div>
      <Footer />
      <Bottom />
    </>
  )
}

export default Layout
