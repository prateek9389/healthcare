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
const chartFiles = walk(path.join(__dirname, '..', 'src', 'components', 'charts'));

const allFiles = [...adminFiles, ...uiFiles, ...chartFiles];

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace all text-muted with text-foreground so everything is pitch black in light mode
  content = content.replace(/text-muted/g, 'text-foreground');
  
  // Bump up tiny fonts
  content = content.replace(/text-\[10px\]/g, 'text-[12px]');
  content = content.replace(/text-\[11px\]/g, 'text-[13px]');
  content = content.replace(/text-\[12px\]/g, 'text-[14px]');
  content = content.replace(/text-xs/g, 'text-sm');
  content = content.replace(/text-sm/g, 'text-base');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Extreme bumped: ${file}`);
  }
});
