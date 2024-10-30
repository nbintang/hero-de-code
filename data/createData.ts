import { fetchPhoto } from "./getPhoto";

export default async function createData() {
  const dataDetails = [
    { id: "tB5ZZtHZ_tI", name: "Sam Sulek", speciality: "CEO & Psychologist" },
    { id: "ezgW6z6oIvA", name: "David Bjorka", speciality: "Child Psychology" },
    {
      id: "VVEwJJRRHgk",
      name: "Januar Ghifari",
      speciality: "Behavioral Therapy",
    },
    {
      id: "NoRsyXmHGpI",
      name: "Alexa Stjokovic",
      speciality: "Marriage and Family Therapy",
    },
    { id: "j5almO1E8rU", name: "Mellisa", speciality: "Trauma Counseling" },
    {
      id: "or6mrFMVmHM",
      name: "Qing Liu",
      speciality: "Cognitive Behavioral Therapy",
    },
    {
      id: "ge0OfJkVOxY",
      name: "Blake Lively",
      speciality: "Addiction Counseling",
    },
    {
      id: "MwPZLyGaA88",
      name: "Clara Marsya",
      speciality: "Anxiety and Depression Counseling",
    },
  ];

  const images = await Promise.all(
    dataDetails.map((item) => fetchPhoto(item.id))
  );

  const data = dataDetails.map((item, index) => ({
    img: images[index],
    name: item.name,
    speciality: item.speciality,
  }));

  return data;
}
