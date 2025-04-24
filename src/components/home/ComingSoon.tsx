import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const ComingSoon = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-ducky-yellow text-center">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-ducky-red mb-4">
          🔥 Coming Soon: Watermelon Jalapeño
        </h2>
        <p className="text-black/80 text-lg mb-8">
          Launching June 2025 — Be the first to know when it drops.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: hook up to newsletter service (e.g. Mailchimp, ConvertKit)
            alert("You're on the list!");
          }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Your email address"
            required
            className="px-4 py-3 w-full md:w-auto rounded-full border border-ducky-red focus:outline-none focus:ring-2 focus:ring-ducky-red"
          />
          <Button type="submit" variant="red" className="rounded-full px-6">
            <Mail className="w-4 h-4 mr-2" />
            Notify Me
          </Button>
        </form>
      </div>
    </section>
  );
};
