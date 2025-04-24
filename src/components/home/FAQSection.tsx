import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What ingredients are in your non-alcoholic margaritas?",
    answer:
      "Real lime juice, natural agave, salt, and water—no preservatives, no additives, just clean refreshment.",
  },
  {
    question: "Where can I find your drinks in stores?",
    answer:
      "Check out our Store Locator page to find the nearest retailers and bars that carry Rubber Ducky.",
  },
  {
    question: "Do you offer wholesale or bulk orders?",
    answer:
      "Yep! We work with retailers, bars, and restaurants. Visit our Wholesale page to get started.",
  },
  {
    question: "Can I enjoy Rubber Ducky if I’m sober or pregnant?",
    answer:
      "Yes—it's 0.0% alcohol and made with real, natural ingredients. But if you're unsure, ask your doctor.",
  },
  {
    question: "Can I use Rubber Ducky as a mixer?",
    answer:
      "Totally. It's great solo or with a shot of your favorite tequila if you're feeling wild.",
  },
  {
    question: "Do you have other flavors?",
    answer:
      "Our Classic Margarita is just the start. Watermelon Jalapeño is coming soon—get on the list!",
  },
  {
    question: "Do your drinks contain any preservatives or artificial flavors?",
    answer:
      "Nope. No weird stuff here. Just real ingredients, low (All-Natural) sugar, and straight-up good taste.",
  },
];


export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto rounded-3xl bg-ducky-yellow px-6 md:px-16 py-16 shadow-lg">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-ducky-red mb-2">FAQs</h2>
          <p className="text-ducky-red/80">
            Find answers to common questions about our products, shipping, and more
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border-2 border-ducky-red overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-ducky-red font-semibold text-lg"
              >
                {faq.question}
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-black/80">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
