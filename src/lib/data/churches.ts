export type Church = {
  name: string;
  pastor?: string;
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
    pastor: "Kenny Yi",
    support: "Partner church walking with the collective.",
  },
  {
    name: "Frontier",
    pastor: "Abraham",
    support: "Partner church standing with our student leaders.",
  },
  {
    name: "Vintage Pasadena Church",
    pastor: "Pastor Christian Franklin",
    support: "Partner church serving the SGV alongside us.",
  },
];

export const pastoralGuidance: PastoralGuide[] = [
  {
    name: "Epicenter",
    pastor: "Pastor Josh Patingo",
    church: "Epicenter",
    role: "Pastoral guidance and partnership",
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
