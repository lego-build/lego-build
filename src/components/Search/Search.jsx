import React from 'react'
import { useId } from 'react';
import { SearchBar, Clear } from "../../assets";
import style from "./index.module.css";
const Search = ({ value: {value, onChange}, resetValue }) => {
    const Id = useId();
  return (
      <div className={style.search}>
          <label htmlFor={Id} className={style.label}>
              <span className={style.icon}><SearchBar/> </span>
              <input value={value} onChange={onChange} type={"text"} id={Id} className={style.input} placeholder="Search for workflow" />
              <span className={`${style.clear} ${value === "" ? style.hidden : style.show}`} onClick={resetValue}><Clear /> </span>
          </label>
          <a href="/#" className={style.contribute}>Contribute Yours</a>
      </div>
  )
}

export default Search