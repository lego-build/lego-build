import React from 'react'
import { wordParser } from "../../utils/functions";
import style from "./index.module.css";
const Card = ({ data: { id, title, description } }) => {
  console.log({ id, title, description})
  return (
    <div className={style.card} data-mark={`${wordParser(!!title ? title : "")}`}>
mmm
    </div>
  )
}

export default Card