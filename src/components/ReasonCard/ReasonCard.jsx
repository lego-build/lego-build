import { ClarityBlockLine } from "../../assets";
import style from "./index.module.css";
const ReasonCard = ({icons, headings, details}) => {
    return ( 
        <div className={style.container}>
            <span className={style.icon}><ClarityBlockLine /></span>
            <h3>BLOCK CONCEPT</h3>
            <p>While other tools just see ‘components’, we see all the parts your React app is composed of as blocks. So you can easily create other special files like hooks, reducers etc. Not just ‘components’.</p>
        </div>
     );
}
 
export default ReasonCard;