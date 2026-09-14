import fs from 'fs';
import path from 'path';
import https from 'https';

const IMAGES = {
  'hero-cataract.jpg': 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
  'h-1-cataract-surgeries.jpg': 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
  'h-2-eye-patients.jpg': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
  'h-3-eyeglasses.jpg': 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=80',
  'h-4-medical-camps.jpg': 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
  'h-5-circumcisions.jpg': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
  'w-1-masjids.jpg': 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=80',
  'w-2-family-wells.jpg': 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1200&q=80',
  'w-3-deep-wells.jpg': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  'w-4-village-wells.jpg': 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
  'w-5-water-connections.jpg': 'https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?auto=format&fit=crop&w=1200&q=80',
  'w-6-islamic-centers.jpg': 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
  'e-1-school-kits.jpg': 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=80',
  'e-2-lectures.jpg': 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
  'e-3-scholarships.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
  'e-4-libraries.jpg': 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
  'e-5-media-production.jpg': 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
  'e-6-quran-outreach.jpg': 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80',
  'e-7-orphans-care.jpg': 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
  'e-8-qurban-meat.jpg': 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
  'e-9-sewing-machines.jpg': 'https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?auto=format&fit=crop&w=1200&q=80',
  'e-10-ramadan-dates.jpg': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
  'e-11-eid-clothing.jpg': 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80',
  'e-12-zakat-grants.jpg': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
  'e-13-iftar-devotees.jpg': 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80',
};

const outputDir = path.resolve('public/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading images into public/images/ ...');
  for (const [filename, url] of Object.entries(IMAGES)) {
    const targetPath = path.join(outputDir, filename);
    if (!fs.existsSync(targetPath) || fs.statSync(targetPath).size < 1000) {
      process.stdout.write(`Downloading ${filename}... `);
      try {
        await download(url, targetPath);
        console.log('OK');
      } catch (err) {
        console.log('FAILED:', err.message);
      }
    } else {
      console.log(`Already exists: ${filename}`);
    }
  }

  // Also copy existing logos and color-01
  if (fs.existsSync('public/color-01.png')) {
    fs.copyFileSync('public/color-01.png', path.join(outputDir, 'color-01.png'));
    fs.copyFileSync('public/color-01.png', path.join(outputDir, 'logo.png'));
  }
  if (fs.existsSync('public/logo.svg')) {
    fs.copyFileSync('public/logo.svg', path.join(outputDir, 'logo.svg'));
  }

  console.log('All images downloaded successfully!');
}

run();
