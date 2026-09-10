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

const files = walk(path.join(__dirname, '..', 'src', 'app', 'billing'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Backgrounds
  content = content.replace(/bg-\[\#101423\]/g, 'bg-card');
  content = content.replace(/bg-black\/10/g, 'bg-main');
  content = content.replace(/bg-black\/20/g, 'bg-main');
  content = content.replace(/bg-black\/40/g, 'bg-main');
  content = content.replace(/bg-[#0b0f19]/g, 'bg-main'); // just in case
  content = content.replace(/bg-background/g, 'bg-main');
  
  // 2. Borders
  content = content.replace(/border-border-main\/50/g, 'border-border-main');
  
  // 3. Text colors (Make them dark in light mode)
  content = content.replace(/text-slate-200/g, 'text-foreground');
  content = content.replace(/text-slate-300/g, 'text-foreground');
  content = content.replace(/text-slate-400/g, 'text-foreground');
  content = content.replace(/text-slate-500/g, 'text-foreground');
  content = content.replace(/text-muted/g, 'text-foreground');
  content = content.replace(/text-white/g, 'text-foreground');

  // 4. Fix buttons that got changed to text-foreground
  content = content.replace(/text-foreground([^>]*?)bg-purple-600/g, 'text-white$1bg-purple-600');
  content = content.replace(/bg-purple-600([^>]*?)text-foreground/g, 'bg-purple-600$1text-white');
  
  content = content.replace(/text-foreground([^>]*?)bg-blue-600/g, 'text-white$1bg-blue-600');
  content = content.replace(/bg-blue-600([^>]*?)text-foreground/g, 'bg-blue-600$1text-white');

  content = content.replace(/text-foreground([^>]*?)bg-green-600/g, 'text-white$1bg-green-600');
  content = content.replace(/bg-green-600([^>]*?)text-foreground/g, 'bg-green-600$1text-white');

  content = content.replace(/text-foreground([^>]*?)bg-orange-600/g, 'text-white$1bg-orange-600');
  content = content.replace(/bg-orange-600([^>]*?)text-foreground/g, 'bg-orange-600$1text-white');

  content = content.replace(/text-foreground([^>]*?)bg-pink-600/g, 'text-white$1bg-pink-600');
  content = content.replace(/bg-pink-600([^>]*?)text-foreground/g, 'bg-pink-600$1text-white');
  
  // Fix recharts Tooltip text color that was broken by string replace
  content = content.replace(/color:\s*'#fff'/g, "color: '#fff'");

  // 5. Font Sizes
  content = content.replace(/text-\[9px\]/g, 'text-xs');
  content = content.replace(/text-\[10px\]/g, 'text-xs');
  content = content.replace(/text-\[11px\]/g, 'text-sm');
  content = content.replace(/text-\[12px\]/g, 'text-sm');
  content = content.replace(/text-\[13px\]/g, 'text-base');
  content = content.replace(/text-\[14px\]/g, 'text-lg');
  content = content.replace(/text-\[15px\]/g, 'text-lg');
  content = content.replace(/text-\[16px\]/g, 'text-xl');
  content = content.replace(/text-\[18px\]/g, 'text-xl');
  content = content.replace(/text-\[20px\]/g, 'text-2xl');
  content = content.replace(/text-\[24px\]/g, 'text-3xl');

  // 6. Hover Backgrounds (add the user's specific hex color if missing)
  content = content.replace(/hover:bg-white\/5/g, 'hover:bg-[#7caaaf] dark:hover:bg-white/5');
  // Handle case where my earlier script already replaced it but poorly
  content = content.replace(/hover:bg-\[\#7caaaf\] dark:hover:bg-\[\#7caaaf\] dark:hover:bg-white\/5/g, 'hover:bg-[#7caaaf] dark:hover:bg-white/5');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated theme, fonts and hovers: ${file}`);
  }
});
