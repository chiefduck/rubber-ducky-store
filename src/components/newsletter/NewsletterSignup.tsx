
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { NewsletterSubmitProps, SubmissionState } from "./types";
import { Check } from "lucide-react";

export const NewsletterSignup = ({ source = 'footer' }: { source?: NewsletterSubmitProps['source'] }) => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<SubmissionState>({
    isLoading: false,
    isSuccess: false
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ isLoading: true, isSuccess: false });

    try {
      // Simulate API call - replace with actual API integration later
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setState({ isLoading: false, isSuccess: true });
      setEmail("");
      
      toast({
        title: "Successfully subscribed! 🎉",
        description: "Welcome to our newsletter. Check your inbox soon!",
        duration: 3000,
      });

      // Reset success state after delay
      setTimeout(() => setState(prev => ({ ...prev, isSuccess: false })), 3000);
    } catch (error) {
      setState({ isLoading: false, isSuccess: false, error: "Failed to subscribe" });
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${state.isSuccess ? "pr-10" : ""} transition-all`}
          disabled={state.isLoading}
          required
        />
        {state.isSuccess && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Check className="h-5 w-5 text-green-500" />
          </div>
        )}
      </div>
      <Button 
        type="submit" 
        variant="yellow"
        disabled={state.isLoading || state.isSuccess}
        className="min-w-[100px]"
      >
        {state.isLoading ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
};
