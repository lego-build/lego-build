import React from "react";
import { Footer, Nav, SideNav } from "../../components";
import style from "./index.module.css";

function Docs() {
  return (
    <div className={style.docs}>
      <Nav />
      <div className={style.main}>
        <SideNav />
        <main></main>
      </div>
      <Footer />
    </div>
  );
}

export default Docs;
