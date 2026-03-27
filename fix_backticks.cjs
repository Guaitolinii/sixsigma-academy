const fs = require('fs');
let lines = fs.readFileSync('src/data/modules.js', 'utf8').split('\n');
let inContent = false;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  if (!inContent) {
    if (line.match(/^\s*content:\s*`\s*$/)) {
      inContent = true;
    } else if (line.match(/^\s*content:\s*`.*$/)) {
      if (!line.match(/`\s*,?\s*$/)) {
         inContent = true;
      } else {
          // single line content. 
      }
    }
  } else {
    // Check if it's the closing backtick
    if (line.match(/^\s*`\s*,?\s*$/)) {
      inContent = false;
    } else {
      // we are inside content. Escape any unescaped backticks.
      lines[i] = line.replace(/(?<!\\)`/g, '\\`');
    }
  }
}

fs.writeFileSync('src/data/modules.js', lines.join('\n'));
