import {
  AppreciateBottomRightWatermark,
  AppreciateBottomTopRight,
  AppreciateTopLeft,
  GearIllustration,
} from "../../assets";
import CtaTeam from "../CtaTeam/CtaTeam";
import style from "./index.module.css";
const ogTeam = [
  {
    name: "Akpeti Trust",
    details: "UI Designer, Front-end developer.",
    link: "https://trust-akpeti.com",
  },
  {
    name: "Olubowale Lana",
    details: "Package developer.",
    link: "https://twitter.com/XXXLILLANI",
  },
  {
    name: "Onyela Udochukwuka",
    details: "Front-end developer.",
    link: "https://twitter.com/FUMUDUKUS",
  },
];
const CTA = () => {
  return (
    <section className={style.container}>
      <AppreciateTopLeft className={style.topLeft} />
      <AppreciateBottomRightWatermark className={style.bottomLeft} />
      <AppreciateBottomTopRight className={style.bottomTopLeft} />
      <div className={style.content}>
        <h1>Appreciate the tool?</h1>
        <p>
          This tool is currently being maintained and refined by a small team of
          broke devs working from the trenches, if you appreciate it, abeg epp
          boys and show support.
        </p>
        <a
          href="https://opencollective.com/lego-build-collective"
          target={"_blank"}
          className={style.link}
          rel="noopener noreferrer"
        >
          SUPPORT
        </a>
      </div>
      <div className={style.team}>
        <h2>THE O.G. TEAM</h2>
        <div className={style.teamMembers}>
          {ogTeam.map((data, i) => (
            <CtaTeam {...data} key={i} />
          ))}
        </div>
      </div>
      <GearIllustration className={style.gear} />
      <GearIllustration className={style.gear2} />
      <GearIllustration className={style.gear3} />
    </section>
  );
};

export default CTA;
