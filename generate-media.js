const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const mediaMap = {};

const projects = [
  'domino', 'idesign', 'bs', 'watchmaker', 'pictogram', 'fence mockup',
  'air astana', 'campaign', 'arial', 'glorious model o', 'nomad',
  'passport', 'book', 'water cycle', 'plane animation'
];

for (const slug of projects) {
  const projectDir = path.join(publicDir, slug);
  let mediaFiles = [];
  
  if (fs.existsSync(projectDir) && fs.statSync(projectDir).isDirectory()) {
    const files = fs.readdirSync(projectDir);
    mediaFiles = files
      .filter((file) => /\.(jpg|jpeg|png|webp|gif|mp4)$/i.test(file))
      .filter((file) => {
        const lowerFile = file.toLowerCase();
        return !lowerFile.startsWith('logo.') && 
               !lowerFile.startsWith('preview.') && 
               !lowerFile.startsWith('loading screen.') && 
               !lowerFile.startsWith('screen.');
      })
      .sort((a, b) => {
        const numA = parseInt(a.replace(/\D/g, ''), 10) || 0;
        const numB = parseInt(b.replace(/\D/g, ''), 10) || 0;
        return numA - numB;
      })
      .map((file) => `/${slug}/${file}`);
  }
  
  mediaMap[slug] = mediaFiles;
}

fs.writeFileSync(path.join(__dirname, 'src/data/media.json'), JSON.stringify(mediaMap, null, 2));
console.log('Successfully generated media.json');
