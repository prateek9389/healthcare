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

const files = walk(path.join(__dirname, '..', 'src', 'app', 'doctor'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Backgrounds
  content = content.replace(/bg-\[\#101423\]/g, 'bg-card');
  content = content.replace(/bg-black\/10/g, 'bg-main');
  content = content.replace(/bg-black\/20/g, 'bg-main');
  content = content.replace(/bg-black\/40/g, 'bg-main');
  content = content.replace(/bg-background/g, 'bg-main');
  
  // 2. Borders
  content = content.replace(/border-border-main\/50/g, 'border-border-main');
  
  // 3. Text colors (Make them dark in light mode by using text-foreground directly, as the user requested)
  content = content.replace(/text-slate-200/g, 'text-foreground');
  content = content.replace(/text-slate-300/g, 'text-foreground');
  content = content.replace(/text-slate-400/g, 'text-foreground');
  content = content.replace(/text-slate-500/g, 'text-foreground');
  content = content.replace(/text-muted/g, 'text-foreground'); // In case some were already text-muted
  content = content.replace(/text-white/g, 'text-foreground');

  // 4. Fix buttons that got changed to text-foreground (blue buttons, green buttons, amber buttons, red buttons, etc)
  content = content.replace(/text-foreground([^>]*?)bg-\[\#2563eb\]/g, 'text-white$1bg-[#2563eb]');
  content = content.replace(/bg-\[\#2563eb\]([^>]*?)text-foreground/g, 'bg-[#2563eb]$1text-white');
  
  content = content.replace(/text-foreground([^>]*?)bg-blue-500/g, 'text-white$1bg-blue-500');
  content = content.replace(/bg-blue-500([^>]*?)text-foreground/g, 'bg-blue-500$1text-white');
  
  content = content.replace(/text-foreground([^>]*?)bg-blue-600/g, 'text-white$1bg-blue-600');
  content = content.replace(/bg-blue-600([^>]*?)text-foreground/g, 'bg-blue-600$1text-white');
  
  content = content.replace(/text-foreground([^>]*?)bg-purple-500/g, 'text-white$1bg-purple-500');
  content = content.replace(/bg-purple-500([^>]*?)text-foreground/g, 'bg-purple-500$1text-white');
  
  content = content.replace(/text-foreground([^>]*?)bg-purple-600/g, 'text-white$1bg-purple-600');
  content = content.replace(/bg-purple-600([^>]*?)text-foreground/g, 'bg-purple-600$1text-white');

  content = content.replace(/text-foreground([^>]*?)bg-green-500/g, 'text-white$1bg-green-500');
  content = content.replace(/bg-green-500([^>]*?)text-foreground/g, 'bg-green-500$1text-white');
  
  content = content.replace(/hover:text-foreground/g, 'hover:text-foreground');

  // Fix quick action buttons in queue page
  content = content.replace(/text-foreground text-\[12px\] font-medium rounded-lg transition-colors flex items-center justify-center gap-2">/g, 'text-white text-[12px] font-medium rounded-lg transition-colors flex items-center justify-center gap-2">');

  // Fix RechartsTooltip that got changed
  // Reverts text-foreground inside tooltip options to white (which was replaced due to string replacements)
  content = content.replace(/color:\s*'#fff'/g, "color: '#fff'");

  // 5. Font Sizes
  content = content.replace(/text-\[9px\]/g, 'text-xs');
  content = content.replace(/text-\[10px\]/g, 'text-xs');
  content = content.replace(/text-\[11px\]/g, 'text-sm');
  content = content.replace(/text-\[12px\]/g, 'text-sm');
  content = content.replace(/text-\[13px\]/g, 'text-base');
  content = content.replace(/text-\[14px\]/g, 'text-lg');
  content = content.replace(/text-\[15px\]/g, 'text-lg');

  // 6. Hover Backgrounds (add the user's specific hex color)
  content = content.replace(/hover:bg-white\/5/g, 'hover:bg-[#7caaaf] dark:hover:bg-white/5');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated theme, fonts and hovers: ${file}`);
  }
});
