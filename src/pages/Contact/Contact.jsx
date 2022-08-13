import React, { useId } from "react";
import { Footer, Nav } from "../../components";
import { Logo, Mail, Curve, Ellipse } from "../../assets";
import style from "./index.module.css";
const ellipses = [1, 2, 3, 4, 5];
const Contact = () => {
  const id = useId();
  return (
    <section className={style.contact}>
      <Nav />
      <div className={style.content}>
        {ellipses.map((a, i) => (
          <Ellipse key={id + i} className={style[`ellipse-${a}`]} />
        ))}
        <div className={style.illustrations}>
          <Mail />
          <Curve />
          <Logo className={style.logo} />
        </div>
        <div className={style.details}>
          <p>
            Have an idea you think will make the tool better? Or you just want
            to reach out? Send a{" "}
            <a
              href="https://github.com/lego-build/lego-build/tree/contact"
              target="_blank"
            >
              DM on Twitter
            </a>
            , or post an{" "}
            <a href="https://github.com/lego-build/lego-build" target="_blank">
              issue on github
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
