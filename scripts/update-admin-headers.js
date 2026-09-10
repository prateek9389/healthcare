const fs = require('fs');
const path = require('path');

const adminDir = path.join(__dirname, '..', 'src', 'app', 'admin');
const dirs = fs.readdirSync(adminDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

for (const dir of dirs) {
  if (dir === 'dashboard') continue; // skip dashboard

  const filePath = path.join(adminDir, dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace "Welcome Admin - Something" with just "Welcome Admin"
    const regex = /<h1 className="text-2xl font-bold text-foreground tracking-wide">\s*Welcome Admin - (.*?)\s*<\/h1>/g;
    
    if (regex.test(content)) {
      content = content.replace(regex, `<h1 className="text-2xl font-bold text-foreground tracking-wide">\n            Welcome Admin\n          </h1>`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated header in ${dir}/page.tsx to exactly 'Welcome Admin'`);
    } else {
      console.log(`Could not find 'Welcome Admin - ...' in ${dir}/page.tsx`);
    }
  }
}
