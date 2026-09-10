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

const files = walk(path.join(__dirname, '..', 'src', 'app', 'patient'));
const colors = ['blue', 'green', 'red', 'amber', 'purple', 'teal', 'indigo', 'cyan', 'orange'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Backgrounds
  content = content.replace(/bg-\[\#101423\]/g, 'bg-card');
  content = content.replace(/bg-black\/10/g, 'bg-main');
  content = content.replace(/bg-black\/20/g, 'bg-main');
  
  // Borders
  content = content.replace(/border-border-main\/50/g, 'border-border-main');

  // 2. Base text colors to foreground (except solid blue buttons)
  content = content.replace(/text-white/g, 'text-foreground');
  content = content.replace(/text-foreground([^>]*?)bg-\[\#2563eb\]/g, 'text-white$1bg-[#2563eb]');
  content = content.replace(/bg-\[\#2563eb\]([^>]*?)text-foreground/g, 'bg-[#2563eb]$1text-white');
  
  // Protect solid green buttons
  content = content.replace(/text-foreground([^>]*?)bg-green-500/g, 'text-white$1bg-green-500');
  content = content.replace(/bg-green-500([^>]*?)text-foreground/g, 'bg-green-500$1text-white');

  // 3. Hover states
  content = content.replace(/hover:text-white/g, 'hover:text-foreground');
  content = content.replace(/group-hover:text-white/g, 'group-hover:text-foreground');

  // 4. Colored texts (make them darker in light mode)
  colors.forEach(color => {
    const regex = new RegExp(`text-${color}-400`, 'g');
    content = content.replace(regex, `text-${color}-600 dark:text-${color}-400`);
  });

  // 5. Make all text dark (replace muted and slate with foreground)
  content = content.replace(/text-muted/g, 'text-foreground');
  content = content.replace(/text-slate-700 dark:text-slate-300/g, 'text-foreground');
  content = content.replace(/text-slate-600 dark:text-slate-400/g, 'text-foreground');
  content = content.replace(/text-slate-500 dark:text-slate-400/g, 'text-foreground');
  content = content.replace(/text-slate-400/g, 'text-foreground');
  content = content.replace(/text-slate-500/g, 'text-foreground');
  content = content.replace(/text-slate-300/g, 'text-foreground');
  content = content.replace(/text-slate-200/g, 'text-foreground');

  // 6. Increase typography
  content = content.replace(/text-\[10px\]/g, 'text-xs');
  content = content.replace(/text-\[11px\]/g, 'text-sm');
  content = content.replace(/text-\[12px\]/g, 'text-sm');
  content = content.replace(/text-\[13px\]/g, 'text-base');
  content = content.replace(/text-\[14px\]/g, 'text-lg');

  // 7. Make titles bold
  content = content.replace(/text-sm font-medium text-foreground leading-tight/g, 'text-sm font-bold text-foreground leading-tight');
  content = content.replace(/text-sm font-medium text-foreground/g, 'text-sm font-bold text-foreground');
  content = content.replace(/text-base font-medium text-foreground/g, 'text-base font-bold text-foreground');
  content = content.replace(/text-lg font-medium text-foreground/g, 'text-lg font-bold text-foreground');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated patient file: ${file}`);
  }
});
