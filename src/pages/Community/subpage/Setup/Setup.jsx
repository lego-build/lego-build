import React from "react";
import style from "./index.module.css";
const Setup = ({ author:{name,profileLink }, description, id, title }) => {
    return (
        <div className={style.setup}>
            <div className={style.content}>
                <span className={style.link}>By <a href={profileLink}>{name}</a></span>
                <h1>{title}</h1>

            </div>
            <div className={style.terminal}>

            </div>
        </div>
    );
}
 
export default Setup;