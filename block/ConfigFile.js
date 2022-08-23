const fs = require("node:fs");
const Logger = require("../utils/Logger");

class ConfigFile {
  constructor(configFile, fileFormats) {
    this.configFile = configFile;
    this.fileFormats = fileFormats;

    //Configure the default formats
    this.defaultFormats = new Map();
    this.defaultFormats.set("default", "templates/blank.jsx");
    if (this.configFile.isFile) {
      this.defaultFormats.set("reducer", "templates/reducerTemplate.jsx");
      this.defaultFormats.set("action", "templates/actionTemplate.jsx");
    } else {
      this.defaultFormats.set("JSX", "templates/jsxTemplate.jsx");
      this.defaultFormats.set("JS", "templates/jsTemplate.jsx");
    }
  }

  getFileName(file, blockName) {
    if (this.configFile.isFile) {
      if (typeof file == "object")
        return file.name.replace("<name>", blockName);
      // return this.configFile.file != undefined
      //   ? this.configFile.file.name.replace("<name>", blockName)
      //   : null;
    } else {
      //Check if it is an object
      if (typeof file == "object") {
        return file.name.replace("<name>", blockName);
      }

      // return this.fileFormats[file] != undefined
      //   ? this.fileFormats[file].name.replace("<name>", blockName)
      //   : null;
    }

    return this.fileFormats[file] != undefined
      ? this.fileFormats[file].name.replace("<name>", blockName)
      : null;
  }

  getFilePath(file, blockName) {
    let fileName = this.getFileName(file, blockName);
    //File name doesn't exist so the program shouldn't try generating a filePath
    if (fileName == null) {
      //TODO:  throw new Error("This shouldn't work bro");
    }

    if (this.configFile.isFile) {
      return this.configFile.path + "/" + fileName;
    } else {
      return this.configFile.path + "/" + blockName + "/" + fileName;
    }
  }

  getBllockTemplateFilePath(file) {
    let templateFilePath;

    if (typeof file == "object") {
      templateFilePath = file.template;
    } else {
      templateFilePath = this.fileFormats[file];
    }

    //There is no template file path so end the code here
    if (!templateFilePath) {
      Logger.logError(`File format ${file} doesn't exist`);
      process.exit();
    }

    //Set the template file path to its value if it's a string type
    if (typeof file != "object")
      templateFilePath = this.fileFormats[file].template;

    //Check if template file exists
    if (
      templateFilePath != undefined &&
      templateFilePath != "DEFAULT" &&
      !fs.existsSync(templateFilePath)
    ) {
      Logger.logWarning(
        `Template file - '${templateFilePath}' doesn't exist, so a clean slate will be given`
      );
      templateFilePath = this.defaultFormats.get("default");
    }

    //If template file path is default then find the corresponding default file
    if (templateFilePath == "DEFAULT") {
      templateFilePath = this.defaultFormats.get(file);
    }

    //After everything there's no template file so use the default
    if (templateFilePath == undefined)
      templateFilePath = this.defaultFormats.get("default");

    return templateFilePath;
  }

  getTemplateFilePath(file) {
    //If this is a single file
    let templateFilePath;
    templateFilePath = this.getBllockTemplateFilePath(file);
    return templateFilePath;
  }
}

module.exports = ConfigFile;
