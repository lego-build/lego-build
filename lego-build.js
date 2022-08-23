#!/usr/bin/env node

const fs = require("node:fs");
const Block = require("./block/Block.js");
const Help = require("./utils/Help.js");
const Init = require("./utils/init");
const Logger = require("./utils/Logger.js");
const validators = require("./utils/validators");

let config;

//Get the command line arguments
const arguments = process.argv.slice(2);

const main = () => {
  if (fs.existsSync("lego.json")) {
    //Package already exists
    fs.readFile("lego.json", (err, data) => {
      if (err) {
        Logger.logError("There was an issue reading your file :(")
        return;
      }

      try {
        config = JSON.parse(data.toString());
      } catch (e) {
        Logger.logError("There was an issue parsing your lego.json :(")
        return;
      }

      start();
    });
  } else {
    if (arguments[0] != "init") {
      const init = new Init(main);
      init.generatePackageFile();
    } else {
      start();
    }
  }
};

const generateConfigFile = (block) => {
  const configFile = getBlockConfig(block);

  if (configFile) {
    //Check if there was a --path parameter to overide the default config path
    const pathIndex = arguments.indexOf("--path");
    //There was a path index so the next item in the list is the new path to have
    if (
      pathIndex != -1 &&
      arguments[pathIndex + 1] != undefined &&
      arguments[pathIndex + 1].length > 0
    ) {
      configFile.path = arguments[pathIndex + 1];
    }
  }

  return configFile;
};

const getBlockConfig = (blockType) => {
  for (let i = 0; i < config.blocks.length; i++) {
    let currentBlock = config.blocks[i];
    if (currentBlock.type == blockType) {
      return currentBlock;
    }
  }
  return null;
};

//The main function
const start = () => {
  let block;
  let configFile;
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
      configFile = generateConfigFile(blockType);

      if (validators.validateRenameCommand(arguments, configFile)) {
        block = new Block(configFile, config.fileFormats);
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
      configFile = generateConfigFile(arguments[0]);

      if (validators.validateCreateBlockCommand(arguments, configFile)) {
        block = new Block(configFile, config.fileFormats);
        block.main(arguments[1]);
      } else {
        process.exit();
      }
      break;
  }
};

main();
