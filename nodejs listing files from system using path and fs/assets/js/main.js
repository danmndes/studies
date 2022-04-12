const fs = require('fs/promises');
const path = require('path');

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {

  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file)
    const stats = await fs.stat(fileFullPath)
    if (/\.git/g.test(fileFullPath)) continue; // regular expression to ignore git folder
    if (/node/g.test(fileFullPath)) continue; // regular expression to ignore node_modules folder
    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }
    if (!/\.css$/g.test(fileFullPath)) continue; // as example, listing only css files
    console.log(fileFullPath, stats.isDirectory());
  }

}

readdir('../../');