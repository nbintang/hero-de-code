import toast from "react-hot-toast";
import { sendEmail } from "@/data/nodemailer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
  message: z
    .string()
    .min(10, "Message must be at least 3 characters")
    .nonempty("Message is required"),
});
export default function useSendEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    const { name, email, message } = data;
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    setIsLoading(true);
    try {
      const response = await sendEmail({
        to: email,
        subject: "Feedback",
        text,
      });

      if (response?.messageId) {
        toast.success("Thank you for your feedback!");
      } else {
        toast.error("Failed to send feedback. Please try again later.");
      }
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        setIsLoading(false);
      }
    }
  });

  return {
    form,
    onSubmit,
    isLoading,
  };
}
