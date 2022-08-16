class Logger{

    static logWarning(message){
        console.log("\x1b[33m%s\x1b[0m", `[WARNING] ${message}`);
    }

    static logSuccess(message){
        console.log("\x1b[32m%s\x1b[0m", `[SUCCESS] ${message}`);
    }

    static logError(message){
        console.log("\x1b[31m%s\x1b[0m", `[ERROR] ${message}`);
    }
}

module.exports = Logger;