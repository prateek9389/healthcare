const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const appDir = path.join(__dirname, '..', 'src', 'app');

walkDir(appDir, function(filePath) {
  if (filePath.endsWith('page.tsx') || filePath.endsWith('layout.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // We want to replace hover:bg-white/5 with hover:bg-slate-100 dark:hover:bg-white/5
    // But we must be careful not to double replace if it's already dark:hover:bg-white/5
    // So we use a negative lookbehind (if supported) or a careful regex.

    // Regex to match hover:bg-white/5 that is NOT immediately preceded by dark:
    content = content.replace(/(?<!dark:)hover:bg-white\/5/g, 'hover:bg-slate-100 dark:hover:bg-white/5');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed missing light mode hover in: ${filePath}`);
    }
  }
});
console.log('Light mode hover fix complete.');
