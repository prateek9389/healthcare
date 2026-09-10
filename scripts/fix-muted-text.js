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

  // 1. Metric card titles (e.g. Today's Registrations, Total Doctors)
  content = content.replace(/text-\[11px\] font-medium text-muted leading-tight/g, 'text-[11px] font-medium text-slate-700 dark:text-slate-300 leading-tight');
  content = content.replace(/text-\[12px\] font-medium text-muted/g, 'text-[12px] font-medium text-slate-700 dark:text-slate-300');
  content = content.replace(/text-\[11px\] font-medium text-muted/g, 'text-[11px] font-medium text-slate-700 dark:text-slate-300');

  // 2. Patient Names, Doctor Names, etc. inside tables and lists
  // Currently they are text-[13px] font-medium text-muted or text-[12px] font-medium text-muted
  content = content.replace(/text-\[13px\] font-medium text-muted/g, 'text-[13px] font-medium text-foreground');
  
  // 3. Other list items text that shouldn't be too light
  content = content.replace(/text-\[12px\] text-muted/g, 'text-[12px] text-slate-700 dark:text-slate-300');
  content = content.replace(/text-\[11px\] text-muted/g, 'text-[11px] text-slate-600 dark:text-slate-400');
  content = content.replace(/text-\[10px\] text-muted/g, 'text-[10px] text-slate-500 dark:text-slate-400');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated text-muted: ${file}`);
  }
});
