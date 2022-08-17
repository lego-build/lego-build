const fs = require("node:fs");
const { mainModule } = require("node:process");
const Block = require("./blocks/Block.js");
const Init = require("./init");
const Logger = require("./Logger.js");

let config;

//Get the command line arguments
const arguments = process.argv.slice(2);

const main = () => {
  if (fs.existsSync("lego.json")) {
    //Package already exists
    fs.readFile("lego.json", (err, data) => {
      if (err) {
        console.log("There was an error reading the file");
        return;
      }

      try {
        config = JSON.parse(data.toString());
      } catch (e) {
        console.log("Error parsing json file");
        return;
      }

      start();
    });
  } else {
    const init = new Init(main);
    init.generatePackageFile();
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
  for (var i = 0; i < config.blocks.length; i++) {
    if (config.blocks[i].type == blockType) {
      return config.blocks[i];
    }
  }
  return null;
};

//The main function
const start = () => {
  //Switch depending on the command
  switch (arguments[0]) {
    case "init":
      const init = new Init(() => process.exit());
      init.generatePackageFile();
      break;

    case "rename":
      console.log("rename command coming soon, so stay tuned");
      process.exit();

    case "help":
      console.log("Help command is coming soon");
      process.exit();

    default:
      //Get the config files for the block
      const configFile = generateConfigFile(arguments[0]);

      if (configFile) {
        const block = new Block(configFile, config.fileFormats);
        block.main(arguments[1]);
      } else {
        Logger.logError(
          `Block type of '${arguments[0]} doesn't exist in package file`
        );
        process.exit();
      }
      break;
  }
};

main();
