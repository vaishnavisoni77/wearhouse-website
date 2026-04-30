const fs = require('fs');
const path = require('path');

let fixedFiles = 0;

function fixTemplates(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixTemplates(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix back the broken template literals where $ was mistakenly replaced with ₹
      // e.g., ₹{item.title} -> ${item.title}
      // e.g., ₹{product.price} -> ${product.price}
      
      const newContent = content.replace(/₹(?=\{item|\{product|\{total|\{price|\{discounted)/g, '$');
      
      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent);
        fixedFiles++;
        console.log("Fixed", fullPath);
      }
    }
  }
}

fixTemplates(path.join(__dirname, 'src'));
console.log(`Fixed templates in ${fixedFiles} files.`);
