const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'app', 'nurse', 'messages', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

// Chat Background
content = content.replace(/bg-\[\#0f121e\]/g, 'bg-main');

// Received Message Bubble
content = content.replace(/bg-\[\#1e243b\]/g, 'bg-slate-100 dark:bg-[#1e243b]');

// Sent Message Bubble & Purple Buttons Text Color Fix
content = content.replace(/bg-\[\#5b21b6\]([^>]*?)text-foreground/g, 'bg-[#5b21b6]$1text-white');
content = content.replace(/text-foreground([^>]*?)bg-\[\#5b21b6\]/g, 'text-white$1bg-[#5b21b6]');
content = content.replace(/bg-purple-600([^>]*?)text-foreground/g, 'bg-purple-600$1text-white');

// Date Badge
content = content.replace(/bg-black\/40/g, 'bg-slate-200 dark:bg-black/40');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed nurse messages background and text colors');
