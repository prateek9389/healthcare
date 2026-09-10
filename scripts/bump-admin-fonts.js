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
const uiFiles = walk(path.join(__dirname, '..', 'src', 'components', 'ui'));

const allFiles = [...adminFiles, ...uiFiles];

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Bump h1 headers from text-2xl to text-3xl
  content = content.replace(/text-2xl font-bold text-foreground/g, 'text-3xl font-bold text-foreground');
  
  // Also bump the span with text-2xl (like the waving hand emoji) to text-3xl
  content = content.replace(/className="text-2xl">👋/g, 'className="text-3xl">👋');

  // Bump h2 headers from 14px to 16px and make them bolder
  content = content.replace(/text-\[14px\] font-medium text-foreground/g, 'text-[16px] font-bold text-foreground');
  
  // Bump card titles in SparklineStatCard and similar
  content = content.replace(/text-\[13px\] font-medium text-muted/g, 'text-[14px] font-semibold text-foreground');
  
  // Bump smaller muted text to 12px
  content = content.replace(/text-\[11px\] text-muted/g, 'text-[12px] font-medium text-muted');

  // Also replace any general text-muted with text-foreground in places that need to be darker
  // The user said "make the font dark... like you did in other panels"
  // Let's replace the sparkline trend values
  content = content.replace(/text-\[11px\] font-medium/g, 'text-[13px] font-bold');
  
  // For standard list/table text
  content = content.replace(/text-\[12px\] text-muted/g, 'text-[13px] font-medium text-foreground');
  content = content.replace(/text-\[12px\] font-medium text-muted/g, 'text-[13px] font-semibold text-foreground');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated fonts in: ${file}`);
  }
});
