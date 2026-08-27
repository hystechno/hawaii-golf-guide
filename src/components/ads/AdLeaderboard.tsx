'use client';

import { useEffect } from 'react';

interface AdLeaderboardProps {
  slotId: string;
}

export function AdLeaderboard({ slotId }: AdLeaderboardProps) {
  useEffect(() => {
    // PropellerAds MultiTag will auto-detect this container
    // No additional initialization needed
  }, []);

  return (
    <div 
      id={`propeller-leaderboard-${slotId}`}
      className="w-full max-w-[728px] mx-auto min-h-[90px] bg-gray-50 flex items-center justify-center"
    >
      {/* MultiTag will inject ad here */}
      <span className="text-gray-400 text-sm">Advertisement</span>
    </div>
  );
}
