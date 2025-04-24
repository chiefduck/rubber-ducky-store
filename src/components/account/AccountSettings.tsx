
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";

export const AccountSettings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);
  const { toast } = useToast();
  const { user, signOut } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call - replace with Supabase integration later
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Settings updated",
        description: "Your profile has been successfully updated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewsletterToggle = async (checked: boolean) => {
    try {
      setNewsletterOptIn(checked);
      // This will be replaced with Supabase update later
      toast({
        title: checked ? "Subscribed to newsletter" : "Unsubscribed from newsletter",
        description: checked 
          ? "You'll now receive our latest updates!" 
          : "You've been unsubscribed from our newsletter.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update newsletter preference.",
        variant: "destructive",
      });
      setNewsletterOptIn(!checked); // Revert on error
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Account Information</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" value={user?.email || ''} disabled />
              <p className="text-sm text-gray-500 mt-1">
                Your email address is used for logging in and cannot be changed
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Communication Preferences</h3>
          <div className="flex items-center space-x-2">
            <Switch 
              id="newsletter" 
              checked={newsletterOptIn}
              onCheckedChange={handleNewsletterToggle}
            />
            <Label htmlFor="newsletter">Subscribe to newsletter and special offers</Label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            type="submit" 
            variant="yellow"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              'Save Changes'
            )}
          </Button>
          
          <Button 
            type="button" 
            variant="outline"
            onClick={() => signOut()}
          >
            Sign Out
          </Button>
        </div>
      </form>
    </Card>
  );
};
