import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Heading, Section, Table } from "../../../../components";
import style from "../Main/index.module.css";

function Formats() {
  const location = useLocation().pathname;

  return (
    <main>
      <Section id="formats-reference">
        <Heading element={"h1"} id={`${location}#formats-reference`}>
          File Formats
        </Heading>
        <p>
          A file format is an object that represents the pattern of a file that is utilized in a block. It might alternatively be represented by a string in the{" "}
          <Link className={style.subtle_link} to="/docs#json-structure">
            lego.json
          </Link>{" "}
          file's 'fileFormats' attribute.
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
              <td>name</td>
              <td>-</td>
              <td>string</td>
              <td>
                {"To indicate the name of the block, use <name>."}
              </td>
            </tr>
            <tr>
              <td>template</td>
              <td>-</td>
              <td>string</td>
              <td>
                A path to your own file template. If a default template is provided, use "DEFAULT."
              </td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </main>
  );
}

export default Formats;
