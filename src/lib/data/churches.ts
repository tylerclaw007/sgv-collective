export type Church = {
  name: string;
  pastor?: string;
  pastors?: string[];
  city?: string;
  support: string;
  url?: string;
  blurb?: string;
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
  url?: string;
  blurb?: string;
};

export const churches: Church[] = [
  {
    name: "Epicenter",
    pastor: "Pastor Josh Patingo",
    city: "Pasadena, CA",
    support: "Partner church and pastoral guidance team.",
    url: "https://epicentre.org",
    blurb:
      "A multi-ethnic, intergenerational family church in Pasadena. Sundays at 10 AM.",
  },
  {
    name: "Seeds of Life Church",
    pastor: "Pastor Kenny Yee",
    city: "Alhambra, CA",
    support: "Partner church walking with the collective.",
    url: "https://seedsoflife.org",
    blurb:
      "A multi-generational family of believers in the San Gabriel Valley.",
  },
  {
    name: "Frontier Church",
    pastor: "Pastor Abraham",
    city: "Pasadena, CA",
    support: "Partner church standing with our student leaders.",
    url: "https://frontierchurch.us",
    blurb: "A Pasadena church carrying the gospel into the next generation.",
  },
  {
    name: "Vintage Pasadena Church",
    pastor: "Pastor Christian Franklin",
    city: "Pasadena, CA",
    support: "Partner church serving the SGV alongside us.",
    url: "https://vintagepasadena.com",
    blurb: "Heart-of-Pasadena church. Sundays at 9 and 11 AM.",
  },
  {
    name: "Christian Assembly Eagle Rock",
    pastors: ["Pastor Levi Walker", "Pastor Jimmy Chacon"],
    city: "Eagle Rock, Los Angeles",
    support: "Partner church supporting the collective.",
    url: "https://cachurch.com",
    blurb: "Eagle Rock church living out grace, worship, family, and Kingdom.",
  },
  {
    name: "Exodus Fellowship",
    pastor: "Youth Leader Teresa Ko",
    support: "Partner church walking with the collective.",
    blurb: "A youth fellowship walking closely with the collective.",
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
    name: "Youth Leader Teresa Ko",
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
    url: "https://circuitriders.com",
    blurb:
      "A missions movement of young people pursuing Jesus. A YWAM ministry.",
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
