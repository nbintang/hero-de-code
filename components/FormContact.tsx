"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import useSendEmail from "@/hooks/useSendEmail";
import { LoaderCircleIcon } from "lucide-react";
import { useActionFloatButtonContext } from "@/context/useActionFloatButtonContext";

export default function FormEmail(props: React.ComponentProps<"form">) {
  const { form, onSubmit, isLoading, handleNumberChange } = useSendEmail();
  const { setIsDrawerOpen } = useActionFloatButtonContext();

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8 mx-3" {...props}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your number"
                  {...field}
                  onChange={(e) => {
                    handleNumberChange(e);
                    field.onChange(e); // retain form handling
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-4">
          <Button
            type="submit"
            className="w-full py-2 text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <LoaderCircleIcon className="animate-spin " />
                <p className="ml-2">Loading...</p>
              </>
            ) : (
              "Submit"
            )}
          </Button>
          <Button
            variant="outline"
            className="w-full py-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
