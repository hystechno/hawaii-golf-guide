'use client';

import { useEffect } from 'react';

interface AdMediumRectangleProps {
  slotId: string;
}

export function AdMediumRectangle({ slotId }: AdMediumRectangleProps) {
  useEffect(() => {
    // PropellerAds MultiTag will auto-detect this container
  }, []);

  return (
    <div 
      id={`propeller-rectangle-${slotId}`}
      className="w-[300px] min-h-[250px] bg-gray-50 flex items-center justify-center mx-auto"
    >
      {/* MultiTag will inject ad here */}
      <span className="text-gray-400 text-sm">Advertisement</span>
    </div>
  );
}
