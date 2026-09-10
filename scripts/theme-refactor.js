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

const files = walk(path.join(__dirname, '..', 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Backgrounds
  content = content.replace(/bg-\[\#0B1120\]/g, 'bg-main');
  content = content.replace(/bg-\[\#151C2C\]/g, 'bg-card');
  
  // 2. Borders
  content = content.replace(/border-white\/5/g, 'border-border-main');
  content = content.replace(/border-white\/10/g, 'border-border-main');
  content = content.replace(/border-white\/\[0\.02\]/g, 'border-border-main');
  
  // 3. Text colors
  content = content.replace(/text-slate-200/g, 'text-muted');
  content = content.replace(/text-slate-300/g, 'text-muted');
  content = content.replace(/text-slate-400/g, 'text-muted');
  content = content.replace(/text-slate-500/g, 'text-muted');
  
  // 4. White text (Careful here, replace but we will fix buttons later)
  content = content.replace(/text-white/g, 'text-foreground');

  // Fix buttons that got changed to text-foreground
  // e.g. text-foreground bg-[#4f46e5] -> text-white bg-[#4f46e5]
  content = content.replace(/text-foreground([^>]*?)bg-\[\#4f46e5\]/g, 'text-white$1bg-[#4f46e5]');
  content = content.replace(/bg-\[\#4f46e5\]([^>]*?)text-foreground/g, 'bg-[#4f46e5]$1text-white');
  
  // Fix sidebar specific - the user wants it to stay dark.
  if (file.includes('Sidebar.tsx')) {
    // Revert changes specifically for sidebar
    content = content.replace(/bg-main/g, 'bg-[#0B1120]');
    content = content.replace(/bg-card/g, 'bg-[#151C2C]');
    content = content.replace(/border-border-main/g, 'border-white/5');
    content = content.replace(/text-foreground/g, 'text-white');
    content = content.replace(/text-muted/g, 'text-slate-400');
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});
