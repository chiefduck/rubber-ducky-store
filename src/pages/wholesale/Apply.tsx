import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("https://hook.us2.make.com/kl02se974c9g1mld3r4kqg688amh8goq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Application submitted! We'll get back to you soon.");
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
  };

  return (
    <div className="min-h-screen bg-ducky-cream">
      <Header />

      <main className="container mx-auto py-12 px-4 md:px-8">
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
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
            </div>

            <div>
              <Label htmlFor="businessName">Business Name</Label>
              <Input id="businessName" value={formData.businessName} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="businessType">Business Type</Label>
              <Input id="businessType" value={formData.businessType} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="email">Business Email</Label>
              <Input id="email" type="email" value={formData.email} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="address">Business Address</Label>
              <Input id="address" value={formData.address} onChange={handleChange} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" value={formData.city} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" value={formData.state} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input id="zipCode" value={formData.zipCode} onChange={handleChange} />
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

            <Button type="submit" variant="yellow" className="w-full">
              Submit Application
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WholesaleApplication;
