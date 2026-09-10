const fs = require('fs');
const path = require('path');

const labDir = path.join(__dirname, '..', 'src', 'app', 'lab');
const pages = ['dashboard', 'reports', 'requests', 'results', 'samples'];

function processFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Backgrounds
  content = content.replace(/bg-\[\#101423\]/g, 'bg-card');
  content = content.replace(/bg-\[\#0f121e\]/g, 'bg-main');
  content = content.replace(/bg-black\/10/g, 'bg-main border border-border-main');
  content = content.replace(/bg-black\/20/g, 'bg-main border border-border-main');
  content = content.replace(/bg-black\/40/g, 'bg-slate-200 dark:bg-black/40');
  content = content.replace(/bg-white\/5/g, 'bg-slate-100 dark:bg-white/5');

  // 2. Text Colors
  const textColorsToReplace = [
    'text-\\[\\#a8b2d1\\]',
    'text-slate-400',
    'text-gray-400',
    'text-white/60',
    'text-white/70',
    'text-slate-300'
  ];
  
  textColorsToReplace.forEach(color => {
    const regex = new RegExp(color, 'g');
    content = content.replace(regex, 'text-foreground');
  });

  // Carefully replace text-white only if it's NOT inside a primary colored button/badge
  // This is a naive regex but handles most cases.
  content = content.replace(/(?<!bg-(?:blue|green|purple|red|yellow|\[\#[0-9a-fA-F]+\])[^>]*?)text-white(?!([^<]*?bg-(?:blue|green|purple|red|yellow|\[\#[0-9a-fA-F]+\])))/g, 'text-foreground');

  // 3. Highlight Colors (Make dark mode colors vivid in light mode too)
  content = content.replace(/text-green-400/g, 'text-green-600 dark:text-green-400');
  content = content.replace(/text-blue-400/g, 'text-blue-600 dark:text-blue-400');
  content = content.replace(/text-purple-400/g, 'text-purple-600 dark:text-purple-400');
  content = content.replace(/text-yellow-400/g, 'text-yellow-600 dark:text-yellow-400');
  content = content.replace(/text-red-400/g, 'text-red-600 dark:text-red-400');
  
  content = content.replace(/bg-green-500\/10/g, 'bg-green-100 dark:bg-green-500/10');
  content = content.replace(/bg-blue-500\/10/g, 'bg-blue-100 dark:bg-blue-500/10');
  content = content.replace(/bg-purple-500\/10/g, 'bg-purple-100 dark:bg-purple-500/10');
  content = content.replace(/bg-yellow-500\/10/g, 'bg-yellow-100 dark:bg-yellow-500/10');
  content = content.replace(/bg-red-500\/10/g, 'bg-red-100 dark:bg-red-500/10');

  // 4. Typography Sizes
  content = content.replace(/text-\[10px\]/g, 'text-xs');
  content = content.replace(/text-\[11px\]/g, 'text-sm');
  content = content.replace(/text-\[12px\]/g, 'text-sm');
  content = content.replace(/text-\[13px\]/g, 'text-base');
  content = content.replace(/text-\[14px\]/g, 'text-lg');

  // 5. Typography Weight (Make metrics and inner card titles bold)
  content = content.replace(/font-medium/g, 'font-bold');
  
  // Undo font-bold back to font-medium for buttons where we want them normalish
  content = content.replace(/<button([^>]*?)font-bold/g, '<button$1font-medium');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Processed: ${filePath}`);
}

pages.forEach(page => {
  const filePath = path.join(labDir, page, 'page.tsx');
  processFile(filePath);
});

console.log('Lab panel refactoring complete.');
