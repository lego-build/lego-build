import React from "react";
import style from "./index.module.css";
const LoaderCard = () => {
    return (
        <div className={style.container}>
            <div className={style.loadingLine}></div>
        </div>
    );
}
 
export default LoaderCard;