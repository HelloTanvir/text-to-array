"use strict";
const fs = require("fs");
const path = require("path");
let lines = [];
const startStr = "880";
const endStr = "AM::";
const endStrLength = endStr.length;
const inputFilePath = path.join(__dirname, "../file/text.txt");
const outputFilePath = path.join(__dirname, "../compilled");
const data = fs.readFileSync(inputFilePath, "utf8");
data.split("\n").forEach((line) => {
    if (line.startsWith(startStr)) {
        lines.push(line.slice(0, line.indexOf(endStr) + endStrLength));
    }
});
console.log(lines);
fs.writeFileSync(`${outputFilePath}/textOutput.txt`, lines.join("\n"), "utf8");
