import React from "react";
import { HeroIcon } from "../../assets";
import Button from "../Button/Button";
import Editor from "../Editor/Editor";
import style from "./index.module.css";

function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.left}>
        <h1>
          Taking the{" "}
          <span>
            pain <HeroIcon />
          </span>{" "}
          out of React development
        </h1>
        <p className={style.talk}>
          A CLI tool to speed up your development workflow. It helps you setup
          components, pages, reducers, hooks, (and any other React building
          block that has boilerplate code) all with a single command.
        </p>
        <div className={style.btn_group}>
          <Button to="/docs">DOCS</Button>
          <Button to="/community" outline>
            WORKFLOW SAMPLES
          </Button>
        </div>
      </div>
      <Editor />
    </section>
  );
}

export default Hero;
