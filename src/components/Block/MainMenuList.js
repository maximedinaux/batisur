import React from "react"
import { Link } from "gatsby"

//components
import MainMenu from "../../constants/MainMenu"

const MainMenuList = ({ statut }) => {
  return (
    <div className="menu">
      <ul className={statut}>
        {MainMenu.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MainMenuList
