const chalk = require("chalk");

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

    askQuestion(question, successCallback){
        this.singleton.question(chalk.yellow(question), (answer)=>{
            if (answer == "y" || answer == "yes") {
                successCallback()
            }
            this.singleton.close();
        })
    }
}

module.exports = UserInput;