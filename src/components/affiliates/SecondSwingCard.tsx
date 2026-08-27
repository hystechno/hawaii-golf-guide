import { AffiliateDisclosure } from './AffiliateDisclosure';
import { buildSecondSwingLink, SECOND_SWING_ENABLED } from '@/config/affiliates';

interface SecondSwingCardProps {
  variant?: 'full' | 'compact';
}

/**
 * 2nd Swing Golf affiliate card.
 * Promotes new & pre-owned clubs, trade-ins, and fittings.
 * Currently uses a placeholder affiliate ID - set SECOND_SWING_ENABLED = true
 * in src/config/affiliates.ts once the real tracking link is available.
 */
export function SecondSwingCard({ variant = 'full' }: SecondSwingCardProps) {
  const href = buildSecondSwingLink('/');

  if (variant === 'compact') {
    return (
      <div className="mt-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block w-full text-center border-2 border-amber-500 text-amber-700 hover:bg-amber-50 py-2 rounded-lg font-medium text-sm transition-colors"
        >
          Shop clubs at 2nd Swing
        </a>
      </div>
    );
  }

  return (
    <section className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-amber-100">
      <AffiliateDisclosure inline />
      <h3 className="text-lg font-bold text-gray-800 mb-1">
        Traveling Light? Don&rsquo;t Ship Your Clubs
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        2nd Swing offers over 80,000 new and pre-owned clubs &mdash; often 40&ndash;70%
        below retail &mdash; plus trade-in credit for your old set.
      </p>
      <ul className="text-sm text-gray-600 mb-4 space-y-1">
        <li>&#9971; Certified pre-owned drivers, irons &amp; putters</li>
        <li>&#9971; Award-winning custom fitting (Golf Digest Top 100)</li>
        <li>&#9971; Trade in your old clubs for credit</li>
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors"
      >
        Shop New &amp; Pre-Owned Clubs
      </a>
      {!SECOND_SWING_ENABLED && (
        <p className="text-xs text-amber-600 mt-2">
          Affiliate link pending program approval.
        </p>
      )}
    </section>
  );
}
