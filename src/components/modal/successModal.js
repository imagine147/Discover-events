'use client';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import SuccessLogo from "../../icons/Success Icon.png"
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";

export function SuccessModal({ isOpen, onClose, message = "Thank you for your message! We'll get back to you soon." }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90%] lg:w-[45%] xl:w-[35%] px-10 py-12 rounded-lg bg-white">
      
        <div className="flex flex-col items-center justify-center gap-4">
          <Image 
            src={SuccessLogo} 
            className="w-[80px]" 
            alt="success" 
            width={80}
            height={80}
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <DialogTitle className="font-bold text-xl text-[#0A162D]">Success!</DialogTitle>
            <DialogDescription className="text-center text-[#0A162D] ">
              {message}
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}