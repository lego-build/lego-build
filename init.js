const fs = require("node:fs");
const Logger = require("node:fs");
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
        this.callback();
      }
    });
  }

  generatePackageFile() {
    //If package exists, ask the user if they want to override and create a new package
    if (fs.existsSync("lego.json")) {
      let readline = this.userInput.getSingleton();
      readline.question(
        `Package file already exists, are you sure you want to override the existing package file? (y/n)`,
        (answer) => {
          if (answer == "y" || answer == "yes") {
            readline.close();
            this.createPackageFile();
          } else if (answer == "n" || answer == "no") {
            readline.close();
          }

          readline.close();
        }
      );
    } else {
      this.createPackageFile();
    }
  }
}

module.exports = Init;
