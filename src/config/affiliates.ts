export const AMAZON_ASSOCIATES_ID = 'hawaiigolfg02-20';
export const AMAZON_BASE_URL = 'https://www.amazon.com';

// ---------------------------------------------------------------------------
// GolfNow (tee time bookings)
// TODO: replace placeholder with real affiliate tracking link once approved.
// Program details (verified 2026-08-27): ~1-4% per booking / ~$3 per round,
// CPC+CPS hybrid, $25 min payout, monthly. Historically via CJ Affiliate.
// When approved, paste the network-generated deep link template below.
// ---------------------------------------------------------------------------
export const GOLFNOW_ENABLED = false; // flip to true when real IDs are in place
export const GOLFNOW_AFFILIATE_ID = 'GOLFNOW-AFFILIATE-ID-PLACEHOLDER';
export const GOLFNOW_BASE_URL = 'https://www.golfnow.com/tee-times/search';

export function buildGolfNowLink(courseName?: string, city?: string): string {
  const query = [courseName, city, 'Hawaii'].filter(Boolean).join(' ');
  return `${GOLFNOW_BASE_URL}?query=${encodeURIComponent(query)}&aff=${GOLFNOW_AFFILIATE_ID}`;
}

// ---------------------------------------------------------------------------
// 2nd Swing Golf (new & pre-owned clubs, gear)
// TODO: replace placeholder with real affiliate tracking link once approved.
// Program details (verified 2026-08-27 via 2ndswing.com/affiliate-program):
// 15% commission on select new-release products (14-day window),
// 5% on all other products (30-day window), auto-deposit payouts.
// Program runs on a network (Awin merchant 95935; historically ShareASale) -
// confirm which network at signup and use its deep-link format below.
// ---------------------------------------------------------------------------
export const SECOND_SWING_ENABLED = false; // flip to true when real IDs are in place
export const SECOND_SWING_AFFILIATE_ID = '2NDSWING-AFFILIATE-ID-PLACEHOLDER';
export const SECOND_SWING_BASE_URL = 'https://www.2ndswing.com';

export function buildSecondSwingLink(path = '/'): string {
  return `${SECOND_SWING_BASE_URL}${path}?clickid=${SECOND_SWING_AFFILIATE_ID}`;
}

export function buildAmazonLink(asin: string): string {
  return `${AMAZON_BASE_URL}/dp/${asin}?tag=${AMAZON_ASSOCIATES_ID}&linkCode=ogi&th=1&psc=1`;
}

// Category icons for product cards (Amazon images are unreliable)
export const categoryIcons: Record<string, string> = {
  'Golf Balls': '⛳',
  'Glove': '🧤',
  'Sun Protection': '☀️',
  'Accessories': '🎯',
  'Electronics': '📟',
  'Footwear': '👟',
  'Bags': '🎒',
};

export function getCategoryIcon(category: string): string {
  return categoryIcons[category] || '🛒';
}

// Default Hawaii golf gear products
export interface AffiliateProduct {
  asin: string;
  title: string;
  price: string;
  category: string;
  tagline?: string;
}

export const defaultHawaiiGear: AffiliateProduct[] = [
  {
    asin: 'B0DPN7QZ9R',
    title: 'Titleist Pro V1 Golf Balls (Dozen)',
    price: '$49.99',
    category: 'Golf Balls',
    tagline: 'Best for windy conditions',
  },
  {
    asin: 'B09KNWW38P',
    title: 'Callaway Chrome Soft Golf Balls',
    price: '$47.99',
    category: 'Golf Balls',
    tagline: 'Soft feel, distance',
  },
  {
    asin: 'B0CCK9CRGX',
    title: 'FootJoy WeatherSof Golf Glove',
    price: '$12.99',
    category: 'Glove',
    tagline: 'Humidity durable',
  },
  {
    asin: 'B001P92FMG',
    title: 'Neutrogena Sport Face SPF 70',
    price: '$10.99',
    category: 'Sun Protection',
    tagline: 'Sweat-resistant',
  },
  {
    asin: 'B003YF7W22',
    title: 'Frogg Toggs Chilly Pad Cooling Towel',
    price: '$14.99',
    category: 'Accessories',
    tagline: 'Heat relief',
  },
  {
    asin: 'B088X3MJHF',
    title: 'Bushnell Tour V5 Rangefinder',
    price: '$299.99',
    category: 'Electronics',
    tagline: 'Slope feature for hills',
  },
  {
    asin: 'B0DQ67XSG4',
    title: 'Adidas Codechaos Golf Shoes',
    price: '$119.99',
    category: 'Footwear',
    tagline: 'Waterproof, grip',
  },
  {
    asin: 'B0160HYB8S',
    title: 'Repel Windproof Travel Umbrella',
    price: '$22.95',
    category: 'Accessories',
    tagline: 'Sudden rain showers',
  },
  {
    asin: 'B0BQP54HXQ',
    title: 'Titleist Players 4 Stand Bag',
    price: '$199.99',
    category: 'Bags',
    tagline: 'Lightweight for walking',
  },
  {
    asin: 'B083BJSYZ9',
    title: 'Garmin Approach S62 GPS Watch',
    price: '$499.99',
    category: 'Electronics',
    tagline: 'Preloaded Hawaii courses',
  },
];
