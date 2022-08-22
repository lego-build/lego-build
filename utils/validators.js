const Logger = require("./Logger");

class Validators {
  static validateCreateBlockCommand(args, configFile) {
    let blockType = args[0];
    let blockName = args[1];

    //Check if the block type exists
    if (!configFile) {
      Logger.logError(
        `Block type '${blockType}' doesn't exist in package file`
      );
      return false;
    }
    //Check if the block doesn't already exist

    //Check if the blockName isn't blank
    if (blockName == undefined) {
      Logger.logError("Block name can not be blank");
      return false;
    }

    //Check if the blockName is a valid name using regex;
    var format = /[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (format.test(blockName)) {
      Logger.logError(
        `Block name can not contain special characters, only alhpanumeric characters [a-zA-Z0-9] and underscore[_] can be used in the block name.`
      );
      return false;
    }

    return true;
  }

  static validateRenameCommand(args, configFile) {
    const blockType = args[1].split(":")[1];
    const oldBlockName = args[1].split(":")[0];
    const newBlockName = args[3];

    //Check if the blockType exists
    if (!configFile) {
      Logger.logError(
        `Block type '${blockType}' doesn't exist in package file`
      );
      return false;
    }

    //Check if the syntax is proper
    if (args[2] != "to") {
      Logger.logError(
        `Invalid Syntax, syntax is - 'lego-build rename <old-block-type>:<old-block-name> to <new-block-name>'`
      );
      return false;
    }

    //Check if the blockName isn't blank
    if (newBlockName == undefined) {
      Logger.logError("Block name can not be blank");
      return false;
    }

    //Check if the newBlockName is valid using regex
    var format = /[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (format.test(newBlockName)) {
      Logger.logError(
        `Block name can not contain special characters, only alhpanumeric characters [a-zA-Z0-9] and underscore[_] can be used in the block name.`
      );
      return false;
    }

    return true;
  }
}

module.exports = Validators;
