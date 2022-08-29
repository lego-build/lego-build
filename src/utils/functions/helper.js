export const wordParser = (string) => {
  if (string === "") return string;

  return string
    .split(" ")
    .map((val) => val[0].toUpperCase())
    .join("");
};
export const parser = (arg) => {
  return arg.toLowerCase().replaceAll(" ", "-");
};
