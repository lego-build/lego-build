import React from "react";
import { wordParser } from "../../utils/functions";
import style from "./index.module.css";
import { HashLink } from "react-router-hash-link";
const Card = ({ id, title, description, author }) => {
  const name = author?.name;
  return (
    <HashLink to={`/community/${id}#`}>
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
            {name ? (
              <>
                By <span>{name}</span>
              </>
            ) : (
              <>Anonymous</>
            )}
          </span>
        </div>
      </div>
    </HashLink>
  );
};

export default Card;
