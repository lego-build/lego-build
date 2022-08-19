import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer, Nav, SideNav, Layout } from "../../components";
import style from "./index.module.css";
import { Blocks, Formats, Main } from "./subpages";

function Docs() {
  const { subpage } = useParams();

  let component = <Main />;
  const subpageToComponent = {
    blocks: <Blocks />,
    "file-formats": <Formats />,
  };

  if (subpage) {
    component = subpageToComponent[subpage];
  }

  return (
      <Layout className={style.docs}>
      <div className={style.main}>
        <SideNav />
        {component}
      </div>
      </Layout>
  );
}

export default Docs;
