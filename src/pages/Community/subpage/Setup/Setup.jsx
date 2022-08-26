import React from "react";
import style from "./index.module.css";
const Setup = ({ author:{name,profileLink }, description, id, title }) => {
    return (
        <div>
            {name}{profileLink}{description}{id}{title}
        </div>
    );
}
 
export default Setup;