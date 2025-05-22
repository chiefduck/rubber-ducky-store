import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SuggestLocationForm from "@/components/modals/SuggestLocationForm";

const SuggestLocationFooterLink = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="text-black/70 hover:text-ducky-red px-0 text-sm"
        >
          Suggest Location
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <SuggestLocationForm />
      </DialogContent>
    </Dialog>
  );
};

export default SuggestLocationFooterLink;