import React from "react";
import { wordParser, parser } from "../../utils/functions";
import style from "./index.module.css";
import { Link } from "react-router-dom";
const Card = ({ id, title, description, author: { name } }) => {
  return (
    <Link to={`/community/${id}`}>
      <div className={style.card}>
        <div
          className={style.header}
          data-mark={wordParser(!!title ? title : "")}
        >
          <p>{wordParser(!!title ? title : "")}</p>
        </div>
        <div className={style.body}>
          <h1 className={style.title}>{title}</h1>
          <p>{description}</p>
          <span className={style.link}>
            By <span>{name}</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
