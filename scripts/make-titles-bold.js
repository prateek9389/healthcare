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

  // Change font-medium to font-bold for metric titles
  // We can target specific patterns or just the text styles we know they have
  content = content.replace(/text-\[11px\] font-medium text-foreground leading-tight/g, 'text-[11px] font-bold text-foreground leading-tight');
  content = content.replace(/text-\[12px\] font-medium text-foreground/g, 'text-[12px] font-bold text-foreground');
  content = content.replace(/text-\[11px\] font-medium text-foreground/g, 'text-[11px] font-bold text-foreground');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Made titles bold: ${file}`);
  }
});
