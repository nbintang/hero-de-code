import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Facebook, Twitter } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
const AvatarPersonCard = (props: {
  img: string;
  name: string;
  speciality: string;
}) => {
  return (
    <Card className="flex flex-col items-center  mx-4">
      <CardHeader>
        <Avatar className="w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30 md:w-30 lg:w-40 lg:h-40">
          <AvatarImage src={props.img} alt="person" className="object-cover" />
          <AvatarFallback delayMs={600}>SC</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="space-y-1 text-center">
        <CardTitle className="text-lg lg:text-xl">{props.name}</CardTitle>
        <p className="text-xs text-muted-foreground">{props.speciality}</p>
        <CardFooter className="flex gap-2 flex-col">
          <Separator
            orientation="horizontal"
            className="bg-muted-foreground  my-1"
          />
          <div className="flex">
            <div className="p-1 bg-black rounded-full">
              <Facebook className="text-white w-3 h-3" />
            </div>
            <Separator
              orientation="vertical"
              className="bg-muted-foreground  mx-1"
            />
            <div className="p-1 bg-black rounded-full">
              <Linkedin className="text-white w-3 h-3" />
            </div>

            <Separator
              orientation="vertical"
              className="bg-muted-foreground  mx-1"
            />
            <div className="p-1 bg-black rounded-full">
              <Twitter className="text-white w-3 h-3" />
            </div>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default AvatarPersonCard;
