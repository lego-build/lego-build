import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components";
import style from "./index.module.css";

function Error() {
  return (
    <Layout>
      <div className={style.error}>
        <h1>404</h1>
        <p>
          This page could not be found, <Link to={"/"}>go home</Link>
        </p>
      </div>
    </Layout>
  );
}

export default Error;
