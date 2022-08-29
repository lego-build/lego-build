const fs = require("node:fs");
const Logger = require("../utils/Logger");
const ConfigFile = require("./config/ConfigFile");
const UserInput = require("../utils/UserInput");

class Block {
  constructor(blockName, configFile, fileFormats) {
    this.config = new ConfigFile(blockName, configFile, fileFormats);
    this.userInput = new UserInput();
  }

  //This will create all the files
  createBlockFiles = (blockName, fileMap, index) => {
    //Base case
    if (fileMap.size == index) {
      Logger.logSuccess(`created '${blockName}' successfully`);
      process.exit();
    }

    let file = fileMap.get(index);

    let templateFile;
    fs.readFile(file.templateFilePath, (err, data) => {
      //The template file doesn't exist so it throws an expected error, so use the default
      //template
      if (err) {
        console.log("There was an error");
        templateFile = "";
      } else {
        templateFile = data.toString().replaceAll("blockName", blockName);
      }

      fs.writeFile(file.filePath, templateFile, (err) => {
        if (err) {
          Logger.logError("There was an error creating new file :)");
          throw err;
        } else {
          Logger.logSuccess(`created '${file.filePath}' successfully`);

          this.createBlockFiles(blockName, fileMap, ++index);
        }
      });
    });
  };

  createBlock(blockName) {
    const filePathsMap = this.config.getBlockFiles().generateBlockFilesMap();
    // const filePathsMap = this.config.generateFilePathsMap(blockName);

    let directory = this.config.getBlockDirectory(blockName);

    fs.mkdir(directory, { recursive: true }, (err) => {
      if (err) {
        Logger.logError("Error occured creating directory");
        return;
      } else {
        this.createBlockFiles(blockName, filePathsMap, 0);
      }
    });
  }

  renameDirectory(oldDirectory, newDirectory) {
    fs.rename(oldDirectory, newDirectory, (err) => {
      if (err && err.code === "ENOENT") {
        // Old directory doesn't exist
        Logger.logError(
          `The directory "${oldDirectory}" doesn't exist to be renamed`
        );
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
      if (!this.config.isFile()) {
        this.renameDirectory(
          this.config.getBlockDirectory(oldBlockName),
          this.config.getBlockDirectory(newBlockName)
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
        if (err && err.code === "ENOENT") {
          // Old file doesn't exist
          Logger.logError(
            `The file "${oldFileName}" doesn't exist to be renamed`
          );
        } else {
          Logger.logSuccess(
            `${oldFileName} was renamed to ${newFileName} successfully`
          );
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
    //Check if the block already exists

    if (
      this.config.blockExists(newBlockName)
    ) {
      Logger.logError(`The block "${newBlockName}" already exists`);
      process.exit();
    }
    const blockFileMap = this.config.getBlockFiles().generateBlockFilesMap();

    this.renameAllFiles(oldBlockName, newBlockName, blockFileMap, 0);
  }

  create(blockName) {
    //If the block already exists then ask the user if they want to override the contents
    let readline = this.userInput.getSingleton();
    if (this.config.blockExists(blockName)) {
      this.userInput.askQuestion(
        `${blockName} ${this.config.getBlockType()} already exists, are you sure you want to override the contents of the block?(y/n)`,
        () => {
          this.createBlock(blockName);
        }
      );
    } else {
      readline.close();
      this.createBlock(blockName);
    }
  }
}

module.exports = Block;
