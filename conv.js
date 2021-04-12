import marked from 'marked';
import fs from 'fs';
import path from 'path';

// markdown -> html 変換
const mdData = fs.readFileSync('conv.js');
const htmlData = marked(mdData.toString());
fs.mkdirSync('docs', { recursive: true });
fs.writeFileSync(path.join('docs', 'aaa.html'), htmlData);


