import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import React, { useEffect, useState } from 'react';

const ShippingPolicy = () => {
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
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900">Shipping Policy</h1>
      <p className="text-lg text-gray-600 mb-10 text-center italic">Last updated: August 22, 2024</p>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Table of Contents</h2>
        <ul className="list-disc ml-6 space-y-2 text-blue-600">
          <li><a href="#shipping-policies" className="hover:underline">Shipping Policies</a></li>
          <li><a href="#returns" className="hover:underline">Incorrect or Defective Items</a></li>
          <li><a href="#contact" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>

      <div className="space-y-12 text-gray-800 text-lg leading-relaxed">
        <section id="shipping-policies" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Shipping Policies</h2>
          <ul className="list-disc ml-6 space-y-3">
            <li>Orders placed before 12:00 PM MST (Monday–Friday) are processed and shipped the same day.</li>
            <li>Orders placed after 12:00 PM MST are shipped the next business day.</li>
            <li>No shipments occur on Sundays; Sunday orders ship Monday morning.</li>
            <li>Shipments to PO Boxes, APO/FPO addresses, Alaska, Hawaii, and US Territories use Priority Mail.</li>
            <li>Shipping times refer to business days, excluding weekends and holidays.</li>
            <li>Shipping issues (e.g., failed delivery, delays, or returns) are outside our control. For assistance, contact us at <a href="mailto:hello@rubberduckydrinkco.com" className="text-blue-600 font-medium hover:underline">hello@rubberduckydrinkco.com</a>.</li>
          </ul>
        </section>

        <section id="returns" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Incorrect or Defective Items</h2>
          <p>
            If you receive an incorrect or defective item, please contact our Customer Support team at{' '}
            <a href="mailto:hello@rubberduckydrinkco.com" className="text-blue-600 font-medium hover:underline">
              hello@rubberduckydrinkco.com
            </a>{' '}
            for a replacement.
          </p>
        </section>

        <section id="contact" className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Contact Us</h2>
          <p>
            For questions about our shipping policies or to report an issue, reach out via email at{' '}
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

export default ShippingPolicy;