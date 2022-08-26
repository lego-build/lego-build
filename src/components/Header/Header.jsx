import React from 'react'
import { First, Second, Third } from "../../assets";
import style from "./index.module.css";
const Header = () => {
  return (
    <header className={style.header}>
      <div><h1>Browse Project Workflows</h1><span><First className={style.First} /><Second className={style.Second} /><Third className={style.Third} /></span></div>
          <p>Check out different workflows and templates to fit your project’s needs. Try searching for ‘TypeScript’, or ‘hooks’.</p>
    </header>
  )
}

export default Header