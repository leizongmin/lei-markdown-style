const fs = require("fs");
const path = require("path");

const head = fs
  .readFileSync(path.resolve(__dirname, "mweb-head.tpl.css"))
  .toString();
const source = fs
  .readFileSync(path.resolve(__dirname, "../lei-md.css"))
  .toString();

const mweb =
  head +
  "\n\n\n" +
  source
    .replace(/\.lei\-md\.lei\-md\-auto\-fix/g, ".markdown-body")
    .replace(/\.lei\-md/g, ".markdown-body");
fs.writeFileSync(path.resolve(__dirname, "mweb-lei-md.css"), mweb);
