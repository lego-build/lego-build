const fs = require("node:fs");
const Logger = require("../../utils/Logger");

class BlockFiles {
  constructor(files, blockName,fileFormats, homePath, isFile) {
    this.homePath = homePath;
    this.files = files;
    this.isFile = isFile;
    this.noOfFiles = this.files.length;
    this.blockName = blockName;
    this.fileFormats = fileFormats;
  }

  generateFileName(file) {
    if (typeof file == "object") return file.name.replace("<name>", this.blockName);

    let fileName = this.fileFormats.getFiles().get(file).name;
    return fileName == -1 ? null : fileName;
  }

  generateFilePath(file) {
    let fileName = this.generateFileName(file, this.blockName);

    if (fileName == null) {
      console.log("Mistake somewhere");
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
      let templateFile = this.fileFormats.getFiles().get(file).template;;
      if (templateFile == -1) {
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
