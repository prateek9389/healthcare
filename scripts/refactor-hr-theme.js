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

const files = walk(path.join(__dirname, '..', 'src', 'app', 'hr'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Backgrounds
  content = content.replace(/bg-\[\#101423\]/g, 'bg-card');
  content = content.replace(/bg-black\/10/g, 'bg-main');
  content = content.replace(/bg-black\/20/g, 'bg-main');
  content = content.replace(/bg-black\/40/g, 'bg-main');
  content = content.replace(/bg-background/g, 'bg-main');
  
  // Borders
  content = content.replace(/border-border-main\/50/g, 'border-border-main');
  
  // Text colors
  content = content.replace(/text-slate-200/g, 'text-muted');
  content = content.replace(/text-slate-300/g, 'text-muted');
  content = content.replace(/text-slate-400/g, 'text-muted');
  content = content.replace(/text-slate-500/g, 'text-muted');
  
  // Replace white text with foreground, except for solid buttons and tooltips
  content = content.replace(/text-white/g, 'text-foreground');

  // Fix buttons that got changed to text-foreground (blue buttons, green buttons, amber buttons, red buttons, etc)
  content = content.replace(/text-foreground([^>]*?)bg-\[\#2563eb\]/g, 'text-white$1bg-[#2563eb]');
  content = content.replace(/bg-\[\#2563eb\]([^>]*?)text-foreground/g, 'bg-[#2563eb]$1text-white');
  
  content = content.replace(/text-foreground([^>]*?)bg-blue-600/g, 'text-white$1bg-blue-600');
  content = content.replace(/bg-blue-600([^>]*?)text-foreground/g, 'bg-blue-600$1text-white');
  
  content = content.replace(/text-foreground([^>]*?)bg-purple-600/g, 'text-white$1bg-purple-600');
  content = content.replace(/bg-purple-600([^>]*?)text-foreground/g, 'bg-purple-600$1text-white');

  content = content.replace(/text-foreground([^>]*?)bg-green-500/g, 'text-white$1bg-green-500');
  content = content.replace(/hover:text-foreground/g, 'hover:text-foreground');

  // Fix quick action buttons in queue page
  content = content.replace(/text-foreground text-\[12px\] font-medium rounded-lg transition-colors flex items-center justify-center gap-2">/g, 'text-white text-[12px] font-medium rounded-lg transition-colors flex items-center justify-center gap-2">');

  // Fix RechartsTooltip that got changed
  content = content.replace(/color:\s*'#fff'/g, "color: '#fff'"); // Doesn't match because we only changed classes
  // Wait, the regex `text-white` might catch it. The tooltip text is `color: '#fff'`, we didn't touch it.

  // Add the hover color to the row items
  // In HR, rows might have hover:bg-white/5. We want hover:bg-[#7caaaf] dark:hover:bg-white/5
  content = content.replace(/hover:bg-white\/5/g, 'hover:bg-[#7caaaf] dark:hover:bg-white/5');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});

