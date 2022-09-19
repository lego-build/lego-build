import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Heading, Section, Table } from "../../../../components";
import style from "../Main/index.module.css";

function Blocks() {
  const location = useLocation().pathname;

  return (
    <main>
      <Section id="block-reference">
        <Heading element={"h1"} id={`${location}#block-reference`}>
          Blocks
        </Heading>
        <p>
          A block is an object that defines the structure of a folder or file
          that will be reused in your application, like a component, hook, page,
          reducer, and so on.
        </p>
        <Table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Default</th>
              <th>Data type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>type</td>
              <td>-</td>
              <td>string</td>
              <td>The name of the block type.</td>
            </tr>
            <tr>
              <td>path</td>
              <td>-</td>
              <td>string</td>
              <td>Path relative to root, where the block will be stored.</td>
            </tr>
            <tr>
              <td>isFile</td>
              <td>false</td>
              <td>boolean</td>
              <td>Specifies if the block is a file or a folder.</td>
            </tr>
            <tr>
              <td>files</td>
              <td>-</td>
              <td>array</td>
              <td>
                <Link className={style.subtle_link} to="/docs/file-formats">
                  fileFormats
                </Link>{" "}
                for files that make up the block, if the block is a folder.
              </td>
            </tr>
            <tr>
              <td>file</td>
              <td>null</td>
              <td>string, object, null</td>
              <td>
                <Link className={style.subtle_link} to="/docs/file-formats">
                  fileFormat
                </Link>{" "}
                for the block, if the block is a file.
              </td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </main>
  );
}

export default Blocks;
