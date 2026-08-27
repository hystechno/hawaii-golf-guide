import { AffiliateDisclosure } from './AffiliateDisclosure';
import { buildGolfNowLink, GOLFNOW_ENABLED } from '@/config/affiliates';

interface GolfNowCTAProps {
  courseName: string;
  city?: string;
  variant?: 'full' | 'compact';
}

/**
 * GolfNow affiliate call-to-action.
 * Renders a "compare tee time deals" card that deep-links to a GolfNow
 * search for the course. Currently uses a placeholder affiliate ID -
 * set GOLFNOW_ENABLED = true in src/config/affiliates.ts once the real
 * tracking link is available.
 */
export function GolfNowCTA({ courseName, city, variant = 'full' }: GolfNowCTAProps) {
  const href = buildGolfNowLink(courseName, city);

  if (variant === 'compact') {
    return (
      <div className="mt-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block w-full text-center border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 py-2 rounded-lg font-medium text-sm transition-colors"
        >
          Compare deals on GolfNow
        </a>
      </div>
    );
  }

  return (
    <section className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-emerald-100">
      <AffiliateDisclosure inline />
      <h3 className="text-lg font-bold text-gray-800 mb-1">
        Tee Time Deals near {courseName}
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        GolfNow lists discounted &ldquo;Hot Deal&rdquo; tee times at many Hawaii
        courses &mdash; often 30&ndash;50% off standard rates.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors"
      >
        Check Tee Time Deals on GolfNow
      </a>
      {!GOLFNOW_ENABLED && (
        <p className="text-xs text-amber-600 mt-2">
          Affiliate link pending program approval.
        </p>
      )}
    </section>
  );
}
