export const wordParser = (string) => {
    return string.split(' ').map((val) => val[0].toUpperCase()).join('');
}
