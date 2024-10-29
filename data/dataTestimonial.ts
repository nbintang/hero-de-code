import { fetchPhoto } from "./getPhoto";

export default async function dataTestimonial() {
  const data = [
    {
      img: await fetchPhoto("nSBl2cfwnmE"),
      author: "Fauzan",
      quote:
        "This service changed my life! I feel more empowered and supported every day.",
      role: "Patient",
    },
    {
      img: await fetchPhoto("BI91NrppE38"),
      author: "Adit",
      quote:
        "A safe space where I found understanding and tools for real change.",
      role: "Patient",
    },
    {
      img: await fetchPhoto("CjMhwsnG8D4"),
      author: "Bintang",
      quote: "The guidance and compassion here are unmatched. Truly grateful!",
      role: "Patient",
    },
    {
      img: await fetchPhoto("RGKdWJOUFH0"),
      author: "Lisa",
      quote:
        "I never felt judged, only supported. My mental health has improved so much!",
      role: "Patient",
    },
    {
      img: await fetchPhoto("o5NBw8GTnMc"),
      author: "Clara",
      quote:
        "Insightful and comforting sessions that help me feel in control of my mental well-being.",
      role: "Patient",
    },
    {
      img: await fetchPhoto("dp3CS405UZM"),
      author: "Ratu",
      quote:
        "Their approach is caring and professional. I felt heard and understood.",
      role: "Patient",
    },
    {
      img: await fetchPhoto("ZGQKW-nIW8o"),
      author: "Elizabeth",
      quote:
        "Thanks to this service, I've regained clarity and peace in my life.",
      role: "Patient",
    },
  ];

  return data;
}
