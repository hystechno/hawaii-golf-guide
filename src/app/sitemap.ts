import coursesData from "@/data/courses.json";

export default function sitemap() {
  const baseUrl = "https://hawaiigolf.guide";
  const staticPages = [
    { url: `${baseUrl}/`, priority: 1.0 },
    { url: `${baseUrl}/courses/`, priority: 0.9 },
    { url: `${baseUrl}/blog/`, priority: 0.8 },
    { url: `${baseUrl}/about/`, priority: 0.6 },
    { url: `${baseUrl}/contact/`, priority: 0.6 },
    { url: `${baseUrl}/privacy/`, priority: 0.3 },
    { url: `${baseUrl}/terms/`, priority: 0.3 },
    { url: `${baseUrl}/tee-times/`, priority: 0.7 },
    { url: `${baseUrl}/golf-stores/`, priority: 0.5 },
    { url: `${baseUrl}/instructors/`, priority: 0.5 },
  ];
  const islands = ["oahu","maui","big-island","kauai","lanai","molokai","molokai-lanai"];
  const islandPages = islands.map(i => ({ url: `${baseUrl}/island/${i}/`, priority: 0.8 }));
  const coursePages = coursesData.courses.map(c => ({ url: `${baseUrl}/courses/${c.id}/`, priority: 0.7 }));
  const blogPosts = ["top-10-golf-courses-hawaii-2026","complete-guide-golfing-hawaii","trip-planner-download"]
    .map(s => ({ url: `${baseUrl}/blog/${s}/`, priority: 0.6 }));
  return [...staticPages, ...islandPages, ...coursePages, ...blogPosts];
}
