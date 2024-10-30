import React from "react";
import { BlurFade } from "../ui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/faqData";

export default function Question() {
  return (
    <div
      className="text-center container md:max-w-6xl mx-auto px-4 py-28"
      id={"questions"}
    >
      <div className="lg:grid-cols-2 mx-3 md:mx-0 grid gap-4 items-center grid-cols-1">
        <div>
          <h5 className="text-primary text-sm text-center lg:text-start">
            FAQ{"'"}s
          </h5>
          <h2 className="text-2xl md:text-3xl font-semibold lg:text-5xl text-center lg:text-start">
            Most Commonly Asked Question{"'"}s
          </h2>
        </div>
        <p className="text-base ml-5 lg:text-lg text-muted-foreground text-center lg:text-start">
          Our Team understands the importance of mental health and can help you
          find the answers you need. Here are some frequently asked questions.
        </p>
      </div>

      <div className="flex flex-col mx-auto md:flex-row md:gap-10 mt-5">
        <div className="w-full md:w-1/2">
          <Accordion type="single" collapsible className="w-full">
            {faqData.slice(0, 7).map((item, index) => (
              <AccordionItem key={`left-${index}`} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-start">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-start text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="w-full md:w-1/2">
          <Accordion type="single" collapsible className="w-full">
            {faqData.slice(7).map((item, index) => (
              <AccordionItem key={`right-${index}`} value={`item-${index + 4}`}>
                <AccordionTrigger className="text-start">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-start text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
