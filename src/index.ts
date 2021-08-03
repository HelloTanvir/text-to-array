const fs: any = require("fs");
const path: any = require("path");

let lines: string[] = [];

const startStr: string = "880";
const endStr: string = "AM::";
const endStrLength: number = endStr.length;

const inputFilePath: string = path.join(__dirname, "../file/text.txt");
const outputFilePath: string = path.join(__dirname, "../compilled");

const data: string = fs.readFileSync(inputFilePath, "utf8");

data.split("\n").forEach((line: string) => {
  if (line.startsWith(startStr)) {
    lines.push(line.slice(0, line.indexOf(endStr) + endStrLength));
  }
});

console.log(lines);

fs.writeFileSync(`${outputFilePath}/textOutput.txt`, lines.join("\n"), "utf8");
