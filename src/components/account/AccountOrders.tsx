
import { Card } from "@/components/ui/card";
import { PackageOpen } from "lucide-react";

export const AccountOrders = () => {
  return (
    <Card className="p-6">
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <PackageOpen className="h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold mb-2">No Orders Yet</h3>
        <p className="text-sm text-gray-500">
          Your order history will appear here once you make a purchase.
        </p>
      </div>
    </Card>
  );
};
