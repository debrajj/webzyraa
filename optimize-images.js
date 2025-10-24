const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const imageDir = './public/images';
const extensions = ['.jpg', '.jpeg', '.png'];

function optimizeImages(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      optimizeImages(filePath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        const size = stat.size;
        const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        
        // Skip if WebP already exists and is newer
        if (fs.existsSync(webpPath)) {
          const webpStat = fs.statSync(webpPath);
          if (webpStat.mtime > stat.mtime) {
            return;
          }
        }
        
        console.log(`Optimizing: ${filePath} (${Math.round(size/1024)}KB)`);
        
        try {
          // Use sharp for better performance
          execSync(`npx sharp-cli -i "${filePath}" -o "${webpPath}" -f webp -q 85`);
          
          if (fs.existsSync(webpPath)) {
            const webpSize = fs.statSync(webpPath).size;
            const savings = Math.round((1 - webpSize/size) * 100);
            console.log(`✓ WebP: ${webpPath} (${Math.round(webpSize/1024)}KB, ${savings}% smaller)`);
          }
        } catch (error) {
          // Fallback to imagemin
          try {
            execSync(`npx imagemin "${filePath}" --out-dir="${path.dirname(filePath)}" --plugin=webp`);
            console.log(`✓ Fallback WebP: ${webpPath}`);
          } catch (fallbackError) {
            console.log(`Failed to optimize ${filePath}`);
          }
        }
      }
    }
  });
}

console.log('Starting image optimization...');
optimizeImages(imageDir);
console.log('Image optimization complete!');