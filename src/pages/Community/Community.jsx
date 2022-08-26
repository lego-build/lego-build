import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import style from "./index.module.css";
import Main from "./subpage/Main/Main";
import { useParams } from "react-router-dom";
import { parserUndo } from "../../utils/functions";
import Setup from "./subpage/Setup/Setup";
function Community() {
  const [value, resetValue] = useState("");
  const { setup } = useParams();

  const [workflows, setWorkflows] = useState([
    {
      id: 1,
      title: "TypeScript Setup",
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
      title: "Vue Workflow",
      description:
        "Workflow for Vue, including components, pages, hooks and redux blocks. Use it to speed up your workflow.",
      author: {
        name: "Udoka",
        profileLink: "https://github.com/Onyelaudochukwuka",
      },
    },
  ]);
  let component = <Main {...{ value, resetValue, workflows }} />;
  if (!!setup) {
    const [value] = workflows.filter(({ title }) => title === parserUndo(setup))
    component = <Setup {...value} />
  }
  useEffect(() => {
    const initialValue = [
      {
        id: 1,
        title: "TypeScript Setup",
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
        title: "Vue Workflow",
        description:
          "Workflow for Vue, including components, pages, hooks and redux blocks. Use it to speed up your workflow.",
        author: {
          name: "Udoka",
          profileLink: "https://github.com/Onyelaudochukwuka",
        },
      },
    ]
    const filteredData = initialValue.filter(({ title }) => title.toLowerCase().includes(value.toLowerCase()));
    setWorkflows(filteredData);
    console.log(value)
  }, [value])
  return (
    < Layout className={style.community} >
    { component }
    < a href = "https://github.com" className = { style.powered } > Powered By GitHub</a >
    </Layout >
  );
}

export default Community;
