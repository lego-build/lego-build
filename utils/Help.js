const chalk = require("chalk");

class Help {
  static logHelp() {
    console.log(`\nLego-build is a tool that makes building front-end apps faster.
            
${chalk.bold("Usage:")}
lego-build <block-type> <block-name> [<options>]

${chalk.bold("Other commands:")}       
init: lego-build init
rename: lego-build rename <old-block-name>:<block-type> to <new-block-name>

${chalk.bold("Options:")}
--path: Override path to block as specified in lego.json
    
For detailed documentation, go to the docs page at ${chalk.underline("https://lego-build.github.io/docs")}`);
  }
}

module.exports = Help;
