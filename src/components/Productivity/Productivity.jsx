import {
  LeftZigZag,
  ProductivityIllustration,
  RightZigZag,
} from "../../assets";
import style from "./index.module.css";
const Features = () => {
  return (
    <section className={style.container}>
      <LeftZigZag className={style.LeftZigZag} />
      <ProductivityIllustration className={style.illustration} />
      <div className={style.content}>
        <h1 className={style.header}>Improve productivity</h1>
        <p className={style.details}>
          Speed up your workflow with lego-build. Create any React block
          (component, page etc) from your terminal. Don't waste time writing
          boilerplate code, let's do the boring stuff for you, so you just focus
          on building your wonderful application. <span> Move fast.</span>
        </p>
      </div>
      <RightZigZag className={style.RightZigZag} />
    </section>
  );
};

export default Features;
