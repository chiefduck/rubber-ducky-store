import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Inbox, Users, CalendarHeart, Megaphone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    type: "",
    message: "",
    "bot-field": "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    type: false,
    message: false,
  });

  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const { toast } = useToast();

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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name in errors) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, type: value }));
    setErrors((prev) => ({ ...prev, type: false }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const newErrors = {
      firstName: isWhitespaceOnly(formData.firstName),
      lastName: isWhitespaceOnly(formData.lastName),
      email: isWhitespaceOnly(formData.email),
      type: isWhitespaceOnly(formData.type),
      message: isWhitespaceOnly(formData.message),
    };

    if (formData["bot-field"] || Object.values(newErrors).some(Boolean)) {
      setErrors(newErrors);
      toast({
        title: "Invalid Submission",
        description: "Please fill out all required fields correctly.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "submit" });

      const payload = {
        ...formData,
        "g-recaptcha-response": token,
      };

      await fetch("https://hook.us2.make.com/6q3ncobyykeu5vq8e4bdpexfoe4t0hy8", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload as any).toString(),
      });

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — we’ll reply soon.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        type: "",
        message: "",
        "bot-field": "",
      });

      setShowThankYou(true);
    } catch (err) {
      toast({
        title: "Error",
        description: "Message failed to send. Try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-extrabold text-ducky-red mb-2">Get In Touch</h1>
          <p className="text-ducky-red/80 max-w-xl mx-auto">
            Questions? Ideas? Want to work with us? We’d love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <ContactInfo
              icon={Inbox}
              title="General Inquiries"
              text="For all other messages, use the form or email us at hello@rubberduckydrinkco.com"
            />
            <ContactInfo
              icon={Users}
              title="Wholesale / Retail"
              text="Interested in stocking Rubber Ducky? Visit our Wholesale page."
              link="/wholesale/apply"
            />
            <ContactInfo
              icon={CalendarHeart}
              title="Event Requests"
              text="Want Ducky at your event or festival? Send us a message with the details!"
            />
            <ContactInfo
              icon={Megaphone}
              title="Press & Media"
              text="We’re happy to chat. For press inquiries, please contact our media team."
            />
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6 border">
            <input
              type="hidden"
              name="bot-field"
              value={formData["bot-field"]}
              onChange={handleChange}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">First name is required.</p>}
              </div>
              <div>
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">Last name is required.</p>}
              </div>
            </div>

            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">A valid email is required.</p>}
            </div>

            <Input
              name="phone"
              type="tel"
              placeholder="Your Phone (optional)"
              value={formData.phone}
              onChange={handleChange}
            />

            <div>
              <Select value={formData.type} onValueChange={handleTypeChange} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Inquiry Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Question</SelectItem>
                  <SelectItem value="vendor">Vendor Inquiry</SelectItem>
                  <SelectItem value="event">Event Opportunity</SelectItem>
                  <SelectItem value="press">Press / Media</SelectItem>
                </SelectContent>
              </Select>
              {errors.type && <p className="text-red-500 text-sm mt-1">Please select an inquiry type.</p>}
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">Message is required.</p>}
            </div>

            <Button
              type="submit"
              variant="red"
              className="w-full font-bold text-lg py-3 mt-4"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>

      <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
        <DialogContent className="max-w-md text-center">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-ducky-red">Thank You!</DialogTitle>
            <DialogDescription className="mt-2 text-black/80">
              We’ve received your message and will be in touch soon.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setShowThankYou(false)}
            className="mt-6"
            variant="outline"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

const ContactInfo = ({ icon: Icon, title, text, link }: any) => (
  <div className="flex items-start gap-4">
    <Icon className="text-ducky-red mt-1 shrink-0" />
    <div className="text-left">
      <h3 className="text-lg font-semibold text-ducky-red">{title}</h3>
      <p className="text-black/70 text-sm mt-1">
        {link ? (
          <>
            {text.split("Visit")[0]}
            <a href={link} className="underline">Visit our Wholesale page</a>
          </>
        ) : (
          text
        )}
      </p>
    </div>
  </div>
);

export default Contact;
