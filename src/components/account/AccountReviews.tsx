
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

export const AccountReviews = () => {
  return (
    <Card className="p-6">
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <MessageSquare className="h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold mb-2">No Reviews Yet</h3>
        <p className="text-sm text-gray-500">
          Share your thoughts about our products with other customers.
        </p>
      </div>
    </Card>
  );
};
