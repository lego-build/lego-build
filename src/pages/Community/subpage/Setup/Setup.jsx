import React from "react";
import style from "./index.module.css";
const Setup = ({ author:{name,profileLink }, description, id, title }) => {
    return (
        <div className={style.setup}>
            {/* {name}{profileLink}{description}{id}{title} */}
            <span className={style.link}>By <a href={profileLink}>{name}</a></span>
        </div>
    );
}
 
export default Setup;