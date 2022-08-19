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
          A file format is an object representing the pattern for a file used in
          a block. It could also be represented by a string in the 'fileFormats'
          property of the{" "}
          <Link className={style.subtle_link} to="/docs#json-structure">
            lego.json
          </Link>{" "}
          file.
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
                {"The file name. Use <name> to represent the block name."}
              </td>
            </tr>
            <tr>
              <td>template</td>
              <td>-</td>
              <td>string</td>
              <td>
                A path to your custom template for the file. Use “DEFAULT” to
                use the default template if available.
              </td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </main>
  );
}

export default Formats;
