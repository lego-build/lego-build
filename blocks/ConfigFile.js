class ConfigFile {
  constructor(configFile, fileFormats) {
    this.configFile = configFile;
    this.fileFormats = fileFormats;
  }

  getFileName(file, blockName) {
    if (this.configFile.isFile) {
      return this.configFile.file != undefined
        ? this.configFile.file.name.replace("<name>", blockName)
        : null;
    } else {
      return this.fileFormats[file] != undefined
        ? this.fileFormats[file].name.replace("<name>", blockName)
        : null;
    }
  }

  getFilePath(file, blockName) {
    let fileName = this.getFileName(file, blockName);
    //File name doesn't exist so the program shouldn't try generating a filePath
    if (fileName == null) {
      return null;
    }

    if (this.configFile.isFile) {
      return this.configFile.path + "/" + fileName;
    } else {
      return this.configFile.path + "/" + blockName + "/" + fileName;
    }
  }

  getTemplateFilePath(file) {
    //If this is a single file
    if (this.configFile.isFile) {
      let templateFilePath = this.configFile.file.template;

      if (templateFilePath == "DEFAULT") {
        switch (this.configFile.type) {
          case "reducer":
            templateFilePath = "templates/reducerTemplate.jsx";
            break;
          case "action":
            templateFilePath = "templates/actionTemplate.jsx";
            break;
          default:
            templateFilePath = "blank.jsx";
            break;
        }
      }
      return templateFilePath;
    } else {
      let templateFilePath =
        this.fileFormats[file].template == undefined
          ? "templates/blank.jsx"
          : this.fileFormats[file].template;

      //If template file path is default then find the corresponding default file
      if (templateFilePath == "DEFAULT") {
        switch (file) {
          case "JSX":
            templateFilePath = "templates/jsxTemplate.jsx";
            break;
          case "JS":
            templateFilePath = "templates/jsTemplate.js";
            break;
          default:
            templateFilePath = "templates/blank.jsx";
            break;
        }
      }
      return templateFilePath;
    }
  }
}

module.exports = ConfigFile;