export const AMAZON_ASSOCIATES_ID = 'hawaiigolfg02-20';
export const AMAZON_BASE_URL = 'https://www.amazon.com';

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
