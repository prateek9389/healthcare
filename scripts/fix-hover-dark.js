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

    // Fix hover dark background without hover prefix
    content = content.replace(/hover:bg-slate-100 dark:bg-white\/5/g, 'hover:bg-slate-100 dark:hover:bg-white/5');
    content = content.replace(/hover:bg-slate-50 dark:bg-white\/5/g, 'hover:bg-slate-50 dark:hover:bg-white/5');
    
    content = content.replace(/hover:bg-red-100 dark:bg-red-500\/10/g, 'hover:bg-red-100 dark:hover:bg-red-500/10');
    content = content.replace(/hover:bg-blue-100 dark:bg-blue-500\/10/g, 'hover:bg-blue-100 dark:hover:bg-blue-500/10');
    content = content.replace(/hover:bg-green-100 dark:bg-green-500\/10/g, 'hover:bg-green-100 dark:hover:bg-green-500/10');
    content = content.replace(/hover:bg-purple-100 dark:bg-purple-500\/10/g, 'hover:bg-purple-100 dark:hover:bg-purple-500/10');
    content = content.replace(/hover:bg-yellow-100 dark:bg-yellow-500\/10/g, 'hover:bg-yellow-100 dark:hover:bg-yellow-500/10');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed hover bug in: ${filePath}`);
    }
  }
});
console.log('Hover dark bug fix complete.');
