const fs = require('fs');
const filePath = 'src/data/modules.js';
let content = fs.readFileSync(filePath, 'utf8');

// The replacement was \\` which is an escaped backtick from the python perspective.
// It looks like `\`` in the file.
content = content.replace(/\\`/g, '`');

fs.writeFileSync(filePath, content);
console.log('Fixed backticks.');
