import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";

const SuggestLocation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    store: "",
    message: "",
    "bot-field": "", // Honeypot
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Block bot submissions
    if (formData["bot-field"]) {
      console.warn("Bot detected. Submission blocked.");
      setLoading(false);
      return;
    }

    try {
      await fetch("https://hook.us2.make.com/hkven6egr1clp7n5luofacw6u4p2s4lo", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      alert("🎉 Thanks for suggesting a spot! We’ll check it out.");
      setFormData({ name: "", email: "", store: "", message: "", "bot-field": "" });
    } catch (error) {
      console.error("Submit error:", error);
      alert("⚠️ Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-ducky-cream">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-ducky-red mb-2">
          Know a Spot That Needs Ducky?
        </h2>
        <p className="text-ducky-red/80 max-w-xl mx-auto">
          Help us grow! Suggest a store, bar, or cafe near you that should carry Rubber Ducky.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 space-y-6"
      >
        {/* Honeypot field (hidden) */}
        <input type="hidden" name="bot-field" value={formData["bot-field"]} onChange={handleChange} />

        <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <Input name="store" placeholder="Store Name + Location (City/State)" value={formData.store} onChange={handleChange} required />
        <Textarea name="message" placeholder="Why would this be a great fit for Rubber Ducky? (Optional)" value={formData.message} onChange={handleChange} />

        <Button
          type="submit"
          disabled={loading}
          className="bg-ducky-red text-white font-bold py-3 px-6 rounded shadow-md hover:bg-ducky-red/90 transition-all flex items-center justify-center gap-2"
        >
          <MapPin className="h-5 w-5" />
          {loading ? "Submitting..." : "Submit Location"}
        </Button>
      </form>
    </section>
  );
};

export default SuggestLocation;
