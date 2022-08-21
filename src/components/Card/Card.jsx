import React from 'react'
import { wordParser } from "../../utils/functions";
import style from "./index.module.css";
const Card = ({ data: { id, title, description, author: { name, profileLink } } }) => {
  return (
    <div className={style.card}>
      <div className={style.header} data-mark={wordParser(!!title ? title : "")}>

      </div>
      <h1>{title}</h1>
      <p>Description</p>
    </div>
  )
}

export default Card