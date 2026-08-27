# Display Ad Components for Hawaii Golf Guide

## Overview

These components provide placeholder containers for display advertising. They're designed to work with any ad network (Ezoic, AdThrive, Mediavine, Google AdSense, etc.) through a simple integration pattern.

## Components

### AdLeaderboard
- **Desktop:** 728x90px
- **Billboard option:** 970x250px
- **Mobile:** Hidden (use AdMobileBanner instead)
- **Placement:** Below hero on homepage, below header on course pages

### AdMediumRectangle
- **Size:** 300x250px or 336x280px
- **Placement:** After "About This Course" on course pages, sidebar
- **Props:** `sticky` - makes the ad stick on scroll

### AdInFeed
- **Format:** Native ad style
- **Placement:** Between course listings on island pages
- **Props:** `count` - number of ad items to display

### AdMobileBanner
- **Size:** 320x50px
- **Placement:** Mobile-only banner ads
- **Behavior:** Only renders on mobile devices (<768px)

## Features

1. **Lazy Loading:** Ads only load when approaching viewport (IntersectionObserver)
2. **Responsive:** Components adapt to screen size appropriately
3. **Performance:** Min-height prevents layout shift (CLS)
4. **Async:** Non-blocking to page render

## Ad Network Integration

### Ezoic Setup (Recommended)

1. Create account at [ezoic.com](https://ezoic.com)
2. Ezoic provides a JavaScript snippet
3. Replace placeholder content with Ezoic ad tags:

```tsx
// In your ad component, replace the placeholder div with:
<div id={`ezoic-pub-ad-placeholder-${slotId}`}></div>
```

### Google AdSense

```tsx
useEffect(() => {
  if (isVisible && window.adsbygoogle) {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }
}, [isVisible])

// Render:
<ins className="adsbygoogle"
  style={{ display: 'block' }}
  data-ad-client="ca-pub-XXXXXXXX"
  data-ad-slot={slotId}
  data-ad-format="auto"
></ins>
```

## Usage Examples

### Homepage
```tsx
import { AdLeaderboard, AdMediumRectangle } from '@/components/ads'

// Below hero section
<AdLeaderboard slotId="home-top" />

// After "Explore by Island"
<AdMediumRectangle slotId="home-mid" />

// Above footer
<AdLeaderboard slotId="home-bottom" />
```

### Course Detail Page
```tsx
// Below course image
<AdLeaderboard slotId="course-top" />

// After "About This Course"
<AdMediumRectangle slotId="course-mid-1" />

// After "Green Fees"
<AdMediumRectangle slotId="course-mid-2" />
```

### Island Pages
```tsx
import { AdLeaderboard, AdInFeed } from '@/components/ads'

// Below header
<AdLeaderboard slotId="island-top" />

// Every 3 course cards
{courses.map((course, index) => (
  <>
    <CourseCard key={course.id} course={course} />
    {(index + 1) % 3 === 0 && <AdInFeed slotId="island-feed" />}
  </>
))}
```

## Testing

Before deploying ads to production:

1. **Test on staging** - Verify ads don't break layout
2. **Check Core Web Vitals** - Monitor LCP, FID, CLS
3. **Mobile testing** - Ensure responsive behavior works
4. **Lazy loading** - Confirm ads load only when scrolled into view

## Performance Targets

- Additional load time: <100ms
- Layout shift (CLS): <0.1
- No blocking of main content render

## Future Enhancements

- [ ] Ad refresh on route change
- [ ] Viewability tracking
- [ ] A/B testing different ad placements
- [ ] Ad blocker detection with fallback content
