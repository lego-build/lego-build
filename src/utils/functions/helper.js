export const wordParser = (string) => {
    return string.split(' ').map((val) => val[0].toUpperCase()).join('');
}
export const parser = (arg) => {
    var string = arg.toLowerCase().replace(' ', '-');
    return arg.indexOf(' ') > -1 ? parser(string) : string;
}
export const parserUndo = (arg) => {
    var string = arg.toLowerCase().replace('-', ' ');
     return arg.indexOf('-') > -1 ? parserUndo(string) : string.split(' ').map(val => val[0].toUpperCase() + val.substring(1)).join(' ');
 }