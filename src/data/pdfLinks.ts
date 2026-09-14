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
    arabic: 'https://drive.google.com/open?id=10z6y3rO_sM4_40oTwlA3mj44YfnZhqba',
  },

  // -------------------------------------------------------------------------
  // 2. PROJECT PROPOSALS & BOOKS (مقترحات المشاريع والكتب الميدانية)
  // -------------------------------------------------------------------------
  proposals: {
    // HEALTH SECTOR (القطاع الصحي)
    'health-1': '', // Free Eye Camp Proposal - English
    'health-2': '', // مشروع مخيمات العيون الجراحية المجانية - Arabic
    'health-3': '', // Free Eye Camp Book - English
    'health-4': '', // توثيق شامل لمخيمات طب العيون في سيلان - Arabic
    'health-5': '', // Ambulance Project Proposal - English

    // EDUCATION SECTOR (قطاع التعليم)
    'edu-1': '', // مشروع الحقيبة المدرسية والقرطاسية - Arabic
    'edu-2': '', // School Stationery Proposal - English
    'edu-3': '', // برنامج الأسرة السعيدة والتوجيه الأسري - Arabic
    'edu-4': '', // Happy Family Proposal - English
    'edu-5': '', // Thoppur Education Project Proposal - English

    // SOCIAL WELFARE SECTOR (قطاع الرعاية الاجتماعية)
    'welfare-1': '', // Aytham - Orphans Care & Sponsorship Proposal - English
    'welfare-2': '', // Sewing Machine Self-Sufficiency Proposal - English

    // WATER & COMMUNITY DEVELOPMENT SECTOR (قطاع المياه والمساجد)
    'dev-1': '', // مشروع توفير مياه الشرب النقية والآبار - Arabic
    'dev-2': '', // Clean Drinking Water Project - English
    'dev-3': '', // Masjid Construction & Maintenance Project - English
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
