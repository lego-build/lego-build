import style from "./index.module.css";

const JsonButton = ({json}) => {
    return (
        <a
            href={`data:text/json;charset=utf-8,${encodeURIComponent(json)}`}
            download="lego.json"
            className={style.json}
        >
            Download JSON
        </a>
    );
}
 
export default JsonButton;