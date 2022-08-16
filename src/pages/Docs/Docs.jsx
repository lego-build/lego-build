import React from "react";
import { useParams } from "react-router-dom";
import { Footer, Nav, SideNav } from "../../components";
import style from "./index.module.css";
import { Main } from "./subpages";

function Docs() {
  const { subpage } = useParams();

  let component;

  if (!subpage) component = <Main />;

  return (
    <div className={style.docs}>
      <Nav />
      <div className={style.main}>
        <SideNav />
        {component}
      </div>
      <Footer />
    </div>
  );
}

export default Docs;
