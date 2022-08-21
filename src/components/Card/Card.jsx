import React from 'react'
import Preview from "../Preview/Preview";
import style from "./index.module.css";
const Card = ({ id, title, description, name, profileLink }) => {
  return (
    <div className={style.card}>
      <Preview link={profileLink} />
    </div>
  )
}

export default Card