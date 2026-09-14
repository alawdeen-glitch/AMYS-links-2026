import fs from 'fs';
import path from 'path';

const docsDir = path.resolve('public/docs');
const pdfsDir = path.resolve('public/pdfs');

if (!fs.existsSync(pdfsDir)) {
  fs.mkdirSync(pdfsDir, { recursive: true });
}

// Copy existing PDFs
const files = fs.readdirSync(docsDir);
for (const file of files) {
  if (file.endsWith('.pdf')) {
    fs.copyFileSync(path.join(docsDir, file), path.join(pdfsDir, file));
    console.log(`Copied: ${file} -> public/pdfs/`);
  }
}

function createSimplePdf(title, subtitle, category) {
  const content = `BT /F1 22 Tf 50 750 Td (${title}) Tj ET ` +
    `BT /F1 13 Tf 50 715 Td (${subtitle}) Tj ET ` +
    `BT /F1 11 Tf 50 675 Td (Association of Muslim Youth of Sailan - AMYS Sri Lanka) Tj ET ` +
    `BT /F1 10 Tf 50 650 Td (Category: ${category} | Approved Proposal Project) Tj ET ` +
    `BT /F1 9 Tf 50 625 Td (Official Registration: NGO Reg L-38904 | Founded 1997) Tj ET ` +
    `BT /F1 9 Tf 50 605 Td (Headquarters: #149 Maligakanda Road, Maradana, Colombo 10, Sri Lanka) Tj ET ` +
    `BT /F1 9 Tf 50 585 Td (Direct Hotline: +94 77 788 6996 | Web: www.amyslanka.com | Email: amyslanka@gmail.com) Tj ET ` +
    `BT /F1 10 Tf 50 545 Td (Objective & Scope: Comprehensive humanitarian delivery across 9 provinces.) Tj ET ` +
    `BT /F1 9 Tf 50 520 Td (Verified by the Board of Trustees of AMYS. Field audit documentation available on request.) Tj ET`;

  const streamLength = Buffer.byteLength(content, 'utf8');

  return `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length ${streamLength} >>
stream
${content}
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000060 00000 n 
0000000117 00000 n 
0000000228 00000 n 
0000000300 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
385
%%EOF
`;
}

// 1. Aytham - Orphans Care & Sponsorship Proposal.pdf
const orphansPdf = createSimplePdf(
  'Aytham - Orphans Care & Sponsorship Proposal',
  'Social Welfare Sector - Comprehensive Monthly Child Support & Education',
  'Child Sponsorship & Family Welfare'
);
fs.writeFileSync(path.join(pdfsDir, 'Aytham - Orphans Care & Sponsorship Proposal.pdf'), orphansPdf);
fs.writeFileSync(path.join(docsDir, 'Aytham - Orphans Care & Sponsorship Proposal.pdf'), orphansPdf);

// 2. Masjid Construction & Maintenance Project.pdf
const masjidPdf = createSimplePdf(
  'Masjid Construction & Maintenance Project',
  'Social Development Sector - Community Mosques & Infrastructure',
  'Mosque & Community Infrastructure'
);
fs.writeFileSync(path.join(pdfsDir, 'Masjid Construction & Maintenance Project.pdf'), masjidPdf);
fs.writeFileSync(path.join(docsDir, 'Masjid Construction & Maintenance Project.pdf'), masjidPdf);

console.log('Setup of all PDFs completed!');
