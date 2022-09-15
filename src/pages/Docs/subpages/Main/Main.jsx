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
          Making use of Lego-build
        </Heading>
        <p>
          Lego-build is a command-line tool that makes it extremely simple to conduct basic operations in your web application, such as constructing components, pages, hooks, and so on. It is adaptable and simple to set up, with a focus on the developer experience.
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
          Run the following command to rapidly configure a component (Nav, for example).
        </p>
        <Terminal>lego-build component Nav</Terminal>
        <p>
          However, lego-build can do much more than just create "components." Its beauty is in its adaptability.
        </p>
      </Section>
      <Section id="philosophy">
        <Heading element={"h2"} id={`${location}#philosophy`}>
          Philosophy
        </Heading>
        <p>
          While React is unopinionated, and each developer constructs their front-end app uniquely, each app is comprised of specific files and directories known as{" "}
          <a href="#blocks" className={style.emphasized_link}>
            blocks
          </a>
          . These blocks might be components, pages, reducers, actions, hooks, and a variety of other things. In a{" "}
          <a href="#json-structure" className={style.emphasized_link}>
            lego.json
          </a>{" "}
          file, Lego-build allows us to simply specify (and mold) the bricks we'll be utilizing in our application. Let's first represent a React block as a JSON object before we look at the general structure of the JSON file.
        </p>
      </Section>
      <Section id="blocks">
        <Heading element={"h3"} id={`${location}#blocks`}>
          Blocks
        </Heading>
        <p>As an example, consider modeling a 'component' block:</p>
        <Code>
          {`{
   "type": "component", // The name of the block type
   "path": "src/components", // Path relative to root where the block will be stored
   "isFile": false, // Is this a file? or a folder? , which is false by default.
   "files": [
     // If the block is a folder, the formats for the files that make up the block.
     {
       "name": "<name>.jsx", // To indicate the name of the block, use <name>.
       "template": "templates/jsxTemplate.jsx", // A path to your own file template. If a default template is provided, use "DEFAULT."
     },
     {
       "name": "<name>.scss",
     },
     {
       "name": "<name>.test.jsx",
       "template": "templates/testTemplate.jsx",
     },
   ],
   "file": null, // If the block is a file rather than a folder, this object or string represents the file format.
}`}
        </Code>
        <p>
          A block is essentially a file or a collection of files, each having its own name and template. With this arrangement, the user has complete control over how the block is formed and moulded.
        </p>
        <p>
          Constants can be used to store file formats that will be used across multiple blocks. A JSX file, for example, can be used in several blocks such as 'component,' 'page,' 'layout,' and so on. And they might all be using the same template. As a result, our configuration file will include a '
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
  "fileFormats": {
 // String matching to file format objects
    "JSX": {
      "name": "<name>.jsx", // To indicate the name of the block, use <name>.
      "template": "templates/jsxTemplate.jsx" //  8The path to the template file, if appropriate.
    }
  }
}
`}
        </Code>
        <p>
          We have mapped the string "JSX" to an object representing the JSX file format in the 'fileFormats' attribute of our JSON file. We can now utilize the string attributes supplied in our 'fileFormats' object instead of typing objects in our blocks, as demonstrated below:
        </p>
        <Code>
          {`{
  "type": "component", // The name of the block type
  "path": "src/components", // Path relative to root where the block will be stored
  "isFile": false, // Is this a file? or a folder? , which is false by default.
  "files": ["JSX", "CSS", "TEST"],
  "file": null // If the block is a file rather than a folder, this object or string represents the file format.
}
`}
        </Code>
        <p>
          Much shorter and more succinct! Within the file format object, you may give the location of your own templates. If a default template is available, simply enter "DEFAULT." In the {" "}
          <a href="#" target="_blank" className={style.subtle_link}>
            default lego.json file,
          </a>{" "}
          you can see which file types have default templates.
        </p>
      </Section>
      <Section id="templates">
        <Heading element={"h3"} id={`${location}#templates`}>
          Templates
        </Heading>
        <p>
          For your blocks and block files, you may construct your own unique templates. All you have to do is use 'blockName' everywhere you want your block's name to appear. As an example, consider the default JSX template:
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
            template files by clicking here..
          </a>
        </p>
      </Section>
      <Section id="json-structure">
        <Heading element={"h3"} id={`${location}#json-structure`}>
          JSON Structure
        </Heading>
        <p>
          Let's take a look at the general layout of our lego.json file now that we've seen how blocks and fileFormats are modeled.
        </p>
        <Code>
          {`{
  "blocks": [
    // An array of blocks
    {
      "type": "component", // The name of the block type
      "path": "src/components", // Path relative to root where the block will be stored
      "isFile": false, // Is this a file? or a folder? , which is false by default.
      "files": ["JSX", "CSS", "TEST"],
      "file": null // If the block is a file rather than a folder, this object or string represents the file format.
    }
    //...
  ],

  "fileFormats": {
    // An object mapping file objects to strings
    "JSX": {
      "name": "<name>.jsx", // To indicate the name of the block, use <name>.
      "template": "templates/jsxTemplate.jsx" // The path to the template file, if appropriate.
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
          There are three fundamental commands: one to create the lego.json file, one to create (mould) bricks, and one to rename blocks.
        </p>
      </Section>
      <Section id="initializing">
        <Heading element={"h3"} id={`${location}#initializing`}>
          Creating the JSON file
        </Heading>
        <p>
          The first time you use lego-build to construct a block, it automatically produces your {" "}
          <a className={style.subtle_link} href="#json-structure">
            lego.json
          </a>{" "}
          file. You may, however, build it yourself by using this command.
        </p>
        <Terminal>lego-build init</Terminal>
      </Section>
      <Section id="making-blocks">
        <Heading element={"h3"} id={`${location}#making-blocks`}>
          Making blocks
        </Heading>
        <p>The command for constructing blocks has the following syntax:</p>
        <Terminal>{"lego-build <block-type> <block-name> <options>"}</Terminal>
        <p>
          We'll go through the {" "}
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
          With lego-build, you can quickly rename blocks, which include the folder and all of its component files.
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
          The route option is used to alter the block's default path as given in the JSON file.
        </p>
        <Terminal>
          lego-build component Nav --path src/components/Navigation
        </Terminal>
        <p>
          If the destination for component blocks was'src/components' in the lego.json file, adding the -—path option produces this Nav component in the new path supplied, overriding the one in the lego.json file.
        </p>
      </Section>
      <Section id="summary">
        <Heading element={"h2"} id={`${location}#summary`}>
          Summary
        </Heading>
        <p>
          We've seen how lego-build enhances development process by making it simple to configure and generate the components that make up your front-end project. Although lego-build was designed with React developers in mind by default, its flexibility allows it to be used in other front-end frameworks. In the {" "}
          <HashLink className={style.subtle_link} to="/community#">
            community
          </HashLink>{" "}
          area, you can see how other developers are utilizing lego-build.
        </p>
        <p>
          We made every effort to make this documentation as clear and easy to read as possible, but if you believe something is missing, please {" "}
          <HashLink className={style.subtle_link} to="/contact#">
            contact
          </HashLink>{" "}
          us or {" "}
          <a className={style.subtle_link} href="https://github.com/">
            open an issue
          </a> {" "}
          with your recommendations. Thank you for utilizing our tool; we hope you find it beneficial.
        </p>
        <p>We're on a quest to make front-end development enjoyable once more!</p>
      </Section>
    </main>
  );
}

export default Main;
