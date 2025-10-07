import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import React, { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-8 lg:p-12 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900">Privacy Policy</h1>
      <p className="text-lg text-gray-600 mb-10 text-center italic">Last updated: August 22, 2024</p>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Table of Contents</h2>
        <ul className="list-disc ml-6 space-y-2 text-blue-600">
          <li><a href="#introduction" className="hover:underline">Introduction</a></li>
          <li><a href="#changes" className="hover:underline">Changes to This Privacy Policy</a></li>
          <li><a href="#data-collection-use" className="hover:underline">How We Collect and Use Your Personal Information</a></li>
          <li><a href="#cookies" className="hover:underline">Cookies</a></li>
          <li><a href="#data-disclosure" className="hover:underline">How We Disclose Personal Information</a></li>
          <li><a href="#third-party-links" className="hover:underline">Third-Party Websites and Links</a></li>
          <li><a href="#childrens-data" className="hover:underline">Children's Data</a></li>
          <li><a href="#security-retention" className="hover:underline">Security and Retention</a></li>
          <li><a href="#your-rights" className="hover:underline">Your Rights</a></li>
          <li><a href="#complaints" className="hover:underline">Complaints</a></li>
          <li><a href="#international-users" className="hover:underline">International Users</a></li>
          <li><a href="#sms-marketing" className="hover:underline">SMS/MMS Mobile Message Program</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      <div className="space-y-12 text-gray-800 text-lg leading-relaxed">
        <section id="introduction" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Introduction</h2>
          <p>
            This Privacy Policy explains how Rubber Ducky Drink Co. ("we," "us," or "our") collects, uses, and shares your personal information when you visit or use our services at rubberduckydrinkco.com ("Site"), make a purchase, or communicate with us. "You" refers to customers, visitors, or others whose information we collect.
          </p>
          <p>
            By using our Services, you agree to the collection, use, and disclosure of your information as described here. If you do not agree, please do not use our Services.
          </p>
        </section>

        <section id="changes" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy to reflect changes in practices or legal requirements. Updates will be posted on the Site with a revised "Last updated" date. We encourage regular review.
          </p>
        </section>

        <section id="data-collection-use" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">How We Collect and Use Your Personal Information</h2>
          <p>
            We collect personal information to provide our Services, based on your interactions with us. We may also use it to communicate, improve Services, comply with laws, enforce terms, and protect rights.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">What Personal Information We Collect</h3>
          <p>"Personal information" identifies or relates to you.</p>

          <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-900">Information You Provide</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>Contact details: Name, address, phone number, email.</li>
            <li>Order information: Name, billing/shipping address, payment confirmation, email, phone number.</li>
            <li>Account information: Username, password, security questions.</li>
            <li>Customer support information: Information shared when contacting us.</li>
          </ul>
          <p>Not providing required information may limit access to certain features.</p>

          <h4 className="text-lg font-semibold mt-6 mb-2 text-gray-900">Information We Collect Automatically</h4>
          <p>
            We collect "Usage Data" (e.g., device, browser, IP address, interactions) using cookies and similar technologies.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-2 text-gray-900">Information from Third Parties</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>From vendors like hosting or analytics providers.</li>
            <li>From payment processors (e.g., bank account, credit/debit card details, billing address).</li>
            <li>From third parties using tracking technologies (e.g., pixels, web beacons).</li>
          </ul>
          <p>Third-party information is handled per this policy.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">How We Use Your Information</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide Services: Fulfill orders, process payments, manage accounts, arrange shipping, facilitate returns.</li>
            <li>Marketing: Send promotions via email, text, or mail, and tailor ads.</li>
            <li>Security: Detect and prevent fraud or malicious activity.</li>
            <li>Support: Provide customer support and improve Services.</li>
          </ul>
        </section>

        <section id="cookies" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Cookies</h2>
          <p>
            We use cookies to operate and improve our Site (e.g., preferences, analytics). Third parties may use cookies for tailored services and ads.
          </p>
          <p>
            Browsers accept cookies by default. You can reject them, but this may impact functionality. Blocking cookies may not fully prevent data sharing with ad partners.
          </p>
          <p>
            We recognize the Global Privacy Control (GPC) signal for opting out of data sharing or targeted ads. Learn more at{' '}
            <a href="https://globalprivacycontrol.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">
              globalprivacycontrol.org
            </a>. Other "Do Not Track" signals are not recognized.
          </p>
        </section>

        <section id="data-disclosure" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">How We Disclose Personal Information</h2>
          <p>We may disclose information for:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Vendors (e.g., IT, payment processing, fulfillment).</li>
            <li>Business/marketing partners, per their privacy notices.</li>
            <li>With your consent (e.g., shipping, social media).</li>
            <li>Affiliates for business operations.</li>
            <li>Legal obligations, business transactions, or rights protection.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Categories Disclosed</h3>
          <p>In the past 12 months, we disclosed:</p>
          <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipients</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap align-top">
                    <ul className="list-disc ml-4 space-y-1">
                      <li>Identifiers (e.g., contact, order, account info)</li>
                      <li>Customer Records (e.g., contact, order info)</li>
                      <li>Commercial info (e.g., order, support info)</li>
                      <li>Internet activity (e.g., Usage Data)</li>
                      <li>Geolocation (e.g., IP-based location)</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap align-top">
                    <ul className="list-disc ml-4 space-y-1">
                      <li>Vendors (e.g., ISPs, payment processors, analytics)</li>
                      <li>Business/marketing partners</li>
                      <li>Affiliates</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            We do not use or disclose sensitive information without consent or to infer characteristics.
          </p>
          <p>In the past 12 months, we "sold" or "shared" for advertising:</p>
          <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipients</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Identifiers (e.g., name, email)</td>
                  <td className="px-6 py-4 whitespace-nowrap">Business/marketing partners</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Commercial info (e.g., purchases)</td>
                  <td className="px-6 py-4 whitespace-nowrap">Business/marketing partners</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Usage Data</td>
                  <td className="px-6 py-4 whitespace-nowrap">Business/marketing partners</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="third-party-links" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Third-Party Websites and Links</h2>
          <p>
            Our Site may link to third-party platforms. Review their privacy policies, as we are not responsible for their practices or content. Publicly shared information on third-party platforms may be visible to others.
          </p>
        </section>

        <section id="childrens-data" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Children's Data</h2>
          <p>
            Our Services are not for children under 13, and we do not knowingly collect their information. Parents or guardians can contact us to delete such data. We have no knowledge of sharing/selling data of those under 16.
          </p>
        </section>

        <section id="security-retention" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Security and Retention</h2>
          <p>
            No security is perfect; information sent may not be secure in transit. Avoid insecure channels for sensitive data. We retain information based on account needs, legal obligations, or contract enforcement.
          </p>
        </section>

        <section id="your-rights" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Your Rights</h2>
          <p>Depending on your location, you may have rights like:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Access/Know: Request details on your information's use.</li>
            <li>Delete: Request deletion of your information.</li>
            <li>Correct: Request correction of inaccurate data.</li>
            <li>Portability: Receive or transfer your information.</li>
            <li>Restrict Processing: Limit how we process your data.</li>
            <li>Withdraw Consent: Revoke consent for data processing.</li>
            <li>Appeal: Appeal a declined request.</li>
            <li>Manage Communications: Opt out of promotional emails.</li>
          </ul>
          <p>
            Exercise rights via our Site or by contacting us. We may verify identity and will not discriminate against you for exercising rights.
          </p>
        </section>

        <section id="complaints" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Complaints</h2>
          <p>
            Contact us with complaints about data processing. You may appeal our response or contact your local data protection authority.
          </p>
        </section>

        <section id="international-users" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">International Users</h2>
          <p>
            Your information may be processed outside your country. For European transfers, we use Standard Contractual Clauses or equivalent mechanisms.
          </p>
        </section>

        <section id="sms-marketing" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">SMS/MMS Mobile Message Program</h2>
          <p>
            Our mobile messaging program ("Program") sends SMS/MMS for updates, alerts, promotions, and offers. Consent is voluntary and not required for purchases. Messages may be automated, and frequency varies. You are responsible for messaging charges.
          </p>
          <p>
            Opt out by replying STOP to any message or using the unsubscribe link. Text HELP or email{' '}
            <a href="mailto:hello@rubberduckydrinkco.com" className="text-blue-600 font-medium hover:underline">
              hello@rubberduckydrinkco.com
            </a>{' '}
            for support. We may change Program numbers and will notify you. Carriers are not liable for delayed messages.
          </p>
          <p>
            You must provide a valid mobile number and notify us of changes. You agree to indemnify us for claims from Program use or providing a non-owned number. We are not liable for message delivery issues or reliance on Program information.
          </p>
          <p>
            The Program is not for those under 13, or under 18 without parental permission. Text marketing messages are limited to 4 per month. Consent is not a purchase condition.
          </p>
        </section>

        <section id="contact" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Contact</h2>
          <p>
            For questions or to exercise rights, email{' '}
            <a href="mailto:hello@rubberduckydrinkco.com" className="text-blue-600 font-medium hover:underline">
              hello@rubberduckydrinkco.com
            </a>{' '}
            or mail us at 9615 E County Line Rd, Centennial, CO, 80112, US.
          </p>
        </section>
      </div>

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default PrivacyPolicy;