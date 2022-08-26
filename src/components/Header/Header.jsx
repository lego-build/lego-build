import React from 'react'
import { Crystals } from "../../assets";
import style from "./index.module.css";
const Header = () => {
  return (
    <header className={style.header}>
      <span className={style.Crystals}>
        <Crystals className={style.Crystal1} />
        <Crystals className={style.Crystal2} />
      </span>
          <div><h1>Browse Project Workflows</h1> </div>
          <p>Check out different workflows and templates to fit your project’s needs. Try searching for ‘TypeScript’, or ‘hooks’.</p>
    </header>
  )
}

export default Header