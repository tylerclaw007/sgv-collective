export type Event = {
  slug: string;
  title: string;
  tagline: string;
  date: string;
  time: string;
  iso: string;
  location: string;
  description: string;
  rsvpUrl?: string;
  image: string;
  featured?: boolean;
  category: "Everything Night" | "Worship Night" | "Backyard" | "Summer";
};

export const events: Event[] = [
  {
    slug: "everything-night-may-2026",
    title: "Everything Night",
    tagline: "Everything for everyone.",
    date: "Sunday, May 24",
    time: "3:30 PM",
    iso: "2026-05-24T15:30:00-07:00",
    location: "Pasadena High School",
    description:
      "Worship, dinner, dodgeball, and a real conversation about Jesus. Bring a friend.",
    rsvpUrl: "https://partiful.com/",
    image: "/images/everything-night-main.jpg",
    featured: true,
    category: "Everything Night",
  },
  {
    slug: "worship-night-summer",
    title: "Summer Worship Night",
    tagline: "One night, one valley, one voice.",
    date: "TBA",
    time: "Evening",
    iso: "",
    location: "Hosted by a partner church",
    description:
      "A regional worship gathering for every club in the collective.",
    image: "/images/everything-night-band.jpg",
    category: "Worship Night",
  },
  {
    slug: "backyard-summer",
    title: "Backyard Summer Hangs",
    tagline: "Smaller. Slower. Still good.",
    date: "Throughout summer",
    time: "Evenings",
    iso: "",
    location: "Various host homes",
    description:
      "Casual hangs across the SGV: food, games, prayer, real talk.",
    image: "/images/everything-night-picnic.jpg",
    category: "Backyard",
  },
];

export const featuredEvent = events.find((e) => e.featured) ?? events[0];
