import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Hawaii Golf Guide",
  description: "Read the terms and conditions for using Hawaii Golf Guide.",
  metadataBase: new URL("https://hawaiigolf.guide"),
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Hawaii Golf Guide",
    description: "Read the terms and conditions for using Hawaii Golf Guide.",
    url: "https://hawaiigolf.guide/terms",
    siteName: "Hawaii Golf Guide",
    locale: "en_US",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Terms of Service
        </h1>
        
        <div className="text-sm text-gray-500 mb-8">
          <p><strong>Effective Date:</strong> April 17, 2026</p>
          <p><strong>Last Updated:</strong> April 17, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Acceptance of Terms</h2>
          <p className="mb-4">
            Welcome to Hawaii Golf Guide (&quot;Site,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Hawaii Golf Guide governing your access to and use of our website at https://hawaiigolf.guide.
          </p>
          <p className="mb-4 font-semibold">
            By accessing or using our Site, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Site.
          </p>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Site after changes constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Description of Service</h2>
          <p className="mb-4">Hawaii Golf Guide is an online directory and informational resource for golf courses in Hawaii. Our services include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Golf course listings and information</li>
            <li>Pricing and rate information</li>
            <li>Course descriptions and photos</li>
            <li>Booking links and resources</li>
            <li>Travel guides and golf-related content</li>
            <li>Email newsletters and updates</li>
          </ul>
          <p className="mb-4 font-semibold">
            Disclaimer: We do not operate, own, or manage any golf courses listed on our Site. All bookings, reservations, and transactions are handled directly by the respective golf courses or their authorized booking partners.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">User Conduct</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Prohibited Activities</h3>
          <p className="mb-4">You agree not to use our Site to:</p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li><strong>Violate laws or regulations</strong> - Engage in activities that violate any applicable local, state, national, or international law</li>
            <li><strong>Infringe rights</strong> - Violate intellectual property rights, privacy rights, or any other rights of third parties</li>
            <li><strong>Harm our systems</strong> - Interfere with or disrupt the Site, servers, or networks connected to the Site</li>
            <li><strong>Spam or solicit</strong> - Send unsolicited communications, spam, or pyramid schemes</li>
            <li><strong>Upload malicious content</strong> - Transmit viruses, malware, or other harmful code</li>
            <li><strong>Scrape or harvest</strong> - Use automated means to scrape, harvest, or collect data from our Site without permission</li>
            <li><strong>Impersonate</strong> - Impersonate any person or entity, or falsely state your affiliation</li>
            <li><strong>Misrepresent</strong> - Provide false or misleading information</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Account Security</h3>
          <p className="mb-4">If you create an account or subscribe to our services:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You are responsible for all activities under your account</li>
            <li>You must notify us immediately of any unauthorized access or security breach</li>
            <li>We are not liable for any loss or damage from your failure to comply with these obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Intellectual Property Rights</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Our Content</h3>
          <p className="mb-4">All content on Hawaii Golf Guide, including but not limited to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Text and written content</li>
            <li>Graphics and images</li>
            <li>Logos and trademarks</li>
            <li>Course information and data</li>
            <li>Website design and layout</li>
            <li>Software and code</li>
          </ul>
          <p className="mb-4">is the property of Hawaii Golf Guide or our content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Limited License</h3>
          <p className="mb-4">We grant you a limited, non-exclusive, non-transferable, revocable license to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access and view the Site content for personal, non-commercial use</li>
            <li>Share links to our content on social media</li>
            <li>Print pages for personal reference</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Prohibited Uses</h3>
          <p className="mb-4">You may NOT:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Reproduce, distribute, or publicly display our content without permission</li>
            <li>Modify, adapt, or create derivative works from our content</li>
            <li>Use our content for commercial purposes without written consent</li>
            <li>Remove copyright notices or watermarks from images</li>
            <li>Frame or mirror our Site without authorization</li>
            <li>Use our trademarks without written permission</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">User-Generated Content</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Submissions</h3>
          <p className="mb-4">If you submit content to us (reviews, comments, suggestions, etc.):</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>You retain ownership of your content</li>
            <li>You grant us a perpetual, worldwide, royalty-free license to use, reproduce, modify, and display your content</li>
            <li>You represent that you have the right to grant this license</li>
            <li>You are solely responsible for your content</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Content Standards</h3>
          <p className="mb-4">User-generated content must not:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Be defamatory, obscene, or offensive</li>
            <li>Promote illegal activities</li>
            <li>Infringe on third-party rights</li>
            <li>Contain malware or harmful code</li>
            <li>Be spam or promotional without authorization</li>
          </ul>
          <p className="mb-4">We reserve the right to remove any user-generated content at our discretion.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Golf Course Information</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Accuracy of Information</h3>
          <p className="mb-4">We strive to provide accurate and up-to-date information about golf courses, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Course names and descriptions</li>
            <li>Pricing and rates</li>
            <li>Contact information</li>
            <li>Amenities and features</li>
            <li>Booking procedures</li>
          </ul>
          <p className="mb-4">However, we cannot guarantee the accuracy, completeness, or timeliness of all information. Golf courses may change their:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Pricing without notice</li>
            <li>Operating hours</li>
            <li>Amenities and services</li>
            <li>Booking policies</li>
            <li>Contact information</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Verification Responsibility</h3>
          <p className="mb-4 font-semibold">
            You are responsible for verifying all information directly with the golf course before:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Making travel plans</li>
            <li>Booking tee times</li>
            <li>Relying on pricing information</li>
            <li>Planning your itinerary</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Rate and Pricing Information</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>All rates displayed are for informational purposes only</li>
            <li>Rates may not include taxes, fees, or additional charges</li>
            <li>Special rates (kama&apos;aina, military, senior) require proper identification</li>
            <li>We are not responsible for rate discrepancies or changes</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Booking and Reservations</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Third-Party Bookings</h3>
          <p className="mb-4">Our Site provides links to third-party booking services and golf course websites. When you:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Click on booking links</li>
            <li>Make reservations through affiliate links</li>
            <li>Purchase products or services</li>
          </ul>
          <p className="mb-4">You are entering into agreements directly with those third parties.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Affiliate Relationships</h3>
          <p className="mb-4 font-semibold">
            Disclosure: Hawaii Golf Guide participates in affiliate marketing programs. When you click on certain links and make purchases, we may earn commissions at no additional cost to you.
          </p>
          <p className="mb-4">Our affiliate partners include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Amazon Associates</li>
            <li>GolfNow</li>
            <li>TeeOff</li>
            <li>Other golf-related services</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">No Booking Responsibility</h3>
          <p className="mb-4">We are NOT responsible for:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Booking errors or confirmations</li>
            <li>Cancellations or changes</li>
            <li>Refunds or credits</li>
            <li>Course closures or maintenance</li>
            <li>Weather-related cancellations</li>
            <li>Any disputes with golf courses</li>
          </ul>
          <p className="mb-4 font-semibold">
            Contact the golf course or booking service directly for all booking-related matters.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Disclaimer of Warranties</h2>
          <p className="mb-4 font-semibold uppercase">
            THE SITE AND ALL CONTENT, SERVICES, AND FEATURES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND.
          </p>
          <p className="mb-4 font-semibold">WE EXPRESSLY DISCLAIM ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Merchantability</li>
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement</li>
            <li>Accuracy of information</li>
            <li>Uninterrupted or error-free service</li>
            <li>Virus-free content</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Limitation of Liability</h2>
          <p className="mb-4 font-semibold uppercase">
            TO THE FULLEST EXTENT PERMITTED BY LAW, HAWAII GOLF GUIDE AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Indirect damages</strong> - Loss of profits, revenue, data, or goodwill</li>
            <li><strong>Consequential damages</strong> - Any indirect, incidental, special, or consequential damages</li>
            <li><strong>Punitive damages</strong> - Any punitive or exemplary damages</li>
            <li><strong>Aggregated damages</strong> - Total liability exceeding $100 USD</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Indemnification</h2>
          <p className="mb-4">You agree to indemnify, defend, and hold harmless Hawaii Golf Guide and its affiliates, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to:</p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>Your use of the Site</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any third-party rights</li>
            <li>Your user-generated content</li>
            <li>Your interactions with golf courses or booking services</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Third-Party Links and Services</h2>
          <p className="mb-4">Our Site contains links to third-party websites, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Golf course websites</li>
            <li>Booking platforms</li>
            <li>Affiliate partners</li>
            <li>Travel resources</li>
            <li>Social media platforms</li>
          </ul>
          <p className="mb-4">These links are provided for convenience only. We do not endorse or guarantee third-party sites, control third-party content, or assume responsibility for third-party practices.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Termination</h2>
          <p className="mb-4"><strong>By You:</strong> You may stop using our Site at any time.</p>
          <p className="mb-4"><strong>By Us:</strong> We may suspend or terminate your access to the Site at any time, with or without cause, and with or without notice.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Governing Law</h2>
          <p className="mb-4">These Terms shall be governed by and construed in accordance with the laws of the State of Hawaii, United States, without regard to conflict of law principles. You agree that any legal action or proceeding arising out of these Terms shall be brought exclusively in the state or federal courts located in Honolulu, Hawaii.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Information</h2>
          <p className="mb-4">For questions about these Terms of Service:</p>
          <p className="mb-2"><strong>Email:</strong> <a href="mailto:legal@hawaiigolf.guide" className="text-emerald-600 hover:underline">legal@hawaiigolf.guide</a></p>
          <p className="mb-2"><strong>Address:</strong><br />
          Hawaii Golf Guide<br />
          Honolulu, HI 96815</p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="font-semibold uppercase text-center">
              BY USING HAWAII GOLF GUIDE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
            </p>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p><strong>Last Updated:</strong> April 17, 2026</p>
            <p><strong>Version:</strong> 1.0</p>
          </div>
        </div>
      </div>
    </main>
  );
}
