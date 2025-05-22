import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const SuggestLocation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    storeName: "",
    storeType: "",
    city: "",
    state: "",
    zip: "",
    message: "",
    "bot-field": "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    storeName: false,
    storeType: false,
    city: false,
    state: false,
    zip: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const scriptId = "recaptcha-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const isWhitespaceOnly = (value: string) => value.trim() === "";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name in errors) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formData["bot-field"]) {
      console.warn("Bot detected. Submission blocked.");
      setLoading(false);
      return;
    }

    const newErrors = {
      firstName: isWhitespaceOnly(formData.firstName),
      lastName: isWhitespaceOnly(formData.lastName),
      email: isWhitespaceOnly(formData.email),
      storeName: isWhitespaceOnly(formData.storeName),
      storeType: isWhitespaceOnly(formData.storeType),
      city: isWhitespaceOnly(formData.city),
      state: isWhitespaceOnly(formData.state),
      zip: isWhitespaceOnly(formData.zip),
    };

    if (Object.values(newErrors).some(Boolean)) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "submit" });

      const payload = {
        ...formData,
        "g-recaptcha-response": token,
      };

      await fetch("https://hook.us2.make.com/hkven6egr1clp7n5luofacw6u4p2s4lo", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload as any).toString(),
      });

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        storeName: "",
        storeType: "",
        city: "",
        state: "",
        zip: "",
        message: "",
        "bot-field": "",
      });
    } catch (error) {
      console.error("Submit error:", error);
      alert("⚠️ Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 ">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-ducky-red mb-3">
          Know a Spot That Needs Ducky?
        </h2>
        <p className="text-ducky-red/80 text-base md:text-lg">
          Help us grow! Suggest a store, bar, or cafe near you that should carry Rubber Ducky.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6"
      >
        <input
          type="hidden"
          name="bot-field"
          value={formData["bot-field"]}
          onChange={handleChange}
        />

        {submitted && (
          <div className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-md text-center text-sm">
            🎉 <strong>Thanks for the suggestion!</strong><br />
            If this location picks up Rubber Ducky, we’ll reach out with a thank-you gift.
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Chief"
              required
            />
            {errors.firstName && <p className="text-red-500 text-sm">First name is required.</p>}
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Duck"
              required
            />
            {errors.lastName && <p className="text-red-500 text-sm">Last name is required.</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">Email is required.</p>}
        </div>

        <div>
          <Label htmlFor="storeName">Store Name</Label>
          <Input
            name="storeName"
            id="storeName"
            value={formData.storeName}
            onChange={handleChange}
            placeholder="Ducky's Liquor"
            required
          />
          {errors.storeName && <p className="text-red-500 text-sm">Store name is required.</p>}
        </div>

        <div>
          <Label htmlFor="storeType">Store Type</Label>
          <Select
            name="storeType"
            value={formData.storeType}
            onValueChange={(value) => setFormData({ ...formData, storeType: value })}
            required
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select store type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Liquor Store">Liquor Store</SelectItem>
              <SelectItem value="Restaurant / Bar">Restaurant / Bar</SelectItem>
              <SelectItem value="Other Retail">Other Retail</SelectItem>
            </SelectContent>
          </Select>
          {errors.storeType && <p className="text-red-500 text-sm">Store type is required.</p>}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              name="city"
              id="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            {errors.city && <p className="text-red-500 text-sm">City is required.</p>}
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Input
              name="state"
              id="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
            {errors.state && <p className="text-red-500 text-sm">State is required.</p>}
          </div>
          <div>
            <Label htmlFor="zip">ZIP Code</Label>
            <Input
              name="zip"
              id="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
            {errors.zip && <p className="text-red-500 text-sm">ZIP code is required.</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="message">Why would this be a great fit? (Optional)</Label>
          <Textarea
            name="message"
            id="message"
            rows={4}
            className="w-full px-3 py-2 border rounded-md border-input bg-background text-sm"
            placeholder="Tell us what makes this store a perfect fit for Rubber Ducky..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full text-white font-bold py-3 px-6 rounded shadow-md hover:bg-ducky-red/90 transition-all bg-ducky-red flex items-center justify-center gap-2 text-lg"
        >
          <MapPin className="h-5 w-5" />
          {loading ? "Submitting..." : "Submit Location"}
        </Button>
      </form>
    </section>
  );
};

export default SuggestLocation;
