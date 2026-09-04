import { AffiliateDisclosure } from './AffiliateDisclosure';
import {
  buildGolfNowLink,
  buildGolfscapeLink,
  GOLFNOW_ENABLED,
  TEE_TIME_PROVIDER,
} from '@/config/affiliates';

interface TeeTimeCTAProps {
  courseName: string;
  city?: string;
  island?: string;
  variant?: 'full' | 'compact';
}

/**
 * Tee-time affiliate call-to-action. Provider is selected centrally via
 * TEE_TIME_PROVIDER in src/config/affiliates.ts:
 *   - 'golfscape' (interim): direct deep links to golfscape island pages;
 *     commissions are credited once the domain is registered in their portal.
 *   - 'golfnow': GolfNow search links; pending CJ Affiliate approval.
 */
export function TeeTimeCTA({ courseName, city, island, variant = 'full' }: TeeTimeCTAProps) {
  const useGolfNow = TEE_TIME_PROVIDER === 'golfnow';
  const href = useGolfNow
    ? buildGolfNowLink(courseName, city)
    : buildGolfscapeLink(island);

  const brand = useGolfNow ? 'GolfNow' : 'golfscape';
  const ctaLabel = useGolfNow
    ? 'Check Tee Time Deals on GolfNow'
    : 'Compare Tee Times on golfscape';
  const compactLabel = useGolfNow
    ? 'Compare deals on GolfNow'
    : 'Compare tee times on golfscape';

  if (variant === 'compact') {
    return (
      <div className="mt-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block w-full text-center border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 py-2 rounded-lg font-medium text-sm transition-colors"
        >
          {compactLabel}
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
        {useGolfNow ? (
          <>
            GolfNow lists discounted &ldquo;Hot Deal&rdquo; tee times at many
            Hawaii courses &mdash; often 30&ndash;50% off standard rates.
          </>
        ) : (
          <>
            golfscape lets you compare and book tee times at Hawaii courses
            online &mdash; instant confirmation, no phone calls.
          </>
        )}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors"
      >
        {ctaLabel}
      </a>
      {useGolfNow && !GOLFNOW_ENABLED && (
        <p className="text-xs text-amber-600 mt-2">
          Affiliate link pending program approval.
        </p>
      )}
    </section>
  );
}
