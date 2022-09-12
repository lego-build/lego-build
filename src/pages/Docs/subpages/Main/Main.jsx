import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Code, Heading, Section, Terminal } from "../../../../components";
import style from "./index.module.css";

function Main() {
  const location = useLocation().pathname;

  return (
    <main>
      <Section>
        <Heading element={"h1"} id={location}>
          Using lego-build
        </Heading>
        <p>
          Lego-build is a CLI tool that makes it super easy to perform routine
          tasks like creating components, pages, hooks etc, in your web
          application. It is flexible and easy to configure, prioritizing great
          developer experience.
        </p>
      </Section>
      <Section id="installation">
        <Heading element={"h2"} id={`${location}#installation`}>
          Installation
        </Heading>
        <p>To get started, install lego-build from npm globally.</p>
        <Terminal>npm i @ogteam/lego-build -g</Terminal>
      </Section>
      <Section id="quick-start">
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
      <Section id="philosophy">
        <Heading element={"h2"} id={`${location}#philosophy`}>
          Philosophy
        </Heading>
        <p>
          While React is unopinionated, and every developer structures their
          front-end app differently, every app is made up of special files and
          folders we call{" "}
          <a href="#blocks" className={style.emphasized_link}>
            blocks
          </a>
          . These blocks could be components, pages, reducers, actions, hooks,
          and so much more. Lego-build allows us easily to configure (and mould
          🤓) the blocks we'll be using in our application, inside a{" "}
          <a href="#json-structure" className={style.emphasized_link}>
            lego.json
          </a>{" "}
          file. Before we look at the overall structure of the JSON file, let's
          first model a React block as a JSON object.
        </p>
      </Section>
      <Section id="blocks">
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
          So basically, a block is a file or a collection of files, each with
          their names and templates. With this configuration, a user has full
          control over how the block is shaped and moulded.
        </p>
        <p>
          File formats that will be used over different blocks can be stored as
          constants. For example, a JSX file may be used in several blocks like
          'component', 'page', 'layout' etc. And all of them might use the same
          template. So our config file will have a '
          <a href="#file-formats" className={style.emphasized_link}>
            fileFormats
          </a>
          ' object, mapping strings to fileFormat objects.
        </p>
      </Section>
      <Section id="file-formats">
        <Heading element={"h3"} id={`${location}#file-formats`}>
          File Formats
        </Heading>
        <p>Let's see how file formats can be reused in blocks:</p>
        <Code>
          {`{
  "fileFormats": {
    // Object matching file format objects to strings
    "JSX": {
      "name": "<name>.jsx", // Use <name> to represent the block name
      "template": "templates/jsxTemplate.jsx" // Path to file template if any
    }
  }
}
`}
        </Code>
        <p>
          In the 'fileFormats' property of our JSON file, we have mapped the
          string “JSX” to an object representing the JSX file format. Now,
          instead of typing objects in our blocks, we can just use the string
          properties specified in our 'fileFormats' object, as shown below:
        </p>
        <Code>
          {`{
  "type": "component", // Name of the block type
  "path": "src/components", // Path where the block will be stored, relative to root
  "isFile": false, // Whether the block is a file or a folder, false by default
  "files": ["JSX", "CSS", "TEST"],
  "file": null // An object or a string(more on this) representing the file format, used if the block is a file and not a folder
}
`}
        </Code>
        <p>
          Far shorter and concise! You can specify the path to your custom
          templates inside the file format object. If there is a default
          template available, you can just specify “DEFAULT”. You can check out
          which file formats have default templates in the{" "}
          <a href="#" target="_blank" className={style.subtle_link}>
            default lego.json file.
          </a>{" "}
        </p>
      </Section>
      <Section id="templates">
        <Heading element={"h3"} id={`${location}#templates`}>
          Templates
        </Heading>
        <p>
          You can create your own custom templates for your blocks and block
          files. All you have to do is use 'blockName' for places where you want
          your block's name to appear. Take the default JSX template as an
          example:
        </p>
        <Code>
          {`import React from "react";

function blockName() {
  return <div></div>;
}

export default blockName;
`}
        </Code>
        <p>
          View the available{" "}
          <a href="#" className={style.subtle_link} target="_blank">
            template files here.
          </a>
        </p>
      </Section>
      <Section id="json-structure">
        <Heading element={"h3"} id={`${location}#json-structure`}>
          JSON Structure
        </Heading>
        <p>
          Now that we've had a rundown of how blocks and fileFormats are
          modeled, let's now see the overall structure of our lego.json file.
        </p>
        <Code>
          {`{
  "blocks": [
    // An array of blocks
    {
      "type": "component", // Name of the block type
      "path": "src/components", // Path where the block will be stored, relative to root
      "isFile": false, // Whether the block is a file or a folder, false by default
      "files": ["JSX", "CSS", "TEST"],
      "file": null // An object representing the file format, used if the block is a file and not a folder
    }
    //...
  ],

  "fileFormats": {
    // An object mapping file objects to strings
    "JSX": {
      "name": "<name>.jsx", // Use <name> to represent the block name
      "template": "templates/jsxTemplate.jsx" // Path to file template if any
    }
    //...
  }
}
`}
        </Code>
      </Section>
      <Section id="commands">
        <Heading element={"h2"} id={`${location}#commands`}>
          Commands
        </Heading>
        <p>
          There are 3 basic commands: One for making creating the lego.json
          file, one for creating (moulding) blocks, and another for renaming
          blocks.
        </p>
      </Section>
      <Section id="initializing">
        <Heading element={"h3"} id={`${location}#initializing`}>
          Initializing the JSON file
        </Heading>
        <p>
          The first time you try to make a block with lego-build, it
          automatically creates your{" "}
          <a className={style.subtle_link} href="#json-structure">
            lego.json
          </a>{" "}
          file. But you can create it manually by running this command.
        </p>
        <Terminal>lego-build init</Terminal>
      </Section>
      <Section id="making-blocks">
        <Heading element={"h3"} id={`${location}#making-blocks`}>
          Making blocks
        </Heading>
        <p>The command for creating blocks follows this syntax:</p>
        <Terminal>{"lego-build <block-type> <block-name> <options>"}</Terminal>
        <p>
          We'll see more about the{" "}
          <a href="#options" className={style.subtle_link}>
            options
          </a>{" "}
          later, but for now let's look at an example without options:
        </p>
        <Terminal>lego-build page HomePage</Terminal>
      </Section>
      <Section id="renaming-blocks">
        <Heading element={"h3"} id={`${location}#renaming-blocks`}>
          Renaming blocks
        </Heading>
        <p>
          You can easily rename blocks, which includes the folder and all its
          component files, with lego-build.
        </p>
        <Terminal>
          {"lego-build rename <old-name>:<block-type> to <new-name>"}
        </Terminal>
        <p>In this example, we're renaming a Nav component, to Navbar</p>
        <Terminal>lego-build rename Nav:component to Navbar</Terminal>
      </Section>
      <Section id="options">
        <Heading element={"h2"} id={`${location}#options`}>
          Options
        </Heading>
        <p>You can pass some options when moulding a block, namely:</p>
        <ul className={style.ul}>
          <li>--path</li>
        </ul>
        <Terminal>
          {"lego-build <block-type> <block-name> --path <new-path>"}
        </Terminal>
      </Section>
      <Section id="path">
        <Heading element={"h3"} id={`${location}#path`}>
          Path
        </Heading>
        <p>
          The path option is used to override the default path for the block as
          specified in the JSON file.
        </p>
        <Terminal>
          lego-build component Nav --path src/components/Navigation
        </Terminal>
        <p>
          If the location for component blocks as specified in the lego.json
          file was 'src/components', using the --path option creates this Nav
          component in the new path specified, overriding the one in the
          lego.json file.
        </p>
      </Section>
      <Section id="summary">
        <Heading element={"h2"} id={`${location}#summary`}>
          Summary
        </Heading>
        <p>
          We have seen how lego-build improves development workflow by making it
          easy to configure and create the blocks your front-end app is made up
          of. Although by default, lego-build was configured with React
          developers in mind, because of its flexibility, it can actually be
          used in other front-end frameworks. You can check out how other
          developers are using lego-build in the{" "}
          <HashLink className={style.subtle_link} to="/community#">
            community
          </HashLink>{" "}
          section.
        </p>
        <p>
          We tried our best to make this documentation as detailed and easy to
          understand as possible, but if you feel something is missing, feel
          free to{" "}
          <HashLink className={style.subtle_link} to="/contact#">
            contact
          </HashLink>{" "}
          us. Thanks for using our tool, we know you'll find it very useful.
        </p>
        <p>We're on a mission to make front-end development fun again!</p>
      </Section>
    </main>
  );
}

export default Main;
