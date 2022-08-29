class FileFormats {
  constructor(blockName, fileFormats) {

    this.fileFormats = new Map(Object.entries(fileFormats));

    //Set-up the default formats
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
    this.defaultFormats.set("JSX", __dirname + "/../templates/jsxTemplate.jsx");
    this.defaultFormats.set("JS", __dirname + "/../templates/jsTemplate.jsx");
    this.defaultFormats.set("TEST", __dirname + "/../templates/blank.jsx");


    //Set the default format
    this.fileFormats.set("default", {template: this.defaultFormats.get("default")});

    //Loop-through the fileFormats to replace the DEFAULTS and undefined formats
    for (const fileFormat of this.fileFormats) {
      //replace the blockNames
      if(fileFormat[1].name != undefined){
        fileFormat[1].name = fileFormat[1].name.replace("<name>", blockName);
      }


      //Set the blank formats
      if (fileFormat[1].template == undefined) {
        fileFormat[1].template = this.defaultFormats.get("default");
      }

      //Set The default formats
      else if (fileFormat[1].template && fileFormat[1].template == "DEFAULT") {
        const defaultFormat = this.defaultFormats.get(fileFormat[0]);
        if (defaultFormat != -1) {
          fileFormat[1].template = defaultFormat;
        }
      }
    }

  }

  getFiles(){
    return this.fileFormats;
  }
}

module.exports = FileFormats;
