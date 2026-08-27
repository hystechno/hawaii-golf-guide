import { ReactNode } from 'react';
import { buildAmazonLink } from '@/config/affiliates';

interface AmazonLinkProps {
  asin: string;
  children: ReactNode;
  className?: string;
  category?: string;
  section?: string;
}

export function AmazonLink({
  asin,
  children,
  className = '',
  category = 'general',
  section = 'inline',
}: AmazonLinkProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'affiliate_click', {
        affiliate_network: 'amazon',
        product_category: category,
        product_asin: asin,
        page_location: window.location.pathname,
        section,
      });
    }
  };

  return (
    <a
      href={buildAmazonLink(asin)}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className={`text-emerald-600 hover:text-emerald-700 hover:underline ${className}`}
    >
      {children}
    </a>
  );
}
