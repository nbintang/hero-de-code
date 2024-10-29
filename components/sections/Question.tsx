import React from "react";
import { BlurFade } from "../ui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Question() {
  return (
    <div className="text-center container md:max-w-6xl mx-auto px-4 py-28">
      <div className="flex flex-col md:flex-row md:gap-5 items-center ">
        <div className="md:text-start">
          <p className="text-primary text-sm my-2">Questions</p>
          <BlurFade>
            <h1 className="text-3xl font-semibold lg:text-5xl text-start">
              Questions You Might Ask
            </h1>
          </BlurFade>
        </div>
        <BlurFade delay={0.2 * 3} inView className="text-muted-foreground mt-5  ">
          find common questions you might ask
        </BlurFade>
      </div>
      <div className="flex flex-col mx-auto md:flex-row md:gap-10 mt-5">
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is mental health?</AccordionTrigger>
              <AccordionContent className="text-start text-muted-foreground">
                Mental health refers to our emotional, psychological, and social
                well-being. It affects how we think, feel, and act, influencing
                how we handle stress, relate to others, and make choices. Good
                mental health helps us cope with life’s changes and challenges
                effectively.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What are some common mental health disorders?
              </AccordionTrigger>
              <AccordionContent className="text-start text-muted-foreground">
                Common mental health disorders include depression, anxiety
                disorders, bipolar disorder, schizophrenia, and post-traumatic
                stress disorder (PTSD). These conditions can vary in severity
                and impact people in different ways.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What are some signs of poor mental health?
              </AccordionTrigger>
              <AccordionContent className="text-start text-muted-foreground">
                Signs of poor mental health can include feeling sad or down most
                of the time, withdrawing from social activities, changes in
                sleep or appetite, low energy, extreme mood swings, or
                difficulty concentrating. If these symptoms last for a long
                time, it’s important to seek help.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How can I improve my mental health?
              </AccordionTrigger>
              <AccordionContent className="text-start text-muted-foreground">
                Improving mental health can involve practicing self-care, like
                getting enough sleep, eating nutritious foods, and exercising
                regularly. Talking to friends or family, practicing mindfulness,
                setting achievable goals, and seeking professional support can
                also be beneficial.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What should I do if I feel anxious or stressed?
              </AccordionTrigger>
              <AccordionContent className="text-start text-muted-foreground">
                Try deep breathing exercises, physical activities, or talking to
                someone you trust. Identifying what triggers your anxiety or
                stress and practicing mindfulness can also help. If these
                feelings persist, consider reaching out to a mental health
                professional.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                When should I seek help for mental health issues?
              </AccordionTrigger>
              <AccordionContent className="text-start text-muted-foreground">
                If feelings of sadness, anxiety, or stress become overwhelming
                or interfere with daily life, relationships, or work, it may be
                time to seek help. Professional support can provide strategies
                to cope and address underlying issues.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
