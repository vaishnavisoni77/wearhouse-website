const fs = require('fs');
const path = require('path');

let replacedFiles = 0;

function replaceSafeCurrency(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceSafeCurrency(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace $ only if it is immediately followed by a digit, 
      // or specific variables indicating price ({item, {product, {total, {price, {discounted)
      // This avoids breaking template literals like className={`${...}`}
      const newContent = content.replace(/\$(?=\{item|\{product|\{total|\{price|\{discounted|\d)/g, '₹');
      
      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent);
        replacedFiles++;
        console.log("Updated", fullPath);
      }
    }
  }
}

replaceSafeCurrency(path.join(__dirname, 'src'));
console.log(`Replaced $ with ₹ in ${replacedFiles} files.`);
