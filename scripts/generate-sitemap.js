const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://hawaiigolf.guide';
const COURSES_PATH = path.join(__dirname, '..', 'src', 'data', 'courses.json');
const SITEMAP_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');

const data = JSON.parse(fs.readFileSync(COURSES_PATH, 'utf-8'));
const courses = data.courses || data;

const staticPaths = [
  { path: '/', priority: '1.0' },
  { path: '/courses/', priority: '0.9' },
  { path: '/blog/', priority: '0.8' },
  { path: '/trip-planner/', priority: '0.8' },
  { path: '/about/', priority: '0.7' },
  { path: '/contact/', priority: '0.7' },
  { path: '/privacy/', priority: '0.5' },
  { path: '/terms/', priority: '0.5' },
  { path: '/island/oahu/', priority: '0.9' },
  { path: '/island/maui/', priority: '0.9' },
  { path: '/island/big-island/', priority: '0.9' },
  { path: '/island/kauai/', priority: '0.9' },
  { path: '/island/lanai/', priority: '0.9' },
  { path: '/island/molokai/', priority: '0.9' },
];

const today = new Date().toISOString().split('T')[0];

const urls = [
  ...staticPaths.map(({ path: p, priority }) => `
  <url>
    <loc>${BASE_URL}${p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`),
  ...courses.map(course => `
  <url>
    <loc>${BASE_URL}/courses/${course.id}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('')}
</urlset>
`;

fs.writeFileSync(SITEMAP_PATH, sitemap.trim() + '\n');
console.log(`Generated sitemap with ${urls.length} URLs at ${SITEMAP_PATH}`);
