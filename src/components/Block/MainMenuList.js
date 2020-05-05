import React from "react"
import { Link } from "gatsby"

//components
import MainMenu from "../../constants/MainMenu"

const MainMenuList = () => {
  return (
    <ul>
      {MainMenu.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default MainMenuList
