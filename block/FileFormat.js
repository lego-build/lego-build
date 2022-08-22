class FileFormat {
  constructor(fileFormats) {
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

  
}
