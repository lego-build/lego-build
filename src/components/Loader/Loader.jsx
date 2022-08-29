import style from "./index.module.css";
const Loader = () => {
    return ( 
        <div className={style.container}>
            <span className={style.icons}></span>
            <span className={style.icons}></span>
            <span className={style.icons}></span>
        </div>
    );
}
 
export default Loader;