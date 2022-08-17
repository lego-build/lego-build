const { throws } = require("node:assert");
const fs = require("node:fs");
const Logger = require("../Logger");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Block {
  constructor(configFile, fileFormats) {
    this.configFile = configFile;
    this.files = this.configFile.files;
    this.fileFormats = fileFormats;
  }

  /**
   * Creates a file using a template file to add boilerplate
   * @param {*} filePath | The location to store the new file
   * @param {*} templateFile | The boilerplate code for the file to create
   */
  createFile = (filePath, templateFile) => {
    fs.writeFile(filePath, templateFile, (err) => {
      if (err) {
        console.log("Error creating new file");
        throw err;
      } else {
        Logger.logSuccess(`created '${filePath}' successfully`);
      }
    });
  };

  /**
   * Generate the paths to use for creating the block by using the configFile and the fileFormats
   * @param {file} file | the file type
   * @returns An object containing the fileName, filePath and the path to the template file
   */

  generateSingleFilePath = (blockName) => {
    let fileName = this.configFile.file.name.replace("<name>", blockName);
    let filePath = this.configFile.path + "/" + fileName;
    let templateFilePath = this.configFile.file.template;

    if (templateFilePath == "DEFAULT") {
      switch (this.configFile.type) {
        case "reducer":
          templateFilePath = "templates/reducerTemplate.jsx";
          break;
        case "action":
          templateFilePath = "templates/actionTemplate.jsx";
          break;
        default:
          templateFilePath = "blank.jsx";
          break;
      }
    }

    return {
      filePath: filePath,
      templateFilePath: templateFilePath,
    };
  };

  generatePaths = (file, blockName) => {
    let fileName = this.fileFormats[file].name.replace("<name>", blockName);
    let filePath = this.configFile.path + "/" + blockName + "/" + fileName;
    let templateFilePath =
      this.fileFormats[file].template == undefined
        ? "templates/blank.jsx"
        : this.fileFormats[file].template;

    //If template file path is default then find the corresponding default file
    if (templateFilePath == "DEFAULT") {
      switch (file) {
        case "JSX":
          templateFilePath = "templates/jsxTemplate.jsx";
          break;
        case "JS":
          templateFilePath = "templates/jsTemplate.js";
          break;
        default:
          templateFilePath = "templates/blank.jsx";
          break;
      }
    }
    return {
      filePath: filePath,
      templateFilePath: templateFilePath,
    };
  };

  generateDirectoryName = (blockName) => {
    return this.configFile.path + "/" + blockName;
  };

  /**
   * Creates all the files required for a particular block
   * @param {String} blockName | The name of the block - this will be used for the naming of the separate files
   */
  createBlocks = (blockName) => {
    //Loop through each of the file types and create the file for each
    for (var i = 0; i < this.files.length; i++) {
      let { filePath, templateFilePath } = this.generatePaths(
        this.files[i],
        blockName
      );

      //Generate the template file
      let templateFile;

      fs.readFile(templateFilePath, (err, data) => {
        //The template file doesn't exist so it throws an expected error, so use the default
        //template
        if (err) {
          console.log("There was an error");
        } else {
          templateFile = data.toString().replaceAll("blockName", blockName);
        }

        //After reading the file, create the file
        this.createFile(filePath, templateFile);
      });
    }
  };

  createSingleBlock = (blockName) => {
    let { filePath, templateFilePath } = this.generateSingleFilePath(blockName);

    //Generate the template file
    let templateFile;

    fs.readFile(templateFilePath, (err, data) => {
      //The template file doesn't exist so it throws an expected error, so use the default
      //template
      if (err) {
        console.log("There was an error");
      } else {
        templateFile = data.toString().replaceAll("blockName", blockName);
      }

      //After reading the file, create the file
      this.createFile(filePath, templateFile);
    });
  };

  createDirectory = (blockName, createBlocks, createSingleBlock) => {
    //Do not create folder for single files
    let directory = this.configFile.isFile ? this.configFile.path : this.generateDirectoryName(blockName);

    fs.mkdir(
      directory,
      { recursive: true },
      (err) => {
        if (err) {
          console.log("Error Occured creating Directory");
          console.log(err);
          return;
        } else {
          //If this is a single file then handle it differently
          if (this.configFile.isFile) {
            createSingleBlock(blockName);
          } else {
            createBlocks(blockName);
          }
        }

        console.log("Create directory is over");
      }
    );
  };

  main(blockName) {
    //If the block already exists then ask the user if they want to override the contents
    if (fs.existsSync(this.generateDirectoryName(blockName))) {
      readline.question(
        `Directory already exists, are you sure you want to override the contents of the directory?(y/n)`,
        (answer) => {
          if (answer == "y" || answer == "yes") {
            this.createDirectory(blockName, this.createFiles);
          } else if (answer == "n" || answer == "no") {
            readline.close();
          }

          readline.close();
        }
      );
    } else {
      readline.close();
      this.createDirectory(
        blockName,
        this.createBlocks,
        this.createSingleBlock
      );
    }
  }
}

module.exports = Block;
