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
    name: "Cohen",
    role: "President",
    era: "current",
    blurb: "Events, logistics, and making sure Everything Night actually happens.",
  },
  {
    name: "Elise",
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
    name: "Rihanna",
    role: "Co-Lead",
    era: "past",
    blurb: "Helped grow the collective from a few clubs to a regional movement.",
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
    description: "Newsletters, social, and getting the word out across schools.",
  },
  {
    title: "Partnerships",
    description: "Working with churches, sponsors, and venue hosts.",
  },
];
