import React from "react";
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
        <p>Install lego-build from npm globally to get started.</p>
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
          However, lego-build can do much more than just create "components."
          Its beauty is in its flexibility.
        </p>
      </Section>
      <Section id="philosophy">
        <Heading element={"h2"} id={`${location}#philosophy`}>
          Philosophy
        </Heading>
        <p>
          While React is unopinionated, and each developer structures their
          front-end app differently, each app is comprised of specific files and
          directories we call{" "}
          <a href="#blocks" className={style.emphasized_link}>
            blocks
          </a>
          . These blocks might be components, pages, reducers, actions, hooks,
          and a variety of other things. Lego-build allows us easily to
          configure (and mould 🤓) the blocks we'll be using in our application,
          in a{" "}
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
        <p>As an example, consider how we'll model a 'component' block:</p>
        <Code>
          {`{
   "type": "component", // The name of the block type
   "path": "src/components", // Path relative to root where the block will be stored
   "isFile": false, // Is this a file? or a folder? False by default.
   "files": [ // If the block is a folder, the formats for the files that make up the block.
     {
       "name": "<name>.jsx", // To indicate the name of the block, use <name>.
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
   "file": null, // If the block is a file, this object or string (more on this) represents the file format.
}`}
        </Code>
        <p>
          So basically, a block is a file or a collection of files, each with
          their names and templates. With this arrangement, the user has
          complete control over how the block is formed and moulded.
        </p>
        <p>
          Constants can be used to store file formats that will be used across
          multiple blocks. A JSX file, for example, can be used in several
          blocks such as 'component,' 'page,' 'layout,' and so on. And they
          might all be using the same template. As a result, our configuration
          file will include a '
          <a href="#file-formats" className={style.emphasized_link}>
            fileFormats
          </a>
          ' object that will map strings to fileFormat objects.
        </p>
      </Section>
      <Section id="file-formats">
        <Heading element={"h3"} id={`${location}#file-formats`}>
          File Formats
        </Heading>
        <p>Let's have a look at how file formats may be reused in blocks:</p>
        <Code>
          {`{
  "fileFormats": { // Object matching file format objects to strings
    "JSX": {
      "name": "<name>.jsx", // To indicate the name of the block, use <name>.
      "template": "templates/jsxTemplate.jsx" //  The path to the template file, if any.
    }
  }
}
`}
        </Code>
        <p>
          In the 'fileFormats' property of our JSON file, we have mapped the
          string "JSX" to an object representing the JSX file format. Now,
          instead of typing objects in our blocks, we can just use the string
          properties specified in our 'fileFormats' object, as shown below:
        </p>
        <Code>
          {`{
  "type": "component", // The name of the block type
  "path": "src/components", // Path relative to root where the block will be stored
  "isFile": false, // Is this a file? or a folder? False by default.
  "files": ["JSX", "CSS", "TEST"],
  "file": null // If the block is a file, this object or string represents the file format.
}
`}
        </Code>
        <p>
          Much shorter and more succinct! You can specify the path to your
          custom templates inside the file format object. If there is a default
          template available, you can just specify “DEFAULT”. You can check out
          which file formats have default templates in the{" "}
          <a
            href="https://github.com/lego-build/lego-build/blob/package/lego.json"
            target="_blank"
            className={style.subtle_link}
          >
            default lego.json file
          </a>
          .
        </p>
      </Section>
      <Section id="templates">
        <Heading element={"h3"} id={`${location}#templates`}>
          Templates
        </Heading>
        <p>
          You can create your own custom templates for your blocks and block
          files. All you have to do is use 'blockName' everywhere you want your
          block's name to appear. As an example, consider the default JSX
          template:
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
          <a
            href="https://github.com/lego-build/lego-build/tree/package/block/templates"
            className={style.subtle_link}
            target="_blank"
          >
            template files here.
          </a>
        </p>
      </Section>
      <Section id="json-structure">
        <Heading element={"h3"} id={`${location}#json-structure`}>
          JSON Structure
        </Heading>
        <p>
          Let's take a look at the general layout of our lego.json file now that
          we've seen how blocks and fileFormats are modeled.
        </p>
        <Code>
          {`{
  "blocks": [
    // An array of blocks
    {
      "type": "component", // The name of the block type
      "path": "src/components", // Path relative to root where the block will be stored
      "isFile": false, // Is this a file? or a folder? False by default.
      "files": ["JSX", "CSS", "TEST"],
      "file": null // If the block is a file rather than a folder, this object or string represents the file format.
    }
    //...
  ],

  "fileFormats": {
    // An object mapping file objects to strings
    "JSX": {
      "name": "<name>.jsx", // To indicate the name of the block, use <name>.
      "template": "templates/jsxTemplate.jsx" // The path to the template file, if any.
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
          There are three fundamental commands: one to create the lego.json
          file, one to create (mould) blocks, and one to rename blocks.
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
        <p>The command for creating blocks has the following syntax:</p>
        <Terminal>{"lego-build <block-type> <block-name> <options>"}</Terminal>
        <p>
          We'll go through the{" "}
          <a href="#options" className={style.subtle_link}>
            options
          </a>{" "}
          in more detail later, but for now, consider an example without them:
        </p>
        <Terminal>lego-build page HomePage</Terminal>
      </Section>
      <Section id="renaming-blocks">
        <Heading element={"h3"} id={`${location}#renaming-blocks`}>
          Renaming blocks
        </Heading>
        <p>
          With lego-build, you can quickly rename blocks, which include the
          folder and all of its component files.
        </p>
        <Terminal>
          {"lego-build rename <old-name>:<block-type> to <new-name>"}
        </Terminal>
        <p>We're renaming a Nav component to Navbar in this example.</p>
        <Terminal>lego-build rename Nav:component to Navbar</Terminal>
      </Section>
      <Section id="options">
        <Heading element={"h2"} id={`${location}#options`}>
          Options
        </Heading>
        <p>When moulding a block, you have the following options:</p>
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
          The path option is used to alter the block's default path as given in
          the JSON file.
        </p>
        <Terminal>
          lego-build component Nav --path src/components/Navigation
        </Terminal>
        <p>
          If the destination for component blocks was 'src/components' in the
          lego.json file, adding the --path option produces this Nav component
          in the new path supplied, overriding the one in the lego.json file.
        </p>
      </Section>
      <Section id="summary">
        <Heading element={"h2"} id={`${location}#summary`}>
          Summary
        </Heading>
        <p>
          We've seen how lego-build enhances the development process by making
          it simple to configure and generate the blocks that make up your
          front-end project. Although lego-build was designed with React
          developers in mind, its flexibility allows it to be used in other
          front-end frameworks. In the{" "}
          <HashLink className={style.subtle_link} to="/community#">
            community
          </HashLink>{" "}
          area, you can see how other developers are utilizing lego-build.
        </p>
        <p>
          We made every effort to make this documentation as clear and easy to
          read as possible, but if you believe something is missing, please{" "}
          <HashLink className={style.subtle_link} to="/contact#">
            contact us
          </HashLink>{" "}
          or{" "}
          <a
            className={style.subtle_link}
            href="https://github.com/lego-build/lego-build/issues/new/choose"
            target="_blank"
            rel="noopener noreferrer"
          >
            open an issue
          </a>{" "}
          with your recommendations. Thanks for using our tool, we know you'll
          find it very useful.
        </p>
        <p>We're on a mission to make front-end development fun again!</p>
      </Section>
    </main>
  );
}

export default Main;
