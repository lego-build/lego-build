const chalk = require("chalk");
const heading = chalk.hex("#9d50f6");
class Help {
  static logHelp() {
    console.log(`\n${heading("Lego-build is a tool that accelerates the development of front-end applications")}.
            
${heading.bold("Usage:")}
lego-build <block-type> <block-name> [<options>]

${heading.bold("Other commands:")}       
init: lego-build init
rename: lego-build rename <old-block-name>:<block-type> to <new-block-name>

${heading.bold("Options:")}
--path: Override the default path to the block as defined by lego.json
    
Go to the docs page at ${chalk.yellow.underline("https://lego-build.github.io/docs")} for further information.`);
  }
}

module.exports = Help;
