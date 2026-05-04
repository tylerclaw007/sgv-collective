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
  category: "Everything Night" | "Worship Night" | "Summer";
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
    rsvpUrl: "https://partiful.com/e/gy3BajXzxlnGA6VuPei2?c=Pgd2dAsW",
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
    slug: "homeward-worship-night-march-2026",
    title: "Homeward Worship Night",
    tagline:
      "The process of heading home and drawing near to God after we have drawn away.",
    date: "Friday, March 20, 2026",
    time: "5:30 PM - 9:00 PM",
    iso: "2026-03-20T17:30:00-07:00",
    location: "CA Students North Sanctuary",
    description:
      'This night was such a blessing. Thank you to everyone who came and helped make this night possible. Thank you Pastor Josh Patingo for your amazing sermon, and thank you CA Church LA for letting us use your space. "Home is where you can drop off your bags to experience freedom, identity, and relationship." Built around the Parable of the Lost Son (Luke 15:1-7) and James 4:8: "Come near to God and he will come near to you."',
    image: "/images/everything-night-band.jpg",
    category: "Worship Night",
  },
  {
    slug: "salt-and-light-worship-night-december-2025",
    title: "Salt & Light Worship Night",
    tagline: "You are the salt of the earth. You are the light of the world.",
    date: "Friday, December 19, 2025",
    time: "5:30 PM - 8:30 PM",
    iso: "2025-12-19T17:30:00-08:00",
    location: "Arcadia Chinese Church",
    description:
      "Worship Night was such an incredible night. Thank you to everyone who helped out with planning, setting up, leading us in worship, praying for this night and even showing up. Big shout out to our wonderful Pastor Jimmy Chacon for the sermon on Salt & Light, and thanks to Epicentre Radiant for letting us use your space. Built around Matthew 5:13-16, with lanterns, fake snow, and tables set for fellowship.",
    image: "/images/everything-night-band.jpg",
    category: "Worship Night",
  },
  {
    slug: "chosen-worship-night-april-2025",
    title: "Chosen Worship Night",
    tagline: "Through Christ, we are chosen.",
    date: "Saturday, April 12, 2025",
    time: "6:30 PM",
    iso: "2025-04-12T18:30:00-07:00",
    location:
      "Arcadia Chinese Baptist Church, 100 W Duarte Rd, Arcadia, CA 91007",
    description:
      "Last year's annual SGV worship night, Chosen. As we get caught up in the desires of the world, we paused to remember that God CHOSE us and He LOVES us. A night of praising Him together with a meal, games, worship, and prayer at Arcadia Chinese Baptist Church.",
    image: "/images/chosen-dab.jpg",
    category: "Worship Night",
  },
];

export const featuredEvent = events.find((e) => e.featured) ?? events[0];
