import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { SideNav, Layout } from "../../components";
import style from "./index.module.css";
import { Blocks, Formats, Main } from "./subpages";

function Docs() {
  const { subpage } = useParams();
  const { hash } = useLocation();

  let component = <Main />;
  const subpageToComponent = {
    blocks: <Blocks />,
    "file-formats": <Formats />,
  };

  if (subpage) {
    component = subpageToComponent[subpage];
  }

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      element.scrollIntoView();
    }
  });

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
