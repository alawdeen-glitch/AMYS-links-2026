/**
 * =========================================================================
 *  AMYS PDF & GOOGLE DRIVE LINKS CONFIGURATION
 * =========================================================================
 * 
 * You can paste your Google Drive links (or any web links) below!
 * 
 * INSTRUCTIONS FOR GOOGLE DRIVE:
 * 1. In Google Drive, right-click the PDF -> click "Share" -> "Share"
 * 2. Under "General access", set to: "Anyone with the link" (Viewer)
 * 3. Click "Copy link" and paste it between the quotes for each document below.
 * 
 * NOTE: If a link is left as '' (empty), the app automatically uses the
 * local file located in the /public/pdfs/ folder.
 */

export interface DocumentLinksConfig {
  profiles: {
    english: string;
    arabic: string;
  };
  proposals: Record<string, string>;
}

export const PDF_LINKS: DocumentLinksConfig = {
  // -------------------------------------------------------------------------
  // 1. OFFICIAL ORGANIZATIONAL PROFILES (الملف التعريفي الرسمي)
  // -------------------------------------------------------------------------
  profiles: {
    // Paste English Profile Google Drive link here:
    english: 'https://drive.google.com/open?id=1-wRSWQ0FD8onii0pL4zuhhsYwQkU2LoT',

    // Paste Arabic Profile Google Drive link here (الصق رابط الملف التعريفي العربي هنا):
    arabic: 'https://drive.google.com/file/d/1eBaQiEMS4ODJBedxpqUjX_O-mNt_B1NK/view?usp=drive_link',
  },

  // -------------------------------------------------------------------------
  // 2. PROJECT PROPOSALS & BOOKS (مقترحات المشاريع والكتب الميدانية)
  // -------------------------------------------------------------------------
  proposals: {
    // HEALTH SECTOR (القطاع الصحي)
    'health-1': 'https://drive.google.com/open?id=1Jk1ZKruwCEVy9fEBLbGO5cEGo6Sh2f78', // Free Eye Camp Proposal - English
    'health-2': 'https://drive.google.com/open?id=1eP5lRHA-_lPteSUxsYB9ci64X9jVz1jL', // مشروع مخيمات العيون الجراحية المجانية - Arabic
    'health-3': 'https://drive.google.com/open?id=1d_j-gQgjzd65_VeqdeEStoUpSspjcfWV', // Free Eye Camp Book - English
    'health-4': 'https://drive.google.com/open?id=11oDYipRmnhL3e6ms7_l5jKnd-Wy-G02s', // توثيق شامل لمخيمات طب العيون في سيلان - Arabic
    'health-5': 'https://drive.google.com/file/d/1_OXG9GUYAGPrYdfk3AAhHzW4wbZ71zoe/view?usp=sharing', // Ambulance Project Proposal - English

    // EDUCATION SECTOR (قطاع التعليم)
    'edu-1': 'https://drive.google.com/open?id=1ji3WFxtgJXK_BPWr1yE2WzRWE3YOD_cA', // مشروع الحقيبة المدرسية والقرطاسية - Arabic
    'edu-2': 'https://drive.google.com/open?id=1OmLiNWE6jxLUd8KbpqgccGsHW9aJ2lru', // School Stationery Proposal - English
    'edu-3': 'https://drive.google.com/file/d/1SzEl2umD_ln_z1-BN47MKO2ZWRIzdaSR/view?usp=sharing', // برنامج الأسرة السعيدة والتوجيه الأسري - Arabic
    'edu-4': 'https://drive.google.com/open?id=1D9xReblPpfNxZMNO0wnmEF6_h8kLj3dd', // Happy Family Proposal - English
    'edu-5': 'https://drive.google.com/file/d/1xAbPagTpd0wJX72Vj7s6aTynSWTN8Efc/view?usp=drive_link', // Thoppur Education Project Proposal - English

    // SOCIAL WELFARE SECTOR (قطاع الرعاية الاجتماعية)
    'welfare-1': 'https://drive.google.com/open?id=1kyASc7O192HtaVv569MSAvvRGmo3a7PA', // Aytham - Orphans Care & Sponsorship Proposal - English
    'welfare-2': 'https://drive.google.com/open?id=1KPjSXjnMsAmjHmI48sGE4TBuciJy8mYI', // Sewing Machine Self-Sufficiency Proposal - English

    // WATER & COMMUNITY DEVELOPMENT SECTOR (قطاع المياه والمساجد)
    'dev-1': 'https://drive.google.com/file/d/1G-nywyzR1prQve934yha5MxyLY5L8kYl/view?usp=drive_link, // مشروع توفير مياه الشرب النقية والآبار - Arabic
    'dev-2': 'https://drive.google.com/file/d/1iG289dtsC7fzcNbczyYGY8cUCEnV1HpV/view?usp=drive_link', // Clean Drinking Water Project - English
    'dev-3': 'https://drive.google.com/open?id=1DxAFR0rYI5_4x52tNj8TCaz-tk8hpVw5', // Masjid Construction & Maintenance Project - English
  },
};

/**
 * Extracts the Google Drive File ID if a Google Drive link is provided.
 */
export function getGoogleDriveFileId(url: string): string | null {
  if (!url) return null;
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

/**
 * Returns an embeddable preview URL (for iframes/in-app modals).
 * Handles Google Drive preview transformation automatically.
 */
export function getDocumentPreviewUrl(urlOrFilename: string): string {
  if (!urlOrFilename) return '';

  // Check if it's a Google Drive link
  const driveId = getGoogleDriveFileId(urlOrFilename);
  if (driveId) {
    return `https://drive.google.com/file/d/${driveId}/preview`;
  }

  // If it's a full web URL
  if (urlOrFilename.startsWith('http://') || urlOrFilename.startsWith('https://')) {
    return urlOrFilename;
  }

  // Fallback to local /pdfs/ folder
  return `/pdfs/${encodeURIComponent(urlOrFilename)}#toolbar=0`;
}

/**
 * Returns a direct download or open URL.
 */
export function getDocumentDownloadUrl(urlOrFilename: string): string {
  if (!urlOrFilename) return '';

  const driveId = getGoogleDriveFileId(urlOrFilename);
  if (driveId) {
    return `https://drive.google.com/uc?export=download&id=${driveId}`;
  }

  if (urlOrFilename.startsWith('http://') || urlOrFilename.startsWith('https://')) {
    return urlOrFilename;
  }

  return `/pdfs/${encodeURIComponent(urlOrFilename)}`;
}
