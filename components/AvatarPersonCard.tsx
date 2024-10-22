import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
const AvatarPersonCard = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar className="w-40 h-40">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback delayMs={600}>SC</AvatarFallback>
      </Avatar>
      <div className="space-y-1 text-center">
        <h4 className="text-xl">Dr. John Doe, PhD</h4>
        <p className="text-sm">Board-Certified Psychiatrist</p>
      </div>
      <div className="flex gap-4">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="p-2 bg-black rounded-full">
            <Linkedin className="text-white w-3 h-3" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarPersonCard;
