#!/usr/bin/env node
const fs = require("node:fs");
const Block = require("./block/Block.js");
const Help = require("./utils/Help.js");
const Init = require("./utils/init");
const Logger = require("./utils/Logger.js");
const validators = require("./utils/validators");

let config;

/**
 * Searches the package config file to find the config file for the block specififed
 * @param {string} blockType | The name of the block type to search for
 * @returns {object} an object representing the block config file if the config file exists a
 * or null if the block config file doesn't exist
 */
const getBlockConfig = (blockType) => {
  for (let i = 0; i < config.blocks.length; i++) {
    let currentBlock = config.blocks[i];
    if (currentBlock.type == blockType) {
      return currentBlock;
    }
  }
  return null;
};

/**
 * Over-ride some keys in the blockConfigFile depending on the command line options
 * @param {object} block | The initial blockConfigFile
 * @returns a modififed blockConfigFile
 */
const blockConfigStrategy = (blockConfigFile) => {
  if (blockConfigFile) {
    //Check if there was a --path option to overide the default config path
    const pathIndex = arguments.indexOf("--path");
    //There was a path index so the next item in the list is the new path to have
    if (
      pathIndex != -1 &&
      arguments[pathIndex + 1] != undefined &&
      arguments[pathIndex + 1].length > 0
    ) {
      blockConfigFile.path = arguments[pathIndex + 1];
    }
  }

  return blockConfigFile;
};

//Get the command line arguments
const arguments = process.argv.slice(2);

const main = () => {
  if (fs.existsSync("lego.json")) {
    //Package already exists
    fs.readFile("lego.json", (err, data) => {
      if (err) {
        Logger.logError("There was an issue reading your file :(");
        return;
      }

      try {
        config = JSON.parse(data.toString());
      } catch (e) {
        Logger.logError("There was an issue parsing your lego.json :(");
        return;
      }

      start();
    });
  } else {
    if (arguments[0] != "init" && arguments[0] != "help") {
      const init = new Init(main);
      init.generatePackageFile();
    } else {
      start();
    }
  }
};

//The main function
const start = () => {
  let block;
  let blockConfigFile;
  //Switch depending on the command
  switch (arguments[0]) {
    case "init":
      const init = new Init(() => process.exit());
      init.generatePackageFile();
      break;

    case "rename":
      const blockType = arguments[1].split(":")[1];
      const oldBlockName = arguments[1].split(":")[0];
      const newBlockName = arguments[3];

      //Get the config files for the block
      blockConfigFile = blockConfigStrategy(getBlockConfig(blockType));

      if (validators.validateRenameCommand(arguments, blockConfigFile)) {
        block = new Block(oldBlockName, blockConfigFile, config.fileFormats);
        block.rename(oldBlockName, newBlockName);
      } else {
        process.exit();
      }
      break;

    case "help":
      Help.logHelp();
      process.exit();

    default:
      //Get the config files for the block
      blockConfigFile = blockConfigStrategy(getBlockConfig(arguments[0]));
      let blockName = arguments[1];

      if (validators.validateCreateBlockCommand(arguments, blockConfigFile)) {
        block = new Block(blockName, blockConfigFile, config.fileFormats);
        block.create(blockName);
      } else {
        process.exit();
      }
      break;
  }
};

main();
