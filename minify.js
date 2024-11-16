import fs from 'node:fs/promises';
import path from 'node:path';

const filePath = path.relative(path.basename('.'), 'index.html');

const minify = (data = '') =>
  data
    .replace(/(\r|\n)+/gi, ' ')
    .replace(/(\s)+/gi, ' ')
    .replace(/>(\s*)</gi, '><')
    .replace(/<(\s*)/gi, '<')
    .replace(/(\s*)</gi, '<')
    .replace(/<(\s*)\//gi, '</')
    .replace(/<\/(\s*)/gi, '</')
    .replace(/(\s*)>/gi, '>')
    .replace(/>(\s*)/gi, '>')
    .replace(/(\s*)\/>/gi, '/>')
    .replace(/(\s*){(\s*)/gi, '{')
    .replace(/(\s*)}(\s*)/gi, '}')
    .replace(/(\s*):(\s*)/gi, ':')
    .replace(/(\s*);(\s*)/gi, ';')
    .replace(/,(\s)*/gi, ',');

const main = async () => {
  const data = (await fs.readFile(filePath)).toString();

  const minified = minify(data);

  if (minified !== data) {
    fs.writeFile(filePath, minified, {
      encoding: 'utf-8',
    });
  }
};

main();
