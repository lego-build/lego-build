import {
  ArrowsExpandOutline,
  Block,
  BlurBlob,
  ClarityBlockLine,
  ClockOutline,
} from "../../assets";
import ReasonCard from "../ReasonCard/ReasonCard";
import style from "./index.module.css";
import { HashLink } from "react-router-hash-link";
const cardDetails = [
  {
    icons: <ClarityBlockLine />,
    heading: "BLOCK CONCEPT",
    detail:
      "While other tools just see 'components,' we see all of the pieces of your React program as <b>blocks</b>. As a result, you may simply construct other special files such as hooks, reducers, and so on. Not only 'components.'",
  },
  {
    icons: <ClockOutline />,
    heading: "QUICK STARTUP",
    detail:
      "By default, the tool includes the core building blocks you'll need, such as components, pages, reducers, and actions. As a result, you can get your project up and running immediately without having to tweak the configuration.",
  },
  {
    icons: <ArrowsExpandOutline />,
    heading: "FLEXIBLE",
    detail:
      "In terms of flexibility, no other tool comes close. If you're working with a group of developers, you can all setup lego-build in the same way and stay in sync. It is appropriate for any workflow.",
  },
];
const Reason = () => {
  return (
    <section className={style.container}>
      <div className={style.details}>
        <h1 className={style.heading}>Why us?</h1>
        <p className={style.detail}>
          Why use lego-build when there are already a few CLI utilities for
          simply generating components? That's a good question.
        </p>
      </div>
      <div className={style.cards}>
        {cardDetails.map(({ detail, heading, icons }) => (
          <ReasonCard {...{ detail, heading }} key={heading}>
            {icons}
          </ReasonCard>
        ))}
      </div>
      <BlurBlob className={style.watermark} />
      <p className={style.cta}>
        Are you certain that we're good?{" "}
        <HashLink to={"/docs#"} className={style.link}>
          Get started
        </HashLink>
      </p>
      <Block className={style.block1} />
      <Block className={style.block2} />
      <Block className={style.block3} />
    </section>
  );
};

export default Reason;
