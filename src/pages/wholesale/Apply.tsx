import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const WholesaleApplication = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    businessType: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: false });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const requiredFields = [
      "firstName",
      "lastName",
      "businessName",
      "businessType",
      "email",
      "address",
      "city",
      "state",
      "zipCode",
    ];

    const newErrors: any = {};
    let hasErrors = false;

    requiredFields.forEach((field) => {
      if (isWhitespaceOnly(formData[field])) {
        newErrors[field] = true;
        hasErrors = true;
      }
    });

    if (hasErrors) {
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

      await fetch("https://hook.us2.make.com/kl02se974c9g1mld3r4kqg688amh8goq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      alert("Application submitted! We'll get back to you soon.");
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        businessName: "",
        businessType: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        message: "",
      });
    } catch (error) {
      console.error("Submit error:", error);
      alert("⚠️ Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-ducky-cream">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-black">Wholesale Application</h1>
          <p className="text-lg text-black/70 mb-8">
            Interested in carrying Rubber Ducky drinks in your establishment? 
            Fill out the form below and our team will get back to you within 48 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <p className="text-red-500 text-sm">First name is required.</p>}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <p className="text-red-500 text-sm">Last name is required.</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="businessName">Business Name</Label>
              <Input id="businessName" value={formData.businessName} onChange={handleChange} />
              {errors.businessName && <p className="text-red-500 text-sm">Business name is required.</p>}
            </div>

            <div>
              <Label htmlFor="businessType">Business Type</Label>
              <Input id="businessType" value={formData.businessType} onChange={handleChange} />
              {errors.businessType && <p className="text-red-500 text-sm">Business type is required.</p>}
            </div>

            <div>
              <Label htmlFor="email">Business Email</Label>
              <Input id="email" type="email" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="text-red-500 text-sm">Email is required.</p>}
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="address">Business Address</Label>
              <Input id="address" value={formData.address} onChange={handleChange} />
              {errors.address && <p className="text-red-500 text-sm">Address is required.</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" value={formData.city} onChange={handleChange} />
                {errors.city && <p className="text-red-500 text-sm">City is required.</p>}
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" value={formData.state} onChange={handleChange} />
                {errors.state && <p className="text-red-500 text-sm">State is required.</p>}
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input id="zipCode" value={formData.zipCode} onChange={handleChange} />
                {errors.zipCode && <p className="text-red-500 text-sm">ZIP Code is required.</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="message">Additional Information</Label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md border-input bg-background text-sm"
              />
            </div>

            <Button type="submit" variant="yellow" className="w-full" disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default WholesaleApplication;
