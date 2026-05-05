export type Church = {
  name: string;
  pastor?: string;
  pastors?: string[];
  city?: string;
  support: string;
};

export type PastoralGuide = {
  name: string;
  pastor: string;
  church: string;
  role: string;
};

export type Affiliate = {
  name: string;
  description: string;
};

export const churches: Church[] = [
  {
    name: "Epicenter",
    pastor: "Pastor Josh Patingo",
    support: "Partner church and pastoral guidance team.",
  },
  {
    name: "Seeds of Life Church",
    pastor: "Pastor Kenny Yee",
    support: "Partner church walking with the collective.",
  },
  {
    name: "Frontier Church",
    pastor: "Pastor Abraham",
    support: "Partner church standing with our student leaders.",
  },
  {
    name: "Vintage Pasadena Church",
    pastor: "Pastor Christian Franklin",
    support: "Partner church serving the SGV alongside us.",
  },
  {
    name: "Christian Assembly Eagle Rock",
    pastors: ["Pastor Levi Walker", "Pastor Jimmy Chacon"],
    support: "Partner church supporting the collective.",
  },
  {
    name: "Exodus Fellowship",
    pastor: "Pastor Teresa Ko",
    support: "Partner church walking with the collective.",
  },
];

export const pastoralGuidance: PastoralGuide[] = [
  {
    name: "Pastor Josh Patingo",
    pastor: "Pastor Josh Patingo",
    church: "Epicenter",
    role: "Pastoral guidance and partnership",
  },
  {
    name: "Pastor Kenny Yee",
    pastor: "Pastor Kenny Yee",
    church: "Seeds of Life Church",
    role: "Pastoral guidance for the collective",
  },
  {
    name: "Pastor Abraham",
    pastor: "Pastor Abraham",
    church: "Frontier Church",
    role: "Pastoral guidance for the collective",
  },
  {
    name: "Pastor Christian Franklin",
    pastor: "Pastor Christian Franklin",
    church: "Vintage Pasadena Church",
    role: "Pastoral guidance for the collective",
  },
  {
    name: "Pastor Levi Walker",
    pastor: "Pastor Levi Walker",
    church: "Christian Assembly Eagle Rock",
    role: "Pastoral guidance for the collective",
  },
  {
    name: "Pastor Jimmy Chacon",
    pastor: "Pastor Jimmy Chacon",
    church: "Christian Assembly Eagle Rock",
    role: "Pastoral guidance for the collective",
  },
  {
    name: "Pastor Teresa Ko",
    pastor: "Youth Leader Teresa Ko",
    church: "Exodus Fellowship",
    role: "Pastoral guidance for the collective",
  },
];

export const affiliates: Affiliate[] = [
  {
    name: "Circuit Riders",
    description:
      "Youth outreach organization that comes alongside the collective. Not a church, but a trusted ministry partner.",
  },
];

export const supportTypes = [
  {
    title: "Funding events",
    description:
      "Covering venues, food, sound, and lighting for Everything Night.",
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
