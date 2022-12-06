const {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  renameSync,
} = require("node:fs");
const { catchSync, catchSyncNoReturn } = require("logie");
const { FileErrorHandler: FEH } = require("./Errors");

export default class File {
  static read(path) {
    return catchSync(readFileSync(path), (err) =>
      File.handler(err, FEH.read, path)
    );
  }

  static exists(path) {
    return existsSync(path);
  }

  static write(path, data) {
    catchSyncNoReturn(writeFileSync(path, data), (err) =>
      File.handler(err, FEH.write, path)
    );
  }

  static mkdir(path) {
    return catchSync(mkdirSync(path, { recursive: true }), (err) =>
      File.handler(err, FEH.mkdir)
    );
  }

  static rename(old, _new) {
    catchSync(renameSync(old, _new), (err) =>
      File.handler(err, FEH.rename, old, _new)
    );
  }

  static handler(err, cb, ...args) {
    cb(err, ...args);
  }
}
