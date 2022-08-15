import React from "react";
import { useLocation } from "react-router-dom";
import {
  Footer,
  Heading,
  Nav,
  Section,
  SideNav,
  Terminal,
} from "../../components";
import style from "./index.module.css";

function Docs() {
  const location = useLocation().pathname;

  return (
    <div className={style.docs}>
      <Nav />
      <div className={style.main}>
        <SideNav />
        <main>
          <Section>
            <Heading element={"h1"} id={location}>
              Using lego-build
            </Heading>
            <p>
              Lego-build is a CLI tool that makes it super easy to perform
              routine tasks like creating components, pages, hooks etc, in your
              web application. It is flexible and easy to configure,
              prioritizing great developer experience.
            </p>
          </Section>
          <Section>
            <Heading element={"h2"} id={`${location}#installation`}>
              Installation
            </Heading>
            <p>To get started, install lego-build from npm globally.</p>
            <Terminal>npm i @ogteam/lego-build -g</Terminal>
          </Section>
          <Section>
            <Heading element={"h2"} id={`${location}#quick-start`}>
              Quick Start
            </Heading>
            <p>
              To quickly setup a component (Nav for instance), run the following
              command.
            </p>
            <Terminal>lego-build component Nav</Terminal>
            <p>
              But lego-build can do much more than make ‘components’. Its beauty
              lies in flexibility.
            </p>
          </Section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Docs;
