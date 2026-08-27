'use client';

import { useEffect } from 'react';

interface AdInFeedProps {
  slotId: string;
}

export function AdInFeed({ slotId }: AdInFeedProps) {
  useEffect(() => {
    // PropellerAds MultiTag will auto-detect this container
  }, []);

  return (
    <div 
      id={`propeller-infeed-${slotId}`}
      className="w-full min-h-[250px] bg-gray-50 flex items-center justify-center my-4"
    >
      {/* MultiTag will inject ad here */}
      <span className="text-gray-400 text-sm">Sponsored</span>
    </div>
  );
}
