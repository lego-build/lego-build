import CtaTeam from "../CtaTeam/CtaTeam";
import style from "./index.module.css";
const ogTeam = [
    { name: "Akpeti Trust", details: "UI Designer, Front-end developer." },
    { name: "Olubowale Lana", details: "Package developer." },
    { name: "Onyela Udochukwuka", details: "Front-end developer." }
];
const CTA = () => {
    return (
        <section className={style.container}>
            <div className={style.content}>
                <h1>Appreciate the tool?</h1>
                <p>This tool is currently being maintained and refined by a small team of broke devs working from the trenches, if you appreciate it, abeg epp boys and show support.</p>
                <span>SUPPORT</span>
            </div>
            <div className={style.team}>
                <p>THE O.G. TEAM</p>
                <div className={style.teamMembers}>
                    {ogTeam.map((data)=><CtaTeam {...data} />)}
                </div>
            </div>
        </section>
    );
}
 
export default CTA;