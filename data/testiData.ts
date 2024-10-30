import { fetchPhoto } from "./getPhoto";

export default async function dataTestimonial() {
  const testimonials = [
    {
      id: "nSBl2cfwnmE",
      author: "Fauzan",
      quote: "This service changed my life! I feel more empowered and supported every day.",
      role: "Patient",
    },
    {
      id: "BI91NrppE38",
      author: "Adit",
      quote: "A safe space where I found understanding and tools for real change.",
      role: "Patient",
    },
    {
      id: "CjMhwsnG8D4",
      author: "Bintang",
      quote: "The guidance and compassion here are unmatched. Truly grateful!",
      role: "Patient",
    },
    {
      id: "RGKdWJOUFH0",
      author: "Lisa",
      quote: "I never felt judged, only supported. My mental health has improved so much!",
      role: "Patient",
    },
    {
      id: "o5NBw8GTnMc",
      author: "Clara",
      quote: "Insightful and comforting sessions that help me feel in control of my mental well-being.",
      role: "Patient",
    },
    {
      id: "dp3CS405UZM",
      author: "Ratu",
      quote: "Their approach is caring and professional. I felt heard and understood.",
      role: "Patient",
    },
    {
      id: "ZGQKW-nIW8o",
      author: "Elizabeth",
      quote: "Thanks to this service, I've regained clarity and peace in my life.",
      role: "Patient",
    },
  ];

  // Fetch photos concurrently using Promise.all
  const photos = await Promise.all(
    testimonials.map(testimonial => fetchPhoto(testimonial.id))
  );

  // Combine fetched photos with testimonials
  const data = testimonials.map((testimonial, index) => ({
    img: photos[index],
    author: testimonial.author,
    quote: testimonial.quote,
    role: testimonial.role,
  }));

  return data;
}