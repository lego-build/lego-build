import React from "react";
import { Footer, Nav } from "../../components";
import { Logo, Mail, Curve } from '../../assets';
import style from "./index.module.css";

const Contact = () => {
  return (
    <section className="contact">
      <Nav />
      <div>
        <div>
          <Mail />
          <Curve />
          <Logo />
        </div>
        <div>
          <p>Have an idea you think will make the tool better? Or you just want to reach out? <a href="https://github.com/lego-build/lego-build/tree/contact">Send a DM on Twitter</a>, or post an <a href="https://github.com/lego-build/lego-build/tree/contact">issue on github</a>.</p>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
