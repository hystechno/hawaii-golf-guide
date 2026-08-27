'use client';

import { buildAmazonLink, getCategoryIcon } from '@/config/affiliates';

interface AmazonProductCardProps {
  asin: string;
  title: string;
  price: string;
  category: string;
  tagline?: string;
}

export function AmazonProductCard({
  asin,
  title,
  price,
  category,
  tagline,
}: AmazonProductCardProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'affiliate_click', {
        affiliate_network: 'amazon',
        product_category: category,
        product_asin: asin,
        page_location: window.location.pathname,
        section: 'gear_for_course',
      });
    }
  };

  const icon = getCategoryIcon(category);

  return (
    <a
      href={buildAmazonLink(asin)}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className="group flex flex-col bg-white rounded-lg border border-gray-200 p-3 hover:shadow-md transition-shadow"
    >
      <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-md bg-emerald-50 flex items-center justify-center">
        <span className="text-5xl group-hover:scale-110 transition-transform duration-200" role="img" aria-label={category}>
          {icon}
        </span>
      </div>
      <div className="flex-1 flex flex-col">
        <span className="text-xs text-emerald-600 font-medium uppercase tracking-wide mb-1">
          {category}
        </span>
        <h4 className="text-sm font-semibold text-gray-800 leading-tight mb-1 line-clamp-2">
          {title}
        </h4>
        {tagline && (
          <p className="text-xs text-gray-500 mb-2">{tagline}</p>
        )}
        <div className="mt-auto flex items-center justify-between gap-2">
          <span className="text-sm font-bold text-gray-900">{price}</span>
          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium whitespace-nowrap">
            View on Amazon
          </span>
        </div>
      </div>
    </a>
  );
}
