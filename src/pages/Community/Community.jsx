import React, { useState } from "react";
import { Header, Layout } from "../../components";
import style from "./index.module.css";

function Community() {
  const [workflows, setWorkflows] = useState([
    {
      id: 1,
      title: "TypeScript setup",
      description:
        "Workflow for React + TypeScript, including components, pages, hooks and redux blocks. Use it to speed up your workflow.",
      author: {
        name: "Akpeti Trust",
        profileLink: "https://github.com/AkpetiTrust",
      },
    },
    {
      id: 2,
      title: "React Hooks",
      description:
        "Workflow for React + TypeScript, including components, pages, hooks and redux blocks. Use it to speed up your workflow.",
      author: {
        name: "Akpeti Trust",
        profileLink: "https://github.com/AkpetiTrust",
      },
    },
    {
      id: 3,
      title: "Vue workflow",
      description:
        "Workflow for Vue, including components, pages, hooks and redux blocks. Use it to speed up your workflow.",
      author: {
        name: "Udoka",
        profileLink: "https://github.com/Onyelaudochukwuka",
      },
    },
  ]);

  return <Layout className={style.community}>
    <Header />
  </Layout>;
}

export default Community;
