// Display Ad Components for Hawaii Golf Guide
// These components provide placeholders for ad network integration

export { AdLeaderboard } from './AdLeaderboard'
export { AdMediumRectangle } from './AdMediumRectangle'
export { AdInFeed } from './AdInFeed'
export { AdMobileBanner } from './AdMobileBanner'
export { EzoicAd, EzoicAds } from './EzoicAd'

// Ezoic Placement IDs (update these once you get them from your dashboard)
export const EZOIC_PLACEMENTS = {
  // Homepage
  HOME_TOP: 101,
  HOME_MID: 102,
  HOME_BOTTOM: 103,
  
  // Course pages
  COURSE_TOP: 201,
  COURSE_MID_1: 202,
  COURSE_MID_2: 203,
  COURSE_BOTTOM: 204,
  
  // Island pages
  ISLAND_TOP: 301,
  ISLAND_FEED_1: 302,
  ISLAND_FEED_2: 303,
}
