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

    console.log("Format test result for " + blockName + " is " + format.test(blockName));

    if (format.test(blockName)) {
      Logger.logError(`Block name can not contain special characters, only alhpanumeric characters [a-zA-Z0-9] and underscore[_] can be used in the block name.`);
      return false;
    }

    return true;
  }
}


module.exports = Validators;