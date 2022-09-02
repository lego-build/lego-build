const fs = require("node:fs");
const FileFormats = require("./FileFormats");
const BlockFiles = require("./BlockFiles");

class ConfigFile {
  constructor(blockName, configFile, fileFormats) {
    //Create the BlockFiles and BlockSpecs class
    this.FileFormats = new FileFormats(blockName, fileFormats);
    this.blockFiles = new BlockFiles(blockName, this.FileFormats, configFile);
    this.blockName = blockName;
    this.configFile = configFile;
  
  }

  getBlockFiles(){
    return this.blockFiles;
  }

  isFile() {
    return !!this.configFile.isFile;
  }

  blockExists(blockName){
    if(this.configFile.isFile){
      let filePath = this.blockFiles.generateFilePath(this.configFile.file);
      filePath = filePath.replaceAll(this.blockName, blockName);
      return fs.existsSync(filePath)
    }

    return fs.existsSync(this.configFile.path + "/" + blockName);


  }
  getBlockDirectory(blockName) {
    if (this.isFile()) {
      return this.configFile.path;
    }

    return this.configFile.path + "/" + blockName;
  }

  getBlockType() {
    return this.configFile.type;
  }

  getBlockFile() {
    if (this.configFile.isFile) {
      return this.configFile.file;
    } else {
      return this.configFile.files;
    }
  }
}

module.exports = ConfigFile;
