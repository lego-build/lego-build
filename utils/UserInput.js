const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  

class UserInput{

    constructor(){
        this.singleton = readline;
    }


    getSingleton(){
        return this.singleton;
    }
}

module.exports = UserInput;