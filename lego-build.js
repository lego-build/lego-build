const fs = require("node:fs");
const Block = require("./blocks/Block.js");
const Init = require("./init");
const Logger = require("./Logger.js");

let config;
let packageExists = true;

//Get the command line arguments
const arguments = process.argv.slice(2);

fs.readFile("lego.json", (err, data) => {
  if (err) {
    packageExists = false;
  }

  if (packageExists) {
    try {
      config = JSON.parse(data.toString());
    } catch (e) {
      console.log("Error parsing json file");
    }
  }

  main();
});

const getBlockConfig = (blockType) => {
  for (var i = 0; i < config.blocks.length; i++) {
    if (config.blocks[i].type == blockType) {
      return config.blocks[i];
    }
  }
  return null;
};

//The main function
const main = () => {
  //Switch depending on the command
  switch (arguments[0]) {
    case "init":
      const init = new Init();
      init.generatePackageFile();
      break;

    case "rename":
      console.log("rename command coming soon, so stay tuned");
      process.exit();

    case "help":
      console.log("Help command is coming soon");
      process.exit();

    default:
      if (packageExists) {
        const configFile = getBlockConfig(arguments[0]);
        if (configFile) {
          const block = new Block(configFile, config.fileFormats);
          block.main(arguments[1]);
        } else {
          Logger.logError(`Block type of '${arguments[0]} doesn't exist in package file`);
          process.exit();
        }
        break;
      } else {
        Logger.logError("Package file doesn't exist");
        process.exit();
      }
  }
};
