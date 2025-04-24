
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const WholesaleApplication = () => {
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
          
          <form className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="businessName">Business Name</Label>
              <Input id="businessName" placeholder="Your Store Name" />
            </div>
            
            <div>
              <Label htmlFor="businessType">Business Type</Label>
              <Input 
                id="businessType" 
                placeholder="Restaurant, Retail Store, Bar, etc."
              />
            </div>
            
            <div>
              <Label htmlFor="email">Business Email</Label>
              <Input 
                type="email" 
                id="email" 
                placeholder="you@yourbusiness.com" 
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                type="tel" 
                id="phone" 
                placeholder="(555) 555-5555" 
              />
            </div>
            
            <div>
              <Label htmlFor="address">Business Address</Label>
              <Input id="address" placeholder="123 Main St" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" />
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input id="zipCode" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="message">Additional Information</Label>
              <textarea 
                id="message"
                rows={4}
                className="w-full px-3 py-2 border rounded-md border-input bg-background text-sm"
                placeholder="Tell us about your business and why you'd like to carry our products..."
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
