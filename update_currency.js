const fs = require('fs');
const path = require('path');

let replacedFiles = 0;

function replaceCurrency(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceCurrency(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Look for $ but ignore ${ used in template literals
      // Regex: match $ that is NOT followed by {
      if (content.includes('$')) {
        const newContent = content.replace(/\$([^{])/g, '₹$1');
        if (newContent !== content) {
          fs.writeFileSync(fullPath, newContent);
          replacedFiles++;
        }
      }
    }
  }
}

replaceCurrency(path.join(__dirname, 'src'));
console.log(`Replaced $ with ₹ in ${replacedFiles} files.`);
