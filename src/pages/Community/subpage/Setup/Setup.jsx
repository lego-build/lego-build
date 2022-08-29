import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import {
  Arrow,
  Dots,
  LeftDots,
  ShadowCircle,
  BlurWatermark,
} from "../../../../assets";
import { useParams } from "react-router-dom";
import { Code, JsonButton, Loader } from "../../../../components";
import { Github } from "../../../../utils/api";
import { wordParser } from "../../../../utils/functions";
import style from "./index.module.css";
const Setup = ({ loading, workflows }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState({
    name: "",
    profileLink: "",
  });
  const [json, setJson] = useState("");
  const [jsonIsLoading, setJsonIsLoading] = useState(true);

  const { workflow_id } = useParams();

  useEffect(() => {
    if (loading) return;
    async function getJSON() {
      const response = await Github.getJSON(workflow_id);
      setJson(response);
      setJsonIsLoading(false);
    }

    const activeWorkflow = workflows.find(
      (workflow) => workflow.id === workflow_id
    );
    if (!activeWorkflow) return; // Throw 404 error here
    setTitle(activeWorkflow.title);
    setDescription(activeWorkflow.description);
    setAuthor(activeWorkflow.author);
    getJSON();
  }, [loading, workflow_id, workflows]);

  if (loading || jsonIsLoading) {
    return (
       <Loader /> 
    );
  }

  return (
    <section className={style.setupcontainer}>
      <ShadowCircle className={style.shadowCircle} />
      <div className={style.setup}>
        <div className={style.content}>
          <span className={style.link}>
            By{" "}
            <a href={author.profileLink} target="_blank">
              {author.name}
            </a>
          </span>
          <h1
            className={style.title}
            data-mark={wordParser(!!title ? title : "")}
          >
            {title}
          </h1>
          <p className={style.description}>{description}</p>
          <span className={style.download}>
            <JsonButton {...{ json }} />{" "}

            <span className={style.container}>
              {" "}
              <a
                href={Github.getDownloadUrl(`${workflow_id}/templates.zip`)}
                download="templates.zip"
                className={style.template}
              >
                <span>Download Templates</span>
              </a>
            </span>
          </span>
        </div>
        <LeftDots className={style.leftDot} />
        <Dots className={style.rightDot} />
        <div className={style.editor}>
          <Code maxHeight={"400px"}>{json}</Code>
        </div>
      </div>
      <div className={style.backToCommunityContainer}>
        <HashLink to={"/community#"} className={style.communityContainer}>
          <span className={style.communityLink}>Back to community</span>{" "}
          <Arrow className={style.Arrow} />
        </HashLink>
        <BlurWatermark className={style.BlurWatermark} />
      </div>
    </section>
  );
};

export default Setup;
