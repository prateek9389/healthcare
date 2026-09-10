const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, '..', 'src', 'app', 'receptionist'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace any text-muted with text-foreground
  content = content.replace(/text-muted/g, 'text-foreground');
  
  // Replace any specific slate classes with text-foreground
  content = content.replace(/text-slate-700 dark:text-slate-300/g, 'text-foreground');
  content = content.replace(/text-slate-600 dark:text-slate-400/g, 'text-foreground');
  content = content.replace(/text-slate-500 dark:text-slate-400/g, 'text-foreground');
  content = content.replace(/text-slate-400/g, 'text-foreground');
  content = content.replace(/text-slate-500/g, 'text-foreground');
  content = content.replace(/text-slate-300/g, 'text-foreground');
  content = content.replace(/text-slate-200/g, 'text-foreground');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Made all text foreground: ${file}`);
  }
});
