// components/modals/SuggestLocationModal.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";

const SuggestLocationModal = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
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
        body: new URLSearchParams(formData).toString(),
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
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="yellow" size="lg">
          Suggest a Location
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold text-ducky-red text-center">Suggest a Location</h2>
          <input type="hidden" name="bot-field" value={formData["bot-field"]} onChange={handleChange} />

          {submitted && (
            <div className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-md text-sm text-center">
              🎉 <strong>Thanks!</strong> If this store picks us up, you might get a Ducky gift!
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>

          <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />

          <Input name="storeName" value={formData.storeName} onChange={handleChange} placeholder="Store Name" required />

          <Select value={formData.storeType} onValueChange={(val) => setFormData({ ...formData, storeType: val })} required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Store Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Liquor Store">Liquor Store</SelectItem>
              <SelectItem value="Restaurant / Bar">Restaurant / Bar</SelectItem>
              <SelectItem value="Other Retail">Other Retail</SelectItem>
            </SelectContent>
          </Select>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
            <Input name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
            <Input name="zip" value={formData.zip} onChange={handleChange} placeholder="ZIP" required />
          </div>

          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Why is this store a great fit for Ducky? (optional)"
          />

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-ducky-red hover:bg-ducky-red/90 text-white font-bold py-3 text-lg"
          >
            <MapPin className="h-5 w-5 mr-2" /> {loading ? "Submitting..." : "Submit Location"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SuggestLocationModal;
