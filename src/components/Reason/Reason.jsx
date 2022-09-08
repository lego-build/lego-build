import { ArrowsExpandOutline, Block, BlurBlob, ClarityBlockLine, ClockOutline } from "../../assets";
import ReasonCard from "../ReasonCard/ReasonCard";
import style from "./index.module.css";
const cardDetails = [
    {
        icons: <ClarityBlockLine />,
        heading: "BLOCK CONCEPT",
        detail: "While other tools just see ‘components’, we see all the parts your React app is composed of as <b>blocks</b>.So you can easily create other special files like hooks, reducers etc.Not just ‘components’."
    },
    {
        icons: <ClockOutline />,
        heading: "QUICK STARTUP",
        detail: "By default, the tool provides you with the basic blocks you’ll need, like components, pages, reducers and actions. So you can set up your project quickly, without needing to tweak the configuration."
    },
    {
        icons: <ArrowsExpandOutline />,
        heading: "FLEXIBLE",
        detail: "No other tool comes close to us in terms of flexibility. If you’re working with a team of developers, all of you can configure lego-build the same way and be in sync. It suits any workflow."
    }
];
const Reason = () => {
    return (
        <section className={style.container}>
            <div className={style.details}>
                <h1 className={style.heading}>Why us?</h1>
                <p className={style.detail}>There are already a few CLI tools available for easily creating components, so why use lego-build? Good question.</p>
            </div>
            <div className={style.cards}>
                {cardDetails.map(({ detail, heading, icons }) => <ReasonCard {...{ detail, heading }} key={heading}>{icons}</ReasonCard>)}
            </div>
            <BlurBlob className={style.watermark} />
            <p className={style.cta}>Convinced that we're good? <span className={style.link}>Get Started</span></p>
            <Block className={style.block1} />
            <Block className={style.block2} />
            <Block className={style.block3} />
        </section>
    );
}

export default Reason;