import ReasonCard from "../ReasonCard/ReasonCard";
import style from "./index.module.css";
const Reason = () => {
    return (
    <section className={style.reason}>
            <div className={style.details}>
                <h1 className={style.header}>Why us?</h1>
                <p className={style.details}>There are already a few CLI tools available for easily creating components, so why use lego-build? Good question.</p>
            </div>
            <div className={style.cards}>
                <ReasonCard />
                <ReasonCard />
                <ReasonCard />
            </div>
            <p>Convinced that we're Good?</p>
    </section>
    );
}
 
export default Reason;