export type Leader = {
  name: string;
  role: string;
  era: "current" | "past";
  blurb: string;
};

export const leaders: Leader[] = [
  {
    name: "Tyler",
    role: "President",
    era: "current",
    blurb: "Leading the collective forward and keeping every campus connected.",
  },
  {
    name: "Colin",
    role: "President",
    era: "current",
    blurb:
      "Events, logistics, and making sure Everything Night actually happens.",
  },
  {
    name: "Elyse",
    role: "President",
    era: "current",
    blurb: "Communication and partnerships across schools and churches.",
  },
  {
    name: "Caleb Newton",
    role: "Founder",
    era: "past",
    blurb: "Started the collective. Set the tone: welcoming, never forceful.",
  },
  {
    name: "Rianna",
    role: "Co-Lead",
    era: "past",
    blurb:
      "Helped grow the collective from a few clubs to a regional movement.",
  },
  {
    name: "Anna Chen",
    role: "Co-Lead, Everything Night Worship Team",
    era: "past",
    blurb:
      "Co-led the Everything Night worship team alongside Rianna last year.",
  },
  {
    name: "Anna Chen",
    role: "Co-Lead, Salt & Light Worship Night",
    era: "past",
    blurb:
      "Co-led the December Salt & Light Worship Night with Lucas Lau and Sydney Li.",
  },
  {
    name: "Lucas Lau",
    role: "Co-Lead, Salt & Light Worship Night",
    era: "past",
    blurb:
      "Co-led the December Salt & Light Worship Night with Anna Chen and Sydney Li.",
  },
  {
    name: "Sydney Li",
    role: "Co-Lead, Salt & Light Worship Night",
    era: "past",
    blurb:
      "Co-led the December Salt & Light Worship Night with Anna Chen and Lucas Lau.",
  },
  {
    name: "Cohen Lim",
    role: "Worship Co-Lead, Homeward Worship Night",
    era: "past",
    blurb:
      "Co-led worship for the March Homeward Worship Night alongside Elyse Park.",
  },
  {
    name: "Elyse Park",
    role: "Worship Co-Lead, Homeward Worship Night",
    era: "past",
    blurb:
      "Co-led worship for the March Homeward Worship Night alongside Cohen Lim.",
  },
];

export const roles = [
  {
    title: "Coordination",
    description: "Keeping every club aligned on dates, themes, and logistics.",
  },
  {
    title: "Events",
    description: "Building Everything Night and worship gatherings end to end.",
  },
  {
    title: "Communication",
    description:
      "Newsletters, social, and getting the word out across schools.",
  },
  {
    title: "Partnerships",
    description: "Working with churches, sponsors, and venue hosts.",
  },
];
