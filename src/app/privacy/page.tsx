import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Hawaii Golf Guide",
  description: "Learn how Hawaii Golf Guide collects, uses, and protects your personal information.",
  metadataBase: new URL("https://hawaiigolf.guide"),
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Hawaii Golf Guide",
    description: "Learn how Hawaii Golf Guide collects, uses, and protects your personal information.",
    url: "https://hawaiigolf.guide/privacy",
    siteName: "Hawaii Golf Guide",
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        
        <div className="text-sm text-gray-500 mb-8">
          <p><strong>Effective Date:</strong> April 17, 2026</p>
          <p><strong>Last Updated:</strong> April 17, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Introduction</h2>
          <p className="mb-4">
            Hawaii Golf Guide (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://hawaiigolf.guide (the &quot;Site&quot;).
          </p>
          <p className="mb-4">
            Please read this Privacy Policy carefully. By accessing or using the Site, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information</h3>
          <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Subscribe to our newsletter</li>
            <li>Contact us via email or contact forms</li>
            <li>Participate in surveys or promotions</li>
            <li>Make a booking through affiliate links</li>
          </ul>
          <p className="mb-4">The personal information we collect may include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Non-Personal Information</h3>
          <p className="mb-4">We automatically collect certain non-personal information when you visit our Site:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Pages visited and time spent</li>
            <li>Referring website</li>
            <li>Click patterns and navigation</li>
            <li>Geographic location (country/city level)</li>
            <li>Operating system</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How We Collect Information</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cookies and Similar Technologies</h3>
          <p className="mb-4">We use cookies and similar tracking technologies to enhance your browsing experience:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for the Site to function properly (e.g., session management, load balancing)</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Site (Google Analytics)</li>
            <li><strong>Advertising Cookies:</strong> Used by our advertising partners to deliver relevant ads and track ad performance</li>
          </ul>
          <p className="mb-4">You can control cookies through your browser settings. Note that disabling cookies may affect Site functionality.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Third-Party Analytics</h3>
          <p className="mb-4">We use Google Analytics to analyze Site traffic. Google Analytics collects information such as:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Pages you visit</li>
            <li>Time spent on each page</li>
            <li>Your general location</li>
            <li>How you arrived at our Site</li>
          </ul>
          <p className="mb-4">Google Analytics does not identify individual users or associate your IP address with any other data held by Google.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li><strong>Provide and maintain our services</strong> - Display golf course information, process searches, deliver content</li>
            <li><strong>Improve user experience</strong> - Analyze usage patterns to optimize Site design and content</li>
            <li><strong>Communicate with you</strong> - Send newsletters, respond to inquiries, provide updates</li>
            <li><strong>Marketing and advertising</strong> - Show relevant ads, measure ad effectiveness, affiliate marketing</li>
            <li><strong>Legal compliance</strong> - Comply with applicable laws and regulations</li>
            <li><strong>Security</strong> - Protect against fraud, unauthorized access, and other illegal activities</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Advertising and Affiliate Marketing</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Display Advertising</h3>
          <p className="mb-4">We partner with third-party advertising networks to display ads on our Site. These networks may use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Deliver personalized advertisements</li>
            <li>Measure ad performance</li>
            <li>Prevent fraud</li>
          </ul>
          <p className="mb-4">Our advertising partners include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>PropellerAds</li>
            <li>Other networks as added</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Affiliate Marketing</h3>
          <p className="mb-4">Our Site contains affiliate links to third-party products and services, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Amazon Associates</li>
            <li>GolfNow</li>
            <li>TeeOff</li>
            <li>Golf equipment retailers</li>
          </ul>
          <p className="mb-4">When you click an affiliate link and make a purchase, we may earn a commission. This does not affect the price you pay.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Your Advertising Choices</h3>
          <p className="mb-4">You can opt out of personalized advertising by:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Google Ad Settings</a></li>
            <li>Using the <a href="http://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Network Advertising Initiative opt-out</a></li>
            <li>Using the <a href="http://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Digital Advertising Alliance opt-out</a></li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Information Sharing and Disclosure</h2>
          <p className="mb-4">We do not sell, rent, or trade your personal information. We may share information in the following circumstances:</p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Service Providers</h3>
          <p className="mb-4">We may share information with third-party vendors who provide services on our behalf:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Web hosting (Vercel)</li>
            <li>Analytics (Google Analytics)</li>
            <li>Email delivery (Mailchimp)</li>
            <li>Advertising networks</li>
          </ul>
          <p className="mb-4">These providers have access to your information only to perform specific tasks and are obligated to protect your information.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Legal Requirements</h3>
          <p className="mb-4">We may disclose your information if required by:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Law or legal process</li>
            <li>Government request</li>
            <li>Protection of our rights, property, or safety</li>
            <li>Prevention of fraud or illegal activity</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Data Security</h2>
          <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal information:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>SSL/TLS encryption for data transmission</li>
            <li>Regular security assessments</li>
            <li>Limited access to personal information (authorized personnel only)</li>
            <li>Secure password policies</li>
          </ul>
          <p className="mb-4">However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Your Privacy Rights</h2>
          <p className="mb-4">Depending on your location, you may have the following rights:</p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Access and Portability</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Request a copy of your personal information</li>
            <li>Receive your data in a portable format</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Correction</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Update or correct inaccurate information</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Deletion</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Request deletion of your personal information</li>
            <li>Note: We may retain certain information for legal or legitimate business purposes</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Opt-Out</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Unsubscribe from marketing emails</li>
            <li>Opt out of cookies (via browser settings)</li>
            <li>Opt out of personalized advertising</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">California Residents (CCPA)</h3>
          <p className="mb-4">California residents have additional rights under the California Consumer Privacy Act:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Know what personal information is collected</li>
            <li>Know whether personal information is sold or disclosed</li>
            <li>Opt out of the sale of personal information</li>
            <li>Non-discrimination for exercising privacy rights</li>
          </ul>
          <p className="mb-4">To exercise your rights, contact us at: <a href="mailto:privacy@hawaiigolf.guide" className="text-emerald-600 hover:underline">privacy@hawaiigolf.guide</a></p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Children&apos;s Privacy</h2>
          <p className="mb-4">Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn we have collected such information, we will delete it immediately.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Third-Party Links</h2>
          <p className="mb-4">Our Site contains links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-4">We may update this Privacy Policy from time to time. Changes will be:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Posted on this page</li>
            <li>Effective immediately upon posting</li>
            <li>Notified via email for significant changes</li>
          </ul>
          <p className="mb-4">We encourage you to review this policy periodically. Your continued use of the Site after changes constitutes acceptance of the updated policy.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">If you have questions about this Privacy Policy or our privacy practices:</p>
          <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@hawaiigolf.guide" className="text-emerald-600 hover:underline">privacy@hawaiigolf.guide</a></p>
          <p className="mb-2"><strong>Address:</strong><br />
          Hawaii Golf Guide<br />
          Honolulu, HI 96815</p>
          <p className="mb-4"><strong>Response Time:</strong> We aim to respond within 48 hours.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Specific Disclosures</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Amazon Associates Disclosure</h3>
          <p className="mb-4">Hawaii Golf Guide is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Affiliate Disclosure</h3>
          <p className="mb-4">Some links on our Site are affiliate links. When you click these links and make a purchase, we may earn a commission at no additional cost to you. We only recommend products and services we believe will provide value to our users.</p>

          <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
            <p><strong>Document Version:</strong> 1.0</p>
            <p><strong>Effective Date:</strong> April 17, 2026</p>
            <p><strong>Next Review:</strong> April 17, 2027</p>
          </div>
        </div>
      </div>
    </main>
  );
}
