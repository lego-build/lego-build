import React from "react";
import { useLocation } from "react-router-dom";
import {
  Code,
  Footer,
  Heading,
  Nav,
  Section,
  SideNav,
  Terminal,
} from "../../components";
import style from "./index.module.css";

function Docs() {
  const location = useLocation().pathname;

  return (
    <div className={style.docs}>
      <Nav />
      <div className={style.main}>
        <SideNav />
        <main>
          <Section>
            <Heading element={"h1"} id={location}>
              Using lego-build
            </Heading>
            <p>
              Lego-build is a CLI tool that makes it super easy to perform
              routine tasks like creating components, pages, hooks etc, in your
              web application. It is flexible and easy to configure,
              prioritizing great developer experience.
            </p>
          </Section>
          <Section>
            <Heading element={"h2"} id={`${location}#installation`}>
              Installation
            </Heading>
            <p>To get started, install lego-build from npm globally.</p>
            <Terminal>npm i @ogteam/lego-build -g</Terminal>
          </Section>
          <Section>
            <Heading element={"h2"} id={`${location}#quick-start`}>
              Quick Start
            </Heading>
            <p>
              To quickly setup a component (Nav for instance), run the following
              command.
            </p>
            <Terminal>lego-build component Nav</Terminal>
            <p>
              But lego-build can do much more than make 'components'. Its beauty
              lies in flexibility.
            </p>
          </Section>
          <Section>
            <Heading element={"h2"} id={`${location}#philosophy`}>
              Philosophy
            </Heading>
            <p>
              While React is unopinionated, and every developer structures their
              front-end app differently, every app is made up of special files
              and folders we call{" "}
              <a href="#blocks" className={style.internal_link}>
                blocks
              </a>
              . These blocks could be components, pages, reducers, actions,
              hooks, and so much more. Lego-build allows us easily to configure
              (and mould 🤓) the blocks we'll be using in our application,
              inside a{" "}
              <a href="#json-structure" className={style.internal_link}>
                lego.json
              </a>{" "}
              file. Before we look at the overall structure of the JSON file,
              let's first model a React block as a JSON object.
            </p>
          </Section>
          <Section>
            <Heading element={"h3"} id={`${location}#blocks`}>
              Blocks
            </Heading>
            <p>Let's see how we'll model a 'component' block as an example:</p>
            <Code>
              {`{
   "type": "component", // Name of the block type
   "path": "src/components", // Path where the block will be stored, relative to root
   "isFile": false, // Whether the block is a file or a folder, false by default
   "files": [
     // Formats for files that make up the block, if the block is a folder
     {
       "name": "<name>.jsx", // Use <name> to represent the block name
       "template": "templates/jsxTemplate.jsx", // Path to file template if any
     },
     {
       "name": "<name>.scss",
     },
     {
       "name": "<name>.test.jsx",
       "template": "templates/testTemplate.jsx",
     },
   ],
   "file": null, // An object or a string(more on this) representing the file format, used if the block is a file and not a folder  
}`}
            </Code>
            <p>
              So basically, a block is a file or a collection of files, each
              with their names and templates. With this configuration, a user
              has full control over how the block is shaped and moulded.
            </p>
            <p>
              File formats that will be used over different blocks can be stored
              as constants. For example, a JSX file may be used in several
              blocks like 'component', 'page', 'layout' etc. And all of them
              might use the same template. So our config file will have a '
              <a href="#file-formats" className={style.internal_link}>
                fileFormats
              </a>
              ' object, mapping strings to fileFormat objects.
            </p>
          </Section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Docs;
