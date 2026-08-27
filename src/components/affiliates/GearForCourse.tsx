import { AmazonProductCard } from './AmazonProductCard';
import { AffiliateDisclosure } from './AffiliateDisclosure';
import { defaultHawaiiGear, AffiliateProduct } from '@/config/affiliates';

interface GearForCourseProps {
  courseName: string;
  products?: AffiliateProduct[];
}

export function GearForCourse({ courseName, products = defaultHawaiiGear }: GearForCourseProps) {
  // Show first 4 products on course pages
  const displayedProducts = products.slice(0, 4);

  return (
    <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <AffiliateDisclosure inline />
      <h3 className="text-lg font-bold text-gray-800 mb-1">
        Gear Up for {courseName}
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        What golfers recommend bringing to this course
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {displayedProducts.map((product) => (
          <AmazonProductCard
            key={product.asin}
            asin={product.asin}
            title={product.title}
            price={product.price}
            category={product.category}
            tagline={product.tagline}
          />
        ))}
      </div>
    </section>
  );
}
