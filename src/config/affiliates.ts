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

// ---------------------------------------------------------------------------
// golfscape (tee time bookings) - INTERIM provider while GolfNow is pending.
// Verified 2026-09-04 via affiliate.golfscape.com:
// 5-6% commission on played tee times, 30-day cookie, $10 signup bonus,
// $15 first-sale bonus, PayPal payout at $50.
// Tracking is domain-based: once hawaiigolf.guide is registered in their
// affiliate portal, ALL direct links to golfscape.com get credited - no
// special link parameters needed. Deep links to island pages convert best.
// Signup: https://affiliate.golfscape.com/
// ---------------------------------------------------------------------------
export const GOLFSCAPE_ENABLED = true;
export const GOLFSCAPE_BASE_URL = 'https://golfscape.com';

const GOLFSCAPE_ISLAND_SLUGS: Record<string, string> = {
  'Oahu': 'oahu-golf-courses',
  'Maui': 'maui-golf-courses',
  'Kauai': 'kauai-golf-courses',
  'Big Island': 'big-island-golf-courses',
  // Molokai / Lanai have no golfscape pages - fall back to the Hawaii index
};

export function buildGolfscapeLink(island?: string): string {
  const slug = island ? GOLFSCAPE_ISLAND_SLUGS[island] : undefined;
  return `${GOLFSCAPE_BASE_URL}/${slug || 'hawaii-golf-courses'}`;
}

// Which tee-time partner the CTA slots point at. Switch to 'golfnow' once
// the CJ Affiliate application is approved and GOLFNOW_ENABLED is true.
export const TEE_TIME_PROVIDER: 'golfscape' | 'golfnow' = 'golfscape';

// ---------------------------------------------------------------------------
// Ship Sticks (golf club shipping - ship clubs ahead to the hotel/course)
// Program details (verified 2026-09-04 via shipsticks.com/affiliate):
// CPS percentage commission, 30-day cookie, monthly PayPal payouts,
// no minimum payout, free to join via their online form.
// Perfect fit for packing/travel posts and course pages (fly light to Hawaii).
// TODO: replace placeholder with real tracking link once approved.
// ---------------------------------------------------------------------------
export const SHIP_STICKS_ENABLED = false; // flip to true when real ID is in place
export const SHIP_STICKS_AFFILIATE_ID = 'SHIPSTICKS-AFFILIATE-ID-PLACEHOLDER';
export const SHIP_STICKS_BASE_URL = 'https://www.shipsticks.com';

export function buildShipSticksLink(path = '/'): string {
  return `${SHIP_STICKS_BASE_URL}${path}?aff=${SHIP_STICKS_AFFILIATE_ID}`;
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
