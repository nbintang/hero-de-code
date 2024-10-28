import { fetchPhoto } from "./getPhoto";

export default async function createData() {
  const data = [
    {
      img: await fetchPhoto("tB5ZZtHZ_tI"),
      name: "Sam Sulek",
      speciality: "CEO & Psychologist",
    },
    {
      img: await fetchPhoto("ezgW6z6oIvA"),
      name: "David Bjorka",
      speciality: "Child Psychology",
    },
    {
      img: await fetchPhoto("VVEwJJRRHgk"),
      name: "Januar Ghifari",
      speciality: "Behavioral Therapy",
    },
    {
      img: await fetchPhoto("NoRsyXmHGpI"),
      name: "Alexa Stjokovic",
      speciality: "Marriage and Family Therapy",
    },
    {
      img: await fetchPhoto("j5almO1E8rU"),
      name: "Mellisa",
      speciality: "Trauma Counseling",
    },
    {
      img: await fetchPhoto("or6mrFMVmHM"),
      name: "Qing Liu",
      speciality: "Cognitive Behavioral Therapy",
    },
    {
      img: await fetchPhoto("ge0OfJkVOxY"),
      name: "Blake Lively",
      speciality: "Addiction Counseling",
    },
    {
      img: await fetchPhoto("MwPZLyGaA88"),
      name: "Clara Marsya",
      speciality: "Anxiety and Depression Counseling",
    },
  ];

  return data;
}
