const { throws } = require("node:assert");
const fs = require("node:fs");
const Logger = require("../../utils/Logger");

class ConfigFile {
  constructor(configFile, fileFormats) {
    this.configFile = configFile;
    this.fileFormats = fileFormats;
    this.noOfFiles =
      configFile.files == undefined ? 1 : configFile.files.length;

    if (configFile.isFile) {
      this.file = configFile.file;
    } else {
      this.files = configFile.files;
    }

    //Configure the default formats
    this.defaultFormats = new Map();
    this.defaultFormats.set("default", __dirname + "/../templates/blank.jsx");
    this.defaultFormats.set(
      "reducer",
      __dirname + "/../templates/reducerTemplate.jsx"
    );
    this.defaultFormats.set(
      "action",
      __dirname + "/../templates/actionTemplate.jsx"
    );
    this.defaultFormats.set(
      "JSX",
      __dirname + "/../templates/jsxTemplate.jsx"
    );
    this.defaultFormats.set("JS", __dirname + "/../templates/jsTemplate.jsx");
  }

  isFile() {
    return !!this.configFile.isFile;
  }

  getBlockDirectory(blockName) {
    return this.configFile.path + "/" + blockName;
  }

  getBlockRootDirectory(blockName) {
    if (this.isFile()) {
      return this.configFile.path;
    }

    return this.getBlockDirectory(blockName);
  }

  getBlockType() {
    return this.configFile.type;
  }

  getFileName(file, blockName) {
    if (typeof file == "object") {
      return file.name.replace("<name>", blockName);
    }

    return this.fileFormats[file] != undefined
      ? this.fileFormats[file].name.replace("<name>", blockName)
      : null;
  }

  getBlockFile() {
    if (this.configFile.isFile) {
      return this.configFile.file;
    } else {
      return this.configFile.files;
    }
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

  getBlockTemplateFilePath(file) {
    let templateFilePath;

    if (typeof file == "object") {
      templateFilePath = file.template;
    } else {
      templateFilePath = this.fileFormats[file]?.template;
    }

    //There is no template file path so end the code here
    if (typeof file == "string" && !this.fileFormats[file]) {
      Logger.logError(`File format ${file} doesn't exist`);
      process.exit();
    }

    //Check if template file exists
    if (
      templateFilePath != undefined &&
      templateFilePath != "DEFAULT" &&
      fs.existsSync(templateFilePath)
    ) {
      templateFilePath = process.cwd() + "/" + templateFilePath;
    } else if (
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

    if(templateFilePath == "DEFAULT" && this.isFile() && typeof file == "object"){
      templateFilePath = this.defaultFormats.get(this.getBlockType())
    }else if (templateFilePath == "DEFAULT") {
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
    templateFilePath = this.getBlockTemplateFilePath(file);
    return templateFilePath;
  }

  /**
   * Generate a map containing objects that has the paths for each file needed for a block
   * @param {*} blockName | The block name to be used in renaming the files
   * @returns A map conating key value pairs of number and object(the object contains the path to use for the file and
   * the location of the template)
   */
  generateFilePathsMap = (blockName) => {
    const fileMap = new Map();

    for (var i = 0; i < this.noOfFiles; i++) {
      const tempFileObj = {};
      if (this.configFile.isFile) {
        tempFileObj["filePath"] =
          this.getFilePath(this.file, blockName);
        tempFileObj["templateFilePath"] = this.getTemplateFilePath(this.file);
      } else {
        tempFileObj["filePath"] =
          this.getFilePath(this.files[i], blockName);
        tempFileObj["templateFilePath"] = this.getTemplateFilePath(
          this.files[i]
        );
      }
      fileMap.set(i, tempFileObj);
    }
    return fileMap;
  };
}

module.exports = ConfigFile;
