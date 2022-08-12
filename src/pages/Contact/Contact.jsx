import React, { useId } from "react";
import { Footer, Nav } from "../../components";
import { Logo, Mail, Curve, Ellipse } from '../../assets';
import style from "./index.module.css";
const elipses = [1,2,3,4,5]
const Contact = () => {
  const Id = useId();
  return (
    <section className={style.contact}>
      <Nav />
      <div className={style.content}>
        {elipses.map((a, i) => <Ellipse key={Id + i} className={style[`ellipse-${a}`]} />)}
        <div className={style.illustrations}>
          <Mail />
          <Curve />
          <Logo />
        </div>
        <div className={style.details}>
          <p>Have an idea you think will make the tool better? Or you just want to reach out? <a href="https://github.com/lego-build/lego-build/tree/contact">Send a DM on Twitter</a>, or post an <a href="https://github.com/lego-build/lego-build/tree/contact">issue on github</a>.</p>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
