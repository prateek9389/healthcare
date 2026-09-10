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

  // Backgrounds
  content = content.replace(/bg-\[\#101423\]/g, 'bg-card');
  content = content.replace(/bg-black\/10/g, 'bg-main');
  content = content.replace(/bg-black\/20/g, 'bg-main');
  
  // Borders
  content = content.replace(/border-border-main\/50/g, 'border-border-main');
  
  // Text colors
  content = content.replace(/text-slate-200/g, 'text-muted');
  content = content.replace(/text-slate-300/g, 'text-muted');
  content = content.replace(/text-slate-400/g, 'text-muted');
  content = content.replace(/text-slate-500/g, 'text-muted');
  
  // Replace white text with foreground, except for solid blue button text
  content = content.replace(/text-white/g, 'text-foreground');

  // Fix buttons that got changed to text-foreground
  content = content.replace(/text-foreground([^>]*?)bg-\[\#2563eb\]/g, 'text-white$1bg-[#2563eb]');
  content = content.replace(/bg-\[\#2563eb\]([^>]*?)text-foreground/g, 'bg-[#2563eb]$1text-white');
  
  // Fix check-in button
  content = content.replace(/text-foreground([^>]*?)bg-green-500/g, 'text-white$1bg-green-500');
  content = content.replace(/hover:text-foreground/g, 'hover:text-white');

  // Fix quick action buttons in queue page
  content = content.replace(/text-foreground text-\[12px\] font-medium rounded-lg transition-colors flex items-center justify-center gap-2">/g, 'text-white text-[12px] font-medium rounded-lg transition-colors flex items-center justify-center gap-2">');

  // Fix welcome text if any (none in these files but good to be safe)
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});
