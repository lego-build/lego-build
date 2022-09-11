const editorData = [
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
                                content: `import React from "react";
import style from "./index.module.css";

function Contact() {
  return <section className={style.Contact}>Contact</section>;
}

export default Contact;`,
                            },
                            {
                                name: "Contact.css",
                                type: "css",
                                content: `/* */`,
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
                content: `import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Community, Contact, Docs, Home } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/docs" exact element={<Docs />} />
        <Route path="/docs/:subpage" exact element={<Docs />} />
        <Route path="/community" exact element={<Community />} />
        <Route path="/community/:workflow_id" exact element={<Community />} />
      </Routes>
    </Router>
  </React.StrictMode>
);`,
            },
        ],
    },
    {
        name: "lego.json",
        type: "json",
        content: `{
  "blocks": [
    {
      "type": "component",
      "path": "src/components",
      "files": [
        {
          "name": "<name>.jsx",
          "template": "templates/component.jsx"
        },
        "MODULE_SCSS"
      ]
    },
    {
      "type": "page",
      "path": "src/pages",
      "files": [
        {
          "name": "<name>.jsx",
          "template": "templates/page.jsx"
        },
        "MODULE_SCSS"
      ]
    },
    {
      "type": "reducer",
      "path": "src/redux/reducers",
      "isFile": true,
      "file": "REDUCER"
    },
    {
      "type": "action",
      "path": "src/redux/actions",
      "isFile": true,
      "file": "ACTION"
    },
    {
      "type": "hook",
      "path": "src/utils/hooks",
      "isFile": true,
      "file": {
        "name": "<name>.jsx",
        "template": "templates/hook.jsx"
      }
    },
    {
      "type": "function",
      "path": "src/utils/functions",
      "isFile": true,
      "file": {
        "name": "<name>.jsx",
        "template": "templates/function.jsx"
      }
    }
  ],
  "fileFormats": {
    "MODULE_CSS": {
      "name": "index.module.css"
    },
    "MODULE_SCSS": {
      "name": "index.module.scss"
    }
  }
}

        `,
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
        content: `{
  "name": "react",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

      `,
    },
    {
        name: "package-lock.json",
        type: "json",
        content: `{
  "name": "frontend",
  "version": "0.1.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "name": "react",
      "version": "0.1.0",
      "dependencies": {
        "@testing-library/jest-dom": "^5.16.5",
        "@testing-library/react": "^13.3.0",
        "@testing-library/user-event": "^13.5.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-hash-link": "^2.4.3",
        "react-scripts": "5.0.1",
        "react-syntax-highlighter": "^15.5.0",
        "web-vitals": "^2.1.4"
      }
    },
    "node_modules/@adobe/css-tools": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/@adobe/css-tools/-/css-tools-4.0.1.tgz",
      "integrity": "sha512-+u76oB43nOHrF4DDWRLWDCtci7f3QJoEBigemIdIeTi1ODqjx6Tad9NCVnPRwewWlKkVab5PlK8DCtPTyX7S8g=="
    },
    "node_modules/@ampproject/remapping": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.2.0.tgz",
      "integrity": "sha512-qRmjj8nj9qmLTQXXmaR1cck3UXSRMPrbsLJAasZpF+t3riI71BXed5ebIOYwQntykeZuhjsdweEc9BxH5Jc26w==",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.1.0",
        "@jridgewell/trace-mapping": "^0.3.9"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.18.6",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.18.6.tgz",
      "integrity": "sha512-TDCmlK5eOvH+eH7cdAFlNXeVJqWIQ7gW9tY1GJIpUtFb6CmjVyq2VM3u71bOyR8CRihcCgMUYoDNyLXao3+70Q==",
      "dependencies": {
        "@babel/highlight": "^7.18.6"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.18.8",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.18.8.tgz",
      "integrity": "sha512-HSmX4WZPPK3FUxYp7g2T6EyO8j96HlZJlxmKPSh6KAcqwyDrfx7hKjXpAW/0FhFfTJsR0Yt4lAjLI2coMptIHQ==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.18.10",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.18.10.tgz",
      "integrity": "sha512-JQM6k6ENcBFKVtWvLavlvi/mPcpYZ3+R+2EySDEMSMbp7Mn4FexlbbJVrx2R7Ijhr01T8gyqrOaABWIOgxeUyw==",
      "dependencies": {
        "@ampproject/remapping": "^2.1.0",
        "@babel/code-frame": "^7.18.6",
        "@babel/generator": "^7.18.10",
        "@babel/helper-compilation-targets": "^7.18.9",
        "@babel/helper-module-transforms": "^7.18.9",
        "@babel/helpers": "^7.18.9",
        "@babel/parser": "^7.18.10",
        "@babel/template": "^7.18.10",
        "@babel/traverse": "^7.18.10",
        "@babel/types": "^7.18.10",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.1",
        "semver": "^6.3.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/core/node_modules/semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/@babel/eslint-parser": {
      "version": "7.18.9",
      "resolved": "https://registry.npmjs.org/@babel/eslint-parser/-/eslint-parser-7.18.9.tgz",
      "integrity": "sha512-KzSGpMBggz4fKbRbWLNyPVTuQr6cmCcBhOyXTw/fieOVaw5oYAwcAj4a7UKcDYCPxQq+CG1NCDZH9e2JTXquiQ==",
      "dependencies": {
        "eslint-scope": "^5.1.1",
        "eslint-visitor-keys": "^2.1.0",
        "semver": "^6.3.0"
      },
      "engines": {
        "node": "^10.13.0 || ^12.13.0 || >=14.0.0"
      },
      "peerDependencies": {
        "@babel/core": ">=7.11.0",
        "eslint": "^7.5.0 || ^8.0.0"
      }
    },
    "node_modules/@babel/eslint-parser/node_modules/eslint-scope": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
      "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^4.1.1"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/@babel/eslint-parser/node_modules/eslint-visitor-keys": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-2.1.0.tgz",
      "integrity": "sha512-0rSmRBzXgDzIsD6mGdJgevzgezI534Cer5L/vyMX0kHzT/jiB43jRhd9YUlMGYLQy2zprNmoT8qasCGtY+QaKw==",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@babel/eslint-parser/node_modules/estraverse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
      "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/@babel/eslint-parser/node_modules/semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.18.12",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.18.12.tgz",
      "integrity": "sha512-dfQ8ebCN98SvyL7IxNMCUtZQSq5R7kxgN+r8qYTGDmmSion1hX2C0zq2yo1bsCDhXixokv1SAWTZUMYbO/V5zg==",
      "dependencies": {
        "@babel/types": "^7.18.10",
        "@jridgewell/gen-mapping": "^0.3.2",
        "jsesc": "^2.5.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/generator/node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.2.tgz",
      "integrity": "sha512-mh65xKQAzI6iBcFzwv28KVWSmCkdRBWoOh+bYQGW3+6OZvbbN3TqMGo5hqYxQniRcH9F2VZIoJCm4pa3BPDK/A==",
      "dependencies": {
        "@jridgewell/set-array": "^1.0.1",
        "@jridgewell/sourcemap-codec": "^1.4.10",
        "@jridgewell/trace-mapping": "^0.3.9"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "7.18.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.18.6.tgz",
      "integrity": "sha512-duORpUiYrEpzKIop6iNbjnwKLAKnJ47csTyRACyEmWj0QdUrm5aqNJGHSSEQSUAvNW0ojX0dOmK9dZduvkfeXA==",
      "dependencies": {
        "@babel/types": "^7.18.6"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-builder-binary-assignment-operator-visitor": {
      "version": "7.18.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.18.9.tgz",
      "integrity": "sha512-yFQ0YCHoIqarl8BCRwBL8ulYUaZpz3bNsA7oFepAzee+8/+ImtADXNOmO5vJvsPff3qi+hvpkY/NYBTrBQgdNw==",
      "dependencies": {
        "@babel/helper-explode-assignable-expression": "^7.18.6",
        "@babel/types": "^7.18.9"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.18.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.18.9.tgz",
      "integrity": "sha512-tzLCyVmqUiFlcFoAPLA/gL9TeYrF61VLNtb+hvkuVaB5SUjW7jcfrglBIX1vUIoT7CLP3bBlIMeyEsIl2eFQNg==",
      "dependencies": {
        "@babel/compat-data": "^7.18.8",
        "@babel/helper-validator-option": "^7.18.6",
        "browserslist": "^4.20.2",
        "semver": "^6.3.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets/node_modules/semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/@babel/helper-create-class-features-plugin": {
      "version": "7.18.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.18.9.tgz",
      "integrity": "sha512-WvypNAYaVh23QcjpMR24CwZY2Nz6hqdOcFdPbNpV56hL5H6KiFheO7Xm1aPdlLQ7d5emYZX7VZwPp9x3z+2opw==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.18.6",
        "@babel/helper-environment-visitor": "^7.18.9",
        "@babel/helper-function-name": "^7.18.9",
        "@babel/helper-member-expression-to-functions": "^7.18.9",
        "@babel/helper-optimise-call-expression": "^7.18.6",
        "@babel/helper-replace-supers": "^7.18.9",
        "@babel/helper-split-export-declaration": "^7.18.6"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-create-regexp-features-plugin": {
      "version": "7.18.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.18.6.tgz",
      "integrity": "sha512-7LcpH1wnQLGrI+4v+nPp+zUvIkF9x0ddv1Hkdue10tg3gmRnLy97DXh4STiOf1qeIInyD69Qv5kKSZzKD8B/7A==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.18.6",
        "regexpu-core": "^5.1.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
   ......
    "yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q=="
    }
  }
}
        `,
    },
    {
        name: "README.md",
        type: "info",
        content: `# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### \`npm start\`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### \`npm test\`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### \`npm run build\`

Builds the app for production to the \`build\` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### \`npm run eject\`

**Note: this is a one-way operation. Once you \`eject\`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can \`eject\` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except \`eject\` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use \`eject\`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### \`npm run build\` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

      `,
    },
]
export default editorData;