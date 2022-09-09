import React, { useState } from "react";
import EditorCodeArea from "../EditorCodeArea/EditorCodeArea";
import EditorNav from "../EditorNav/EditorNav";
import style from "./index.module.css";

function Editor() {
  const [documentTree, setDocumentTree] = useState([
    {
      name: "public",
      type: "folder",
      children: [
        {
          name: "favicon.ico",
          type: "icon",
          content: null,
        },
        {
          name: "index.html",
          type: "html",
          content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Lego-build is a CLI tool that makes development fun again by automating routine tasks. It's a flexible tool that improves performance and greatly reduces the time it takes to ship a web application."
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the \`public\` folder during the build.
      Only files inside the \`public\` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running \`npm run build\`.
    -->
    <title>Lego-build</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run \`npm start\` or \`yarn start\`.
      To create a production bundle, use \`npm run build\` or \`yarn build\`.
    -->
  </body>
</html>`,
        },
        {
          name: "logo192.png",
          type: "media",
          content: null,
        },
        {
          name: "logo512.png",
          type: "media",
          content: null,
        },
        {
          name: "manifest.json",
          type: "json",
          content: `{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}`,
        },
      ],
    },
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            {
              name: "Nav",
              type: "folder",
              children: [
                {
                  name: "Nav.jsx",
                  type: "jsx",
                  content: `import React from "react";
import style from "./index.module.css";

function Nav() {
  return <div className={style.Nav}>Nav</div>;
}

export default Nav`,
                },
                {
                  name: "Nav.css",
                  type: "css",
                  content: "/* */",
                },
                {
                  name: "Nav.test.js",
                  type: "test",
                  content: null,
                },
              ],
            },
          ],
        },
        {
          name: "pages",
          type: "folder",
          children: [
            {
              name: "Contact",
              type: "folder",
              children: [
                {
                  name: "Contact.jsx",
                  type: "jsx",
                  content: null,
                },
                {
                  name: "Contact.css",
                  type: "css",
                  content: null,
                },
                {
                  name: "Contact.test.js",
                  type: "test",
                  content: null,
                },
              ],
            },
          ],
        },
        {
          name: "index.js",
          type: "javascript",
          content: null,
        },
      ],
    },
    {
      name: "lego.json",
      type: "json",
      content: null,
    },
    {
      name: ".gitignore",
      type: "gitignore",
      content: `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*`,
    },
    {
      name: "package.json",
      type: "json",
      content: null,
    },
    {
      name: "package-lock.json",
      type: "json",
      content: null,
    },
    {
      name: "README.md",
      type: "info",
      content: null,
    },
  ]);

  const [activeFile, setActiveFile] = useState(undefined);

  return (
    <div className={style.editor}>
      <EditorNav
        documentTree={documentTree}
        key={"DON'T_RE-RENDER"}
        setActiveFile={setActiveFile}
      />
      <EditorCodeArea activeFile={activeFile} setActiveFile={setActiveFile} />
    </div>
  );
}

export default Editor;
