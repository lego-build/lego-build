import React from 'react'
import { useId } from 'react';
import { SearchBar } from "../../assets";
import style from "./index.module.css";
const Search = () => {
    const Id = useId();
  return (
      <div className={style.search}>
          <label for={Id} className={style.label}>
              <span className={style.icon}><SearchBar/> </span>
              <input type={"text"} id={Id} className={style.input} placeholder="Search for workflow" />
          </label>
      </div>
  )
}

export default Search