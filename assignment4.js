//SCRIPT THAT READS ENVIRONMENT VARIABLES

require("dotenv").config();

console.log("Username:", process.env.USERNAME);
console.log("Mode:", process.env.APP_MODE);


//FILE ORGANIZER USING FS

const fs = require("fs");
const path = require("path");

const folderPath = "./files";

const files = fs.readdirSync(folderPath);

files.forEach((file) => {
  const ext = path.extname(file).slice(1);

  if (!ext) return;

  const targetFolder = path.join(folderPath, ext);

  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  const oldPath = path.join(folderPath, file);
  const newPath = path.join(targetFolder, file);

  fs.renameSync(oldPath, newPath);
  console.log(`Moved ${file} → ${ext}/`);
});
