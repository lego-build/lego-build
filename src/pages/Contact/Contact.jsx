import React, { useId } from "react";
import { Layout } from "../../components";
import { Logo, Mail, Curve, Ellipse } from "../../assets";
import style from "./index.module.css";
const ellipses = [1, 2, 3, 4, 5, 6];
const Contact = () => {
  const id = useId();
  return (
    <Layout className={style.contact}>
      <div className={style.content}>
        <div className={style.blobs}>
          <div className={style.blobContainer}>
            {ellipses.map((a, i) => (
              <Ellipse key={id + i} className={style[`ellipse-${a}`]} />
            ))}
          </div>
        </div>
        <div className={style.illustrations}>
          <Mail />
          <Curve />
          <Logo className={style.logo} />
        </div>
        <div className={style.details}>
          <p>
            Have an idea you think will make the tool better? Or you just want
            to reach out? Send a{" "}
            <a href="#" target="_blank" rel="noreferrer">
              DM on Twitter
            </a>
            , or post an{" "}
            <a
              href="https://github.com/lego-build/lego-build/issues/new/choose"
              target="_blank"
              rel="noopener noreferrer"
            >
              issue on github
            </a>
            .
          </p>
        </div>
        <p aria-hidden className={style.watermark}>
          REACH OUT
        </p>
      </div>
    </Layout>
  );
};

export default Contact;
