
import { Card } from "@/components/ui/card";
import { Package } from "lucide-react";

export const AccountSubscriptions = () => {
  return (
    <Card className="p-6">
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Package className="h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold mb-2">No Active Subscriptions</h3>
        <p className="text-sm text-gray-500">
          Subscribe to your favorite drinks and save with regular deliveries.
        </p>
      </div>
    </Card>
  );
};
