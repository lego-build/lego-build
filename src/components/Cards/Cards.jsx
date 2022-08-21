import React from 'react'
import Card from "../Card/Card"
import style from "./index.module.css"
const Cards = ({data}) => {
  return (
      <div className={style.container}>
          <a href="/#">Contribute Yours</a>
      <div className={style.cards}>
          {
              data.map((details)=>(<Card data={details} />))
          }
      </div>
      </div>
  )
}

export default Cards