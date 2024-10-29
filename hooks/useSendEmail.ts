import toast from "react-hot-toast";
import { sendEmail } from "@/data/nodemailer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useActionFloatButtonContext } from "@/context/useActionFloatButtonContext";

const ContactSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 3 characters")
    .nonempty("Name is required"),
  email: z
    .string()
    .min(5, "Email must be at least 3 characters")
    .email("Invalid email")
    .nonempty("Email is required"),
  number: z.string().nonempty("Number is required"),
  message: z
    .string()
    .min(10, "Message must be at least 3 characters")
    .nonempty("Message is required"),
});

export default function useSendEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const { setIsDrawerOpen } = useActionFloatButtonContext();
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "+62-",
      message: "",
    },
  });

  const formatPhoneNumber = (value: string) => {
    // Automatically add hyphens after every 3 or 4 characters
    return value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Ensure the +62 prefix is retained
    const rawInput = e.target.value.replace("+62-", "");
    const formattedNumber = `+62-${formatPhoneNumber(rawInput)}`;
    form.setValue("number", formattedNumber);
  };

  const onSubmit = form.handleSubmit(async (data) => {
    const { name, email, message, number } = data;
    const text = `
        <div>
      <h1>${name}</h1>
      <br />
      <h3>${email}</h3>
      <br />
      <h3>${number}</h3>
      <br />
      <p>${message}</p>
    </div>`;
    setIsLoading(true);
    try {
      const response = await sendEmail({
        to: "fauzanbtz@gmail.com",
        subject: "Contact Form Submission",
        text,
      });

      if (response?.messageId) {
        toast.success(
          "Thank you for your Submission! We will get back to you shortly."
        );
      } else {
        toast.error("Failed to send Submission. Please try again later.");
      }

      setIsDrawerOpen(false);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);

      setIsDrawerOpen(false);
    }
  });

  return {
    form,
    handleNumberChange,
    onSubmit,
    isLoading,
  };
}
