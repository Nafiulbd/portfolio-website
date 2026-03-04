import fs from 'fs';

const newTs = fs.readFileSync('lib/techStack.js', 'utf8');
const filePath = 'src/components/TechStack.tsx';
const content = fs.readFileSync(filePath, 'utf8');

// Find start and end of const techStack
const startIndex = content.indexOf('const techStack = [');
const endIndex = content.indexOf('];', startIndex) + 2; // includes ];

if(startIndex > -1 && endIndex > -1) {
    const finalContent = content.substring(0, startIndex) + newTs + content.substring(endIndex);
    fs.writeFileSync(filePath, finalContent, 'utf8');
    console.log('Patched TechStack.tsx');
} else {
    console.log('Could not find techStack array');
}
