import style from "./index.module.css"
const CtaTeam = ({ name, details }) => {
    return ( 
        <div className={style.container}>
            <h3>{ name }</h3>
            <p> { details }</p>
        </div>
     );
}
 
export default CtaTeam;