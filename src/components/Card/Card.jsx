import React from 'react'
import { wordParser } from "../../utils/functions";
import style from "./index.module.css";
const Card = ({ id, title, description, author: { name, profileLink } } ) => {
  return (
    <div className={style.card}>
      <div className={style.header} data-mark={wordParser(!!title ? title : "")}>

      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <span>By <a href={profileLink}>{name}</a></span>
    </div>
  )
}

export default Card