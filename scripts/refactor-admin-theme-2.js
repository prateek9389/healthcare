const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
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

const adminFiles = walk(path.join(__dirname, '..', 'src', 'app', 'admin'));
const chartFiles = walk(path.join(__dirname, '..', 'src', 'components', 'charts'));
const uiFiles = walk(path.join(__dirname, '..', 'src', 'components', 'ui'));

const allFiles = [...adminFiles, ...chartFiles, ...uiFiles];

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Text colors
  content = content.replace(/text-slate-100/g, 'text-foreground');
  content = content.replace(/text-slate-200/g, 'text-muted');
  content = content.replace(/text-slate-300/g, 'text-muted');
  content = content.replace(/text-slate-400/g, 'text-muted');
  content = content.replace(/text-slate-500/g, 'text-muted');
  
  // Replace white text with foreground
  content = content.replace(/text-white(?!(\/|\b))/g, 'text-foreground');

  // Fix buttons/badges that should remain white
  content = content.replace(/text-foreground([^>]*?)bg-\[\#4f46e5\]/g, 'text-white$1bg-[#4f46e5]');
  content = content.replace(/bg-\[\#4f46e5\]([^>]*?)text-foreground/g, 'bg-[#4f46e5]$1text-white');
  
  // Badges usually should remain their original colors or text-white if they have solid background
  content = content.replace(/text-foreground([^>]*?)bg-red-500/g, 'text-white$1bg-red-500');
  content = content.replace(/bg-red-500([^>]*?)text-foreground/g, 'bg-red-500$1text-white');
  
  content = content.replace(/text-foreground([^>]*?)bg-blue-600/g, 'text-white$1bg-blue-600');
  content = content.replace(/bg-blue-600([^>]*?)text-foreground/g, 'bg-blue-600$1text-white');
  
  content = content.replace(/text-foreground([^>]*?)bg-green-500/g, 'text-white$1bg-green-500');
  content = content.replace(/bg-green-500([^>]*?)text-foreground/g, 'bg-green-500$1text-white');

  // Charts colors - if Recharts is used with fill="#fff" or "#94a3b8"
  if (file.includes('charts')) {
    content = content.replace(/fill="\#fff"/g, 'fill="var(--foreground)"');
    content = content.replace(/fill="\#ffffff"/g, 'fill="var(--foreground)"');
    content = content.replace(/fill="\#94a3b8"/g, 'fill="var(--muted)"');
    content = content.replace(/fill="\#cbd5e1"/g, 'fill="var(--muted)"');
    content = content.replace(/stroke="\#334155"/g, 'stroke="var(--border-color)"');
    content = content.replace(/stroke="\#1e293b"/g, 'stroke="var(--border-color)"');
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});
