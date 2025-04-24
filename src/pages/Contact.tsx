import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Inbox, Users, CalendarHeart, Megaphone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: hook up to Make.com or Netlify / GHL
    console.log("Submitted:", formData);
  };

  return (
    <>
      <Header />

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-extrabold text-ducky-red mb-2">Get In Touch</h1>
          <p className="text-ducky-red/80 max-w-xl mx-auto">
            Questions? Ideas? Want to work with us? We’d love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Inbox className="text-ducky-red mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-ducky-red">General Inquiries</h3>
                <p className="text-black/70 text-sm">For all other messages, use the form or email us at <span className="font-medium">hello@rubberduckydrinkco.com</span></p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="text-ducky-red mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-ducky-red">Wholesale / Retail</h3>
                <p className="text-black/70 text-sm">Interested in stocking Rubber Ducky? Visit our <a href="/wholesale/apply" className="underline">Wholesale page</a>.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CalendarHeart className="text-ducky-red mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-ducky-red">Event Requests</h3>
                <p className="text-black/70 text-sm">Want Ducky at your event or festival? Send us a message with the details!</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Megaphone className="text-ducky-red mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-ducky-red">Press & Media</h3>
                <p className="text-black/70 text-sm">We’re happy to chat. For press inquiries, please contact our media team.</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
          >
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3"
              required
            >
              <option value="">Select Inquiry Type</option>
              <option value="general">General Question</option>
              <option value="vendor">Vendor Inquiry</option>
              <option value="event">Event Opportunity</option>
              <option value="press">Press / Media</option>
            </select>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="g-recaptcha" data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}></div>
            <Button type="submit" variant="red" className="w-full font-bold text-lg py-3 mt-4">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
