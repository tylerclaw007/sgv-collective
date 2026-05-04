export type Leader = {
  name: string;
  role: string;
  era: "current" | "past";
  blurb: string;
  events?: string[];
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
    events: ["Homeward Worship Night"],
  },
  {
    name: "Anna Chen",
    role: "Worship Co-Lead",
    era: "current",
    blurb:
      "Has helped lead worship across multiple collective nights, from Everything Night to Salt & Light.",
    events: ["Everything Night Worship Team", "Salt & Light Worship Night"],
  },
  {
    name: "Lucas Lau",
    role: "Worship Co-Lead",
    era: "current",
    blurb: "Helps build out the worship team for collective gatherings.",
    events: ["Salt & Light Worship Night"],
  },
  {
    name: "Sydney Li",
    role: "Worship Co-Lead",
    era: "current",
    blurb: "Has co-led worship at multiple collective nights across the year.",
    events: ["Salt & Light Worship Night", "All In Worship Night"],
  },
  {
    name: "Cohen Lim",
    role: "Worship Co-Lead",
    era: "current",
    blurb: "Co-led worship for the March Homeward Worship Night.",
    events: ["Homeward Worship Night"],
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
    events: ["Everything Night Worship Team"],
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
