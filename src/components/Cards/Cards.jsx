import React from "react";
import Card from "../Card/Card";
import style from "./index.module.css";
import { useId } from "react";
import { Dots, LeftDots } from "../../assets";
const Cards = ({ data, value, loading }) => {
  const Id = useId();

  if (loading)
    return (
      // Replace this with your skeleton loader @Udoka
      <p
        style={{
          fontSize: "1.2em",
          fontWeight: 700,
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Loading...
      </p>
    );

  return (
    <div className={style.container}>
      <Dots className={style.leftWatermark} />
      <LeftDots className={style.watermark} />
      <div className={style.cards}>
        {data
          .filter(
            ({ title, description }) =>
              title.toLowerCase().includes(value.toLowerCase()) ||
              description.toLowerCase().includes(value.toLowerCase())
          )
          .map((details, i) => (
            <Card {...details} key={Id + i} />
          ))}
      </div>
    </div>
  );
};

export default Cards;
