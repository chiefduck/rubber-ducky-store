import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";

const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const SuggestLocation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    store: "",
    message: "",
  });

  const [isCaptchaReady, setIsCaptchaReady] = useState(false);

  useEffect(() => {
    const loadCaptcha = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => setIsCaptchaReady(true));
      } else {
        setTimeout(loadCaptcha, 500); // Retry until it's ready
      }
    };

    loadCaptcha();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!window.grecaptcha || !siteKey) return alert("Captcha failed to load.");

    window.grecaptcha.execute(siteKey, { action: "submit" }).then((token: string) => {
      // 👇 You'll send this token to Make.com or Netlify later
      console.log("reCAPTCHA Token:", token);
      console.log("Form Data:", formData);

      // TEMP: basic alert to confirm it worked
      alert("Submission successful (token logged in console)");
    });
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
        <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <Input name="store" placeholder="Store Name + Location (City/State)" value={formData.store} onChange={handleChange} required />
        <Textarea name="message" placeholder="Why would this be a great fit for Rubber Ducky? (Optional)" value={formData.message} onChange={handleChange} />

        <Button
          type="submit"
          disabled={!isCaptchaReady}
          className="bg-ducky-red text-white font-bold py-3 px-6 rounded shadow-md hover:bg-ducky-red/90 transition-all flex items-center justify-center gap-2"
        >
          <MapPin className="h-5 w-5" />
          Submit Location
        </Button>
      </form>

      {/* reCAPTCHA v2 (invisible style) */}
      <script src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}></script>
    </section>
  );
};

export default SuggestLocation;

