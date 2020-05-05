import React from "react"
import { Link } from "gatsby"

//consants
import MainMenu from "../../constants/MainMenu"

const ServicesBlock = () => {
  return (
    <div className="block">
      <h2>Nos services</h2>
      <ul>
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

export default ServicesBlock
