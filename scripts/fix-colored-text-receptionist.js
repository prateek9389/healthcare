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

const colors = ['blue', 'green', 'red', 'amber', 'purple', 'teal', 'indigo', 'cyan', 'orange'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  colors.forEach(color => {
    // Replace text-color-400 with text-color-600 dark:text-color-400
    // But be careful not to match bg-color-400 or border-color-400, only text-
    const regex = new RegExp(`text-${color}-400`, 'g');
    content = content.replace(regex, `text-${color}-600 dark:text-${color}-400`);
    
    // Also handle some specific hardcoded hex colors if any (e.g. #d97706 which is amber-600)
    // In doctors page: text-[#d97706] -> text-[#d97706] dark:text-[#d97706] (already dark enough)
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated colored text: ${file}`);
  }
});
