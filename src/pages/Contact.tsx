import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Inbox, Users, CalendarHeart, Megaphone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
    "bot-field": "", // honeypot
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Block bot submissions
    if (formData["bot-field"]) {
      console.warn("Bot detected. Submission blocked.");
      setLoading(false);
      return;
    }

    try {
      await fetch("https://hook.us2.make.com/6q3ncobyykeu5vq8e4bdpexfoe4t0hy8", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      toast({ title: "Message sent!", description: "Thanks for reaching out — we’ll reply soon." });
      setFormData({ name: "", email: "", type: "", message: "", "bot-field": "" });
    } catch (err) {
      toast({ title: "Error", description: "Message failed to send. Try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
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
            <ContactInfo icon={Inbox} title="General Inquiries" text="For all other messages, use the form or email us at hello@rubberduckydrinkco.com" />
            <ContactInfo icon={Users} title="Wholesale / Retail" text="Interested in stocking Rubber Ducky? Visit our Wholesale page." link="/wholesale/apply" />
            <ContactInfo icon={CalendarHeart} title="Event Requests" text="Want Ducky at your event or festival? Send us a message with the details!" />
            <ContactInfo icon={Megaphone} title="Press & Media" text="We’re happy to chat. For press inquiries, please contact our media team." />
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            {/* Honeypot Field */}
            <input
              type="hidden"
              name="bot-field"
              value={formData["bot-field"]}
              onChange={handleChange}
            />

            <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
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
            <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
            <Button type="submit" variant="red" className="w-full font-bold text-lg py-3 mt-4" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

const ContactInfo = ({ icon: Icon, title, text, link }: any) => (
  <div className="flex items-start gap-4">
    <Icon className="text-ducky-red mt-1" />
    <div>
      <h3 className="text-xl font-semibold text-ducky-red">{title}</h3>
      <p className="text-black/70 text-sm">
        {link ? (
          <>
            {text.split("Visit")[0]}
            <a href={link} className="underline">Visit our Wholesale page</a>
          </>
        ) : text}
      </p>
    </div>
  </div>
);

export default Contact;
