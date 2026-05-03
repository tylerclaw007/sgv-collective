export type Church = {
  name: string;
  city: string;
  support: string;
};

export const churches: Church[] = [
  {
    name: "Local SGV Partner Churches",
    city: "San Gabriel Valley",
    support:
      "Funding events, sending speakers, hosting worship nights, and praying for the schools.",
  },
];

export const supportTypes = [
  {
    title: "Funding events",
    description: "Covering venues, food, sound, and lighting for Everything Night.",
  },
  {
    title: "Speaking",
    description: "Pastors and youth leaders sharing the message at gatherings.",
  },
  {
    title: "Hosting worship nights",
    description: "Opening church spaces for regional worship gatherings.",
  },
  {
    title: "Mentoring leaders",
    description: "Walking with student leaders across the collective.",
  },
];
