import React from 'react'
import Card from "../Card/Card"
import style from "./index.module.css"
import { useId } from 'react';
const Cards = ({ data }) => {
    const Id = useId();
  return (
      <div className={style.container}>
        <div className={style.cards}>
            {data.map((details, i) => (<Card {...details} key={Id + i} />))}
        </div>
      </div>
  )
}

export default Cards