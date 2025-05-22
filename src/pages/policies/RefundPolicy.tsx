import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import React, { useEffect, useState } from 'react';

const ReturnRefundPolicy = () => {
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
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900">Return and Refund Policy</h1>
      <p className="text-lg text-gray-600 mb-10 text-center italic">Last updated: August 22, 2024</p>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Table of Contents</h2>
        <ul className="list-disc ml-6 space-y-2 text-blue-600">
          <li><a href="#overview" className="hover:underline">Overview</a></li>
          <li><a href="#no-returns-refunds" className="hover:underline">No Returns or Refunds</a></li>
          <li><a href="#replacements" className="hover:underline">Replacements for Damaged Products</a></li>
          <li><a href="#contact" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>

      <div className="space-y-12 text-gray-800 text-lg leading-relaxed">
        <section id="overview" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Overview</h2>
          <p>
            This Return and Refund Policy outlines the conditions for returns, refunds, and replacements for products purchased from Rubber Ducky Drink Co. ("we," "us," or "our") through rubberduckydrinkco.com ("Site") or other sales channels. By purchasing, you agree to this policy.
          </p>
        </section>

        <section id="no-returns-refunds" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">No Returns or Refunds</h2>
          <p>
            Due to the perishable nature of our beverage products, we do not accept returns or offer refunds for purchases. All sales are final.
          </p>
        </section>

        <section id="replacements" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Replacements for Damaged Products</h2>
          <p>
            If you receive damaged, leaking, or defective products, we will provide a replacement at no cost. To request a replacement, contact our Customer Support team at{' '}
            <a href="mailto:hello@rubberduckydrinkco.com" className="text-blue-600 font-medium hover:underline">
              hello@rubberduckydrinkco.com
            </a>{' '}
            with your order details and photos of the damaged items. We will process replacements promptly.
          </p>
        </section>

        <section id="contact" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Contact Us</h2>
          <p>
            For questions or to request a replacement, email{' '}
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

export default ReturnRefundPolicy;