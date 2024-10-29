import { fetchPhoto } from "./getPhoto";
export interface AboutItem {
  img: string; // Assuming `fetchPhoto` returns a URL string or similar
  title: string;
  description: string;
}

const dataAbout = async (): Promise<AboutItem[]> => {
  const images = [
    await fetchPhoto("Q_Sei-TqSlc"), // team photo
    await fetchPhoto("7FC-84Ap_IU"), // kids photo
    await fetchPhoto("5iSoOqtgTBQ"), // adults hanging out
    await fetchPhoto("zwzSESZXb6M"), // parent playing with kids
  ];
  return images.map((img, index) => {
    const titles = [
      "Our Dedicated Team",
      "Programs for Children",
      "Community for Adults",
      "Family Bonding Activities",
    ];
    const descriptions = [
      "Our team at HeartCare consists of compassionate and highly-trained professionals dedicated to supporting mental health for all ages. Each team member brings unique expertise, ranging from child psychology to adult therapy, ensuring that we address the diverse needs of our community with understanding and care.",

      "Our specialized programs for children provide a safe, nurturing environment where they can express themselves, learn valuable emotional skills, and gain resilience. Through playful therapy sessions and interactive activities, we support children in building a strong mental health foundation for the future.",

      "HeartCare offers a supportive space for adults to connect, share, and grow. Our adult programs are designed to help individuals cope with everyday stress, anxiety, and emotional challenges through personalized guidance, peer group sessions, and therapeutic techniques tailored to personal needs.",

      "We believe in strengthening family connections and offer guidance for parents on building positive and nurturing relationships with their children. Our workshops and family counseling sessions empower parents with effective strategies for communication, empathy, and understanding, fostering healthy family dynamics.",
    ];
    return {
      img,
      title: titles[index],
      description: descriptions[index],
    };
  });
};

export default dataAbout;
