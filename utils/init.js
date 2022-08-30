const fs = require("node:fs");
const Logger = require("./Logger");
const UserInput = require("./UserInput");

class Init {
  constructor(callback) {
    this.callback = callback;
    this.userInput = new UserInput();
  }

  createPackageFile() {
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
      "file": "REDUCER"
    },
    {
      "type": "action",
      "path": "src/redux/actions",
      "isFile": true,
      "file": "ACTION"
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
    },
    "REDUCER":{
      "name": "<name>.jsx",
      "template": "DEFAULT"
    },
    "ACTION":{
      "name": "<name>.jsx",
      "template": "DEFAULT"
    }
  }    
}
    `;

    fs.writeFile("lego.json", defaaultPackage, (err) => {
      if (err) {
        Logger.logError("There was an error creating the package file :(");
        return;
      } else {
        Logger.logSuccess("Package file created successfully");
        this.callback();
      }
    });
  }

  generatePackageFile() {
    //If package exists, ask the user if they want to override and create a new package
    if (fs.existsSync("lego.json")) {
      let readline = this.userInput;
      readline.askQuestion(
        `Package file already exists, are you sure you want to override the existing package file? (y/n)`,
        () => {
          this.createPackageFile();
        }
      );
    } else {
      this.createPackageFile();
    }
  }
}

module.exports = Init;
