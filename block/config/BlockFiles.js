const fs = require("node:fs");
const Logger = require("../../utils/Logger");

class BlockFiles {
  constructor(blockName, fileFormats, configFile) {
    if (configFile.isFile) {
      this.files = new Array(configFile.file);
    } else {
      this.files = configFile.files;
    }

    this.homePath = configFile.path;
    this.isFile = configFile.isFile;
    this.noOfFiles = this.files.length;
    this.blockName = blockName;
    this.fileFormats = fileFormats;
  }

  generateFileName(file) {
    if (typeof file == "object")
      return file.name.replace("<name>", this.blockName);

    let fileName = this.fileFormats.getFiles().get(file)?.name;

    if (!fileName) {
      Logger.logError(`File format ${file} doesn't exist`);
      process.exit();
    }

    return fileName == undefined ? null : fileName;
  }

  generateFilePath(file) {
    let fileName = this.generateFileName(file, this.blockName);

    if (fileName == null) {
      Logger.logError("There was an issue generating the file name :(");
      return;
    }

    if (this.isFile) return this.homePath + "/" + fileName;

    return this.homePath + "/" + this.blockName + "/" + fileName;
  }

  getBlockTemplateFilePath(file) {
    if (typeof file == "object") {
      let templateFile = file.template;
      if (
        templateFile == undefined ||
        templateFile.toUpperCase() == "DEFAULT"
      ) {
        return this.fileFormats.getFiles().get("default").template;
      }
      return templateFile;
    } else {
      let templateFile = this.fileFormats.getFiles().get(file)?.template;
      if (!templateFile) {
        Logger.logError(`File format ${file} doesn't exist`);
        process.exit();
      }
      return templateFile;
    }
  }

  generateBlockFilesMap() {
    const fileMap = new Map();

    for (var i = 0; i < this.noOfFiles; i++) {
      const tempFileObj = {};

      tempFileObj["filePath"] = this.generateFilePath(this.files[i]);
      tempFileObj["templateFilePath"] = this.getBlockTemplateFilePath(
        this.files[i]
      );

      fileMap.set(i, tempFileObj);
    }

    return fileMap;
  }
}

module.exports = BlockFiles;
