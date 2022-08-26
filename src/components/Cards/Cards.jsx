import React from 'react'
import Card from "../Card/Card"
import style from "./index.module.css"
import { useId } from 'react';
import { Dots, LeftDots } from "../../assets";
const Cards = ({ data }) => {
    const Id = useId();
  return (
    <div className={style.container}>
      <Dots className={style.watermark} />
      <LeftDots className={style.leftWatermark} />
        <div className={style.cards}>
            {data.map((details, i) => (<Card {...details} key={Id + i} />))}
      </div>
      </div>
  )
}

export default Cards