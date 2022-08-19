const { throws } = require("node:assert");
const fs = require("node:fs");
const Logger = require("../Logger");
const ConfigFile = require("./ConfigFile");
const UserInput = require("../UserInput");
const { read } = require("node:fs");

class Block {
  constructor(configFile, fileFormats) {
    this.configFile = configFile;
    this.files = configFile.files;
    this.config = new ConfigFile(configFile, fileFormats);
    this.userInput = new UserInput();
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
   * Generate a map containing objects that has the paths for each file needed for a block
   * @param {*} noOfFiles | The amount of items in the map to be generated
   * @param {*} blockName | The block name to be used in renaming the files
   * @returns A map conating key value pairs of number and object(the object contains the path to use for the file and
   * the location of the template)
   */
  generateFilePathsMap = (noOfFiles, blockName) => {
    const fileMap = new Map();

    for (var i = 0; i < noOfFiles; i++) {
      const tempFileObj = {};
      if (this.configFile.isFile) {
        tempFileObj["filePath"] = this.config.getFilePath(null, blockName);
        tempFileObj["templateFilePath"] = this.config.getTemplateFilePath(
          this.configFile.file.template
        );
      } else {
        tempFileObj["filePath"] = this.config.getFilePath(
          this.files[i],
          blockName
        );
        tempFileObj["templateFilePath"] = this.config.getTemplateFilePath(
          this.files[i]
        );
      }
      fileMap.set(i, tempFileObj);
    }

    return fileMap;
  };

  //This will create all the files
  createBlock = (fileMap, blockName) => {
    let templateFile;
    //Loop through the map containing all the file paths and template files
    for (const file of fileMap) {
      fs.readFile(file[1].templateFilePath, (err, data) => {
        //The template file doesn't exist so it throws an expected error, so use the default
        //template
        if (err) {
          console.log("There was an error");
        } else {
          templateFile = data.toString().replaceAll("blockName", blockName);
        }

        //After reading the file, create the file
        this.createFile(file[1].filePath, templateFile);
      });
    }
  };

  generateDirectoryName = (blockName) => {
    return this.configFile.path + "/" + blockName;
  };

  //Check if a block exists
  blockExists(blockName) {
    return (
      fs.existsSync(this.generateDirectoryName(blockName)) ||
      fs.existsSync(this.config.getFilePath(this.files, blockName))
    );
  }

  createDirectory = (blockName) => {
    //Do not create folder for single files
    let directory = this.configFile.isFile
      ? this.configFile.path
      : this.generateDirectoryName(blockName);

    fs.mkdir(directory, { recursive: true }, (err) => {
      if (err) {
        console.log("Error Occured creating Directory");
        console.log(err);
        return;
      } else {
        let numOfFiles = this.files == undefined ? 1 : this.files.length;
        this.createBlock(
          this.generateFilePathsMap(numOfFiles, blockName),
          blockName
        );
      }
    });
  };

  renameFile(oldName, newName) {
    fs.rename(oldName, newName, (err) => {
      if (err) {
        Logger.logError(`There was an error renaming ${oldName} to ${newName}`);
      }
    });
  }

  renameDirectory(oldDirectory, newDirectory) {
    fs.rename(oldDirectory, newDirectory, (err) => {
      if (err) {
        Logger.logError("There was an error creating the directory");
        return;
      }

      process.exit();
    });
  }

  generateNewBlockPath(oldBlockPath, oldBlockName, newBlockName) {
    const paths = oldBlockPath.split("/");
    paths[paths.length - 1] = paths[paths.length - 1].replaceAll(
      oldBlockName,
      newBlockName
    );
    return paths.join("/");
  }

  /**
   * Rename all the files corresponding to a particular block using recursion, first rename the single files
   * then after all the files have been renamed we arrive at the base case which checks if it is not a single
   * block type, if it is not a single block type then also rename the directory too.
   * @param {*} oldBlockName | The name of the old block, used for changing the file name
   * @param {*} newBlockName | The name of the new block, used for changing the file name
   * @param {*} fileMap | The Map containing all the paths for files corresponding to the old block
   * @param {*} index | Used to know if we have reached the base case
   */
  renameAllFiles(oldBlockName, newBlockName, fileMap, index) {
    //Base case
    if (fileMap.size == index) {
      //If it's not a single file then also rename the directory
      if (!this.configFile.isFile) {
        this.renameDirectory(
          this.generateDirectoryName(oldBlockName),
          this.generateDirectoryName(newBlockName)
        );
      } else {
        process.exit();
      }
    } else {
      //Non base case
      let oldFileName = fileMap.get(index).filePath;
      let newFileName = this.generateNewBlockPath(
        oldFileName,
        oldBlockName,
        newBlockName
      );

      fs.rename(oldFileName, newFileName, (err) => {
        if (err) {
          console.log(err);
          return;
        }

        this.renameAllFiles(oldBlockName, newBlockName, fileMap, ++index);
      });
    }
  }

  /**
   * Rename all files for a block, generates the filePathsMap for the old block and then calls
   * this.renameAllFiles
   * @param {*} oldBlockName | The name of the old block, used for searching all files related to the old block
   * @param {*} newBlockName | The name of the new block
   */
  rename(oldBlockName, newBlockName) {
    let numOfFiles = this.files == undefined ? 1 : this.files.length;
    const blockFileMap = this.generateFilePathsMap(numOfFiles, oldBlockName);

    this.renameAllFiles(oldBlockName, newBlockName, blockFileMap, 0);
  }

  main(blockName) {
    //If the block already exists then ask the user if they want to override the contents
    let readline = this.userInput.getSingleton();
    if (this.blockExists(blockName)) {
      readline.question(
        `Block already exists, are you sure you want to override the contents of the Block?(y/n)`,
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
      this.createDirectory(blockName);
    }
  }
}

module.exports = Block;
