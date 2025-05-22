import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";

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

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

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
        {/* Honeypot Field */}
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
              placeholder="Jane"
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              required
            />
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
        </div>

        <div>
          <Label htmlFor="storeType">Store Type</Label>
          <select
            name="storeType"
            id="storeType"
            value={formData.storeType}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md border-input bg-background text-sm"
          >
            <option value="">Select store type</option>
            <option value="Liquor Store">Liquor Store</option>
            <option value="Restaurant / Bar">Restaurant / Bar</option>
            <option value="Other Retail">Other Retail</option>
          </select>
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
