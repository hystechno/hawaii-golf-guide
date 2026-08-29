const fs = require('fs');
const path = require('path');

const COURSES_PATH = path.join(__dirname, '..', 'src', 'data', 'courses.json');
const PUBLIC_COURSES_PATH = path.join(__dirname, '..', 'public', 'data', 'courses.json');
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images', 'courses');

const data = JSON.parse(fs.readFileSync(COURSES_PATH, 'utf-8'));
const courses = data.courses || data;
const courseMap = new Map(courses.map(c => [c.id, c]));

// Map root-level image filenames (without extension) to course IDs.
// Keys are lowercased base filenames. Values are target course IDs.
const ROOT_FILE_TO_COURSE = {
  // Oahu
  'ala-wai-gc': 'oahu-001',
  'bay-view-golf-park': 'oahu-002',
  'coral-creek-banner': 'oahu-003',
  'coral-creek-featured': 'oahu-003',
  'coral-creek-thumb': 'oahu-003',
  'coral-creek-waterfall-focus-thumb': 'oahu-003',
  '360-ewa-beach': 'oahu-004',
  'ewa-beach-thumb': 'oahu-004',
  'ewa-villages-gc': 'oahu-005',
  'hawaii-country-club': 'oahu-006',
  'hawaii-kai': 'oahu-007',
  'hawaii-prince': 'oahu-008',
  'hawaii-prince-thumb': 'oahu-008',
  'hoakalei-cc': 'oahu-010',
  'honolulu-country-club': 'oahu-011',
  'kahuku-gc': 'oahu-012',
  'kapolei': 'oahu-014',
  'kapolei-thumb': 'oahu-014',
  'ko-olina-gc': 'oahu-015',
  'ko-olau-gc': 'oahu-016',
  'makaha-valley-cc': 'oahu-017',
  'mid-pacific-cc': 'oahu-018',
  'mililani-gc': 'oahu-019',
  'moanalua-gc': 'oahu-020',
  'barbers-point-gc': 'oahu-021-a',
  'navy-marine-gc': 'oahu-021-b',
  'oahu-cc': 'oahu-022',
  'olomana-golf-links': 'oahu-023',
  'pali-gc': 'oahu-024',
  'pearl-at-kalauao': 'oahu-025',
  'royal-hawaiian': 'oahu-026',
  'royal-hawaiian-thumb': 'oahu-026',
  'royal-kunia-gc': 'oahu-027',
  'ted-makalena': 'oahu-028',
  'ted-makalena-fees': 'oahu-028',
  'angels-course-at-turtle-bay': 'oahu-029-a',
  'fazio-course-at-turtle-bay': 'oahu-029-b',
  'leilehua-gc': 'oahu-030-a',
  'walter-j-nagorski-gc': 'oahu-030-b',
  'waialae-cc': 'oahu-031',
  'waikele-gc': 'oahu-032',
  'west-loch-gc': 'oahu-033',

  // Maui
  'the-dunes-at-maui-lani': 'maui-001',
  'maui-002-royal-hero': 'maui-002-a',
  'kahili-gc': 'maui-003',
  'the-bay-course-at-kapalua': 'maui-004-a',
  'the-plantation-course-at-kapalua': 'maui-004-b',
  'king-kamehameha-gc': 'maui-005',
  'makena-gc': 'maui-006',
  'maui-cc': 'maui-007',
  'maui-nui-gc': 'maui-008',
  'pukalani-cc': 'maui-009',
  'waiehu-gc': 'maui-010',
  'gold-course-at-wailea': 'maui-011-a',
  'emerald-course-at-wailea': 'maui-011-b',
  'old-blue-course-at-wailea': 'maui-011-c',

  // Big Island
  'makani-golf-club': 'bi-001',
  'makani-golf-club-thumb': 'bi-001',
  'big-island-country-club': 'bi-001',
  'hokulia-club-hero': 'bi-002',
  'hokulia-club-thumb': 'bi-002',
  'hamakua-country-club': 'bi-003',
  'hamakua-country-club-thumb': 'bi-003',
  'hapuna-golf-course-hero': 'bi-004',
  'hapuna-golf-course-thumb': 'bi-004',
  'hilo-municipal-golf-course': 'bi-005',
  'hilo-municipal-golf-course-thumb': 'bi-005',
  'hualalai': 'bi-006',
  'hualalai-thumb': 'bi-006',
  'kohanaiki-golf-club-hero': 'bi-007',
  'kohanaiki-golf-club-thumb': 'bi-007',
  'kona-country-club': 'bi-008',
  'kona-country-club-thumb': 'bi-008',
  'kukio-golf-club-hero': 'bi-009',
  'kukio-golf-club-thumb': 'bi-009',
  'makalei-golf-club': 'bi-010',
  'makalei-golf-club-thumb': 'bi-010',
  'mauna-kea': 'bi-011',
  'mauna-kea-thumb': 'bi-011',
  'mauna-lani-north': 'bi-012',
  'mauna-lani-north-thumb': 'bi-012',
  'mauna-lani-south': 'bi-012',
  'mauna-lani-south-thumb': 'bi-012',
  'nanea-golf-club-hero': 'bi-013',
  'nanea-golf-club-thumb': 'bi-013',
  'naniloa-volcanoes-gc': 'bi-014',
  'sea-mountain-golf-course': 'bi-015',
  'sea-mountain-golf-course-thumb': 'bi-015',
  'volcano-golf': 'bi-016',
  'volcano-golf-thumb': 'bi-016',
  'waikoloa': 'bi-017-a',
  'waikoloa-thumb': 'bi-017-a',
  'the-village-course-at-waikoloa': 'bi-018',

  // Kauai
  'kauai-lagoons-gc': 'kauai-001',
  'kiahuna-gc': 'kauai-002',
  'ocean-course-at-hokuala': 'kauai-003',
  'poipu-bay-gc': 'kauai-004',
  'princeville-makai-gc': 'kauai-005',
  'puakea-gc': 'kauai-006',
  'wailua-gc': 'kauai-007',
  'prince-course-at-princeville': 'kauai-008',

  // Lanai
  'manele-bay': 'lanai-001',
  'manele-bay-thumb': 'lanai-001',
  'challenge-at-manele': 'lanai-002',
  'cavendish': 'lanai-003',

  // Molokai
  'ironwood-hills': 'molokai-001',
  'ironwood-hills-thumb': 'molokai-001',
};

let folderLinked = 0;
let rootLinked = 0;
let skipped = [];

for (const course of courses) {
  const folderPath = path.join(IMAGES_DIR, course.id);
  const heroPath = path.join(folderPath, 'hero.jpg');
  const thumbPath = path.join(folderPath, 'thumb.jpg');
  const heroWebpPath = path.join(folderPath, 'hero.webp');
  const thumbWebpPath = path.join(folderPath, 'thumb.webp');
  const heroAvifPath = path.join(folderPath, 'hero.avif');
  const thumbAvifPath = path.join(folderPath, 'thumb.avif');

  const hasFolderHero = fs.existsSync(heroPath) || fs.existsSync(heroWebpPath) || fs.existsSync(heroAvifPath);
  const hasFolderThumb = fs.existsSync(thumbPath) || fs.existsSync(thumbWebpPath) || fs.existsSync(thumbAvifPath);

  if (hasFolderHero || hasFolderThumb) {
    if (hasFolderHero) {
      if (fs.existsSync(heroPath)) course.image_hero = `/images/courses/${course.id}/hero.jpg`;
      else if (fs.existsSync(heroWebpPath)) course.image_hero = `/images/courses/${course.id}/hero.webp`;
      else if (fs.existsSync(heroAvifPath)) course.image_hero = `/images/courses/${course.id}/hero.avif`;
    }
    if (hasFolderThumb) {
      if (fs.existsSync(thumbPath)) course.image_thumb = `/images/courses/${course.id}/thumb.jpg`;
      else if (fs.existsSync(thumbWebpPath)) course.image_thumb = `/images/courses/${course.id}/thumb.webp`;
      else if (fs.existsSync(thumbAvifPath)) course.image_thumb = `/images/courses/${course.id}/thumb.avif`;
    }
    folderLinked++;
  }
}

const rootFiles = fs.readdirSync(IMAGES_DIR).filter(f => {
  const full = path.join(IMAGES_DIR, f);
  return fs.statSync(full).isFile() && /\.(jpg|jpeg|png|webp|avif)$/i.test(f);
});

for (const file of rootFiles) {
  const base = path.basename(file, path.extname(file)).toLowerCase();
  const ext = path.extname(file).toLowerCase();
  const courseId = ROOT_FILE_TO_COURSE[base];

  if (!courseId) {
    skipped.push(file);
    continue;
  }

  const course = courseMap.get(courseId);
  if (!course) {
    skipped.push(file);
    continue;
  }

  const url = `/images/courses/${file}`;
  const isThumb = base.endsWith('-thumb') || base.endsWith('-featured');
  const isHero = base.endsWith('-hero') || base.endsWith('-banner');

  if (isThumb) {
    course.image_thumb = url;
  } else if (isHero) {
    course.image_hero = url;
  } else {
    // Generic image: use as hero if no hero exists, otherwise as thumb if no thumb exists
    if (!course.image_hero) course.image_hero = url;
    else if (!course.image_thumb) course.image_thumb = url;
  }
  rootLinked++;
}

fs.writeFileSync(COURSES_PATH, JSON.stringify(data, null, 2));
fs.writeFileSync(PUBLIC_COURSES_PATH, JSON.stringify(data, null, 2));

const withImages = courses.filter(c => c.image_hero || c.image_thumb).length;
console.log(`Linked folder images for ${folderLinked} courses.`);
console.log(`Linked root-level images for ${rootLinked} files.`);
console.log(`Courses with at least one image: ${withImages} of ${courses.length}`);
if (skipped.length) {
  console.log(`Unmatched root files (${skipped.length}):`);
  skipped.forEach(f => console.log('  -', f));
}
console.log('Updated src/data/courses.json and public/data/courses.json.');
