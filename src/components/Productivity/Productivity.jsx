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
          Lego-build will help you speed up your process. From your terminal, create any React block (component, page, etc.). Don't waste time creating boilerplate code; let us handle the tedious stuff so you can focus on developing your fantastic application. <b>Move quickly</b>.
        </p>
      </div>
      <RightZigZag className={style.RightZigZag} />
    </section>
  );
};

export default Features;
