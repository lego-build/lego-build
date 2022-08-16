let Reset = "\x1b[0m";
let Bright = "\x1b[1m";
let Dim = "\x1b[2m";
let Underscore = "\x1b[4m";
let Blink = "\x1b[5m";
let Reverse = "\x1b[7m";
let Hidden = "\x1b[8m";

let FgBlack = "\x1b[30m";
let FgRed = "\x1b[31m";
let FgGreen = "\x1b[32m";
let FgYellow = "\x1b[33m";
let FgBlue = "\x1b[34m";
let FgMagenta = "\x1b[35m";
let FgCyan = "\x1b[36m";
let FgWhite = "\x1b[37m";

let BgBlack = "\x1b[40m";
let BgRed = "\x1b[41m";
let BgGreen = "\x1b[42m";
let BgYellow = "\x1b[43m";
let BgBlue = "\x1b[44m";
let BgMagenta = "\x1b[45m";
let BgCyan = "\x1b[46m";
let BgWhite = "\x1b[47m";

const fs = require("node:fs");
const Logger = require("node:fs");

class Init {
  generatePackageFile() {
    let defaaultPackage = `{
"blocks": [
  {
    "type": "component",
    "path": "src/components",
    "files": ["JSX", "CSS", "TEST"]
  },
  {
    "type": "page",
    "path": "src/pages",
    "files": ["JSX", "CSS", "TEST"]
  },
  {
    "type": "reducer",
    "path": "src/redux/reducers",
    "isFile": true,
    "file": {
      "name": "<name>.jsx",
      "template": "DEFAULT"
    }
  },
  {
    "type": "action",
    "path": "src/redux/actions",
    "isFile": true,
    "file": {
      "name": "<name>.jsx",
      "template": "DEFAULT"
    }
  }
],
"fileFormats": {
  "JSX": {
    "name": "<name>.jsx",
    "template": "DEFAULT"
  },
  "JS": {
    "name": "<name>.js",
    "template": "DEFAULT"
  },
  "TEST": {
    "name": "<name>.test.js",
    "template": "DEFAULT"
  },
  "CSS": {
    "name": "<name>.css"
  },
  "SCSS": {
    "name": "<name>.scss"
  },
  "MODULE_CSS": {
    "name": "<name>.module.css"
  },
  "MODULE_SCSS": {
    "name": "<name>.module.scss"
  }
}
}
        `;

    fs.writeFile("lego.json", defaaultPackage, (err) => {
      if (err) {
        console.log("There was an error");
        console.log(err);
        return;
      } else {
        console.log("\x1b[32m%s\x1b[0m", "Package file succesfully created");
        process.exit();
      }
    });
  }
}

module.exports = Init;
