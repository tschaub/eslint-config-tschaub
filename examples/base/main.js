import name from './dep.js';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import {readFile} from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

function main(paths) {
  const promises = paths.map(async (name) => {
    const data = await readFile(name);
    return String(data);
  });

  return Promise.all(promises);
}

process.stdout.write(`Hello, ${name}!\n`);
const paths = ['main.js', '.eslintrc'].map((name) => join(__dirname, name));
main(paths)
  .then((contents) => {
    contents.forEach((content, index) => {
      process.stdout.write(`${paths[index]}:\n${content}\n`);
    });
  })
  .catch((err) => {
    process.stderr.write(`Failed: ${err.message}`);
  });
