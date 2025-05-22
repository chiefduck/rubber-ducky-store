import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import React, { useEffect, useState } from 'react';

const TermsOfService = () => {
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
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900">Mobile Terms of Service</h1>
      <p className="text-lg text-gray-600 mb-10 text-center italic">Last updated: August 22, 2024</p>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Table of Contents</h2>
        <ul className="list-disc ml-6 space-y-2 text-blue-600">
          <li><a href="#overview" className="hover:underline">Overview</a></li>
          <li><a href="#sms-service" className="hover:underline">SMS/Text Messaging Service</a></li>
          <li><a href="#opt-out" className="hover:underline">Opting Out</a></li>
          <li><a href="#support" className="hover:underline">Support</a></li>
          <li><a href="#liability" className="hover:underline">Liability and Privacy</a></li>
        </ul>
      </div>

      <div className="space-y-12 text-gray-800 text-lg leading-relaxed">
        <section id="overview" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Overview</h2>
          <p>
            The Rubber Ducky Drink Co. mobile message service ("Service") is operated by Rubber Ducky Drink Co. ("we," "us," or "our"). By using the Service, you agree to these Mobile Terms. We may modify or cancel the Service or these terms at any time, and continued use after changes constitutes acceptance.
          </p>
        </section>

        <section id="sms-service" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">SMS/Text Messaging Service</h2>
          <p>
            By consenting to our SMS/text messaging service, you agree to receive recurring messages, including updates, alerts (e.g., order updates, account alerts), and promotional offers (e.g., cart reminders), via your wireless provider to the mobile number you provided, even if registered on a Do Not Call list. Messages may use automated systems.
          </p>
          <p>
            Participation is voluntary and not required for purchases. You are responsible for all text messaging charges from your wireless provider. Message frequency varies, and message/data rates may apply.
          </p>
        </section>

        <section id="opt-out" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Opting Out</h2>
          <p>
            To opt out, text STOP to +18779421374 or use the unsubscribe link in any message. You'll receive a one-time confirmation, and no further messages will be sent unless you re-initiate. For other Rubber Ducky Drink Co. mobile programs, opt out separately per their terms.
          </p>
          <p>
            We may change the Service's phone number and will notify you. Messages sent to an old number (including STOP/HELP requests) may not be received, and we are not responsible for honoring such requests.
          </p>
        </section>

        <section id="support" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Support</h2>
          <p>
            For assistance, text HELP to +18779421374 or email{' '}
            <a href="mailto:hello@rubberduckydrinkco.com" className="text-blue-600 font-medium hover:underline">
              hello@rubberduckydrinkco.com
            </a>.
          </p>
          <p>
            Provide a valid mobile number and notify us if it changes. Wireless carriers are not liable for delayed or undelivered messages.
          </p>
        </section>

        <section id="liability" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Liability and Privacy</h2>
          <p>
            To the extent permitted by law, we are not liable for failed, delayed, or misdirected messages, errors in information, or actions taken in reliance on the Service.
          </p>
          <p>
            We respect your privacy. See our{' '}
            <a href="/policies/privacy-policy" className="text-blue-600 font-medium hover:underline">
              Privacy Policy
            </a>{' '}
            for details on how we collect and use your personal information.
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

export default TermsOfService;