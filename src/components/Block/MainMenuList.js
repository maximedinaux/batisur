import React from "react"
import { Link } from "gatsby"

//components
import MainMenu from "../../constants/MainMenu"

const MainMenuList = ({ statut }) => {
  const home = "/"

  return (
    <div className="menu">
      <ul className={statut}>
        {MainMenu.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                activeClassName="is-active"
                partiallyActive={item.path === home ? false : true}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MainMenuList
