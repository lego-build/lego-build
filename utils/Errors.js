import Logger from "./Logger";

export class Error {}

export class FileErrorHandler {
  static write(err, ...args) {
    if (err) {
      Logger.logError("There was an error creating file :)");
    } else {
      Logger.logSuccess(`Created '${args[0] || "file"}' successfully`);
    }
  }

  static read(err, ...args) {
    if (err) {
      Logger.logError(`There was an error reading ${args[0] || "file"} :(`);
    }
  }

  static rename(err, ...args) {
    if (err && err.code === "ENOENT") {
      // Old file doesn't exist
      Logger.logError(`The file "${args[0]}" doesn't exist to be renamed`);
    } else {
      Logger.logSuccess(`${args[0]} was renamed to ${args[1]} successfully`);
    }
  }

  static mkdir(err, ...args) {
    if (err) {
      Logger.logError("Error occured creating directory");
    }
  }
}
