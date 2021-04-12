import marked from 'marked';
import fs from 'fs';
import path from 'path';

// markdown -> html 変換
const mdData = fs.readFileSync('index.md');
const htmlData = marked(mdData.toString());
fs.mkdirSync('docs', { recursive: true });
fs.writeFileSync(path.join('docs', 'index.html'), htmlData);


