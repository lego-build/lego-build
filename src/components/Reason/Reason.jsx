import { BlurBlob } from "../../assets";
import ReasonCard from "../ReasonCard/ReasonCard";
import style from "./index.module.css";
const Reason = () => {
    return (
    <section className={style.container}>
            <div className={style.details}>
                <h1 className={style.heading}>Why us?</h1>
                <p className={style.detail}>There are already a few CLI tools available for easily creating components, so why use lego-build? Good question.</p>
            </div>
            <div className={style.cards}>
                <ReasonCard />
                <ReasonCard />
                <ReasonCard />
            </div>
            <BlurBlob className={style.watermark} />
            <p className={style.cta}>Convinced that we're good? <span className={style.link}>Get Started</span></p>
    </section>
    );
}
 
export default Reason;