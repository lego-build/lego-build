import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import style from "./index.module.css";
import Main from "./subpage/Main/Main";
import { useParams } from "react-router-dom";
import Setup from "./subpage/Setup/Setup";
import TransparentRectangle from "../../assets/illustrations/TransparentRectangle";
import { Crystals } from "../../assets";
import { Github } from "../../utils/api";
function Community() {
  const [value, resetValue] = useState("");
  const { workflow_id } = useParams();
  const [loading, setLoading] = useState(true);

  const [workflows, setWorkflows] = useState([]);

  let component = <Main {...{ value, resetValue, workflows, loading }} />;

  if (!!workflow_id) {
    component = (
      <Setup
        loading={loading}
        workflows={workflows}
        key={workflows.map((workflow) => workflow.id).join(" ")}
      />
    );
  }

  useEffect(() => {
    async function fetchData() {
      const githubResponse = await Github.getWorkflows();
      setWorkflows(githubResponse);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout className={style.community}>
      <TransparentRectangle className={style.TransparentRectangle} />
      <span className={style.Crystals}>
        <Crystals className={style.Crystal1} />
        <Crystals className={style.Crystal2} />
      </span>
      {component}
      <span className={style.Crystals2}>
        <Crystals className={style.Crystal1} />
        <Crystals className={style.Crystal2} />
      </span>
      <a
        href="https://github.com/lego-build/community"
        target="_blank"
        className={style.powered}
      >
        {" "}
        Powered by GitHub
      </a>
    </Layout>
  );
}

export default Community;
