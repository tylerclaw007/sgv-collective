// Club cutout variants. Edit per-club copy here.
// Short URL `/ns` is configured in next.config.ts as a redirect to /next-steps.

export const NEXT_STEPS_PATH = "/next-steps";
export const SHORT_URL_DISPLAY = "sgvc.cc/ns";
export const QR_TARGET_URL = "https://sgvc.cc/ns";

export type ClubType = "student" | "service" | "youth";

export type CutoutContent = {
  type: ClubType;
  label: string;
  eyebrow: string;
  headline: string;
  body: string;
  cta: string;
  audienceTagline: string;
};

export const cutouts: Record<ClubType, CutoutContent> = {
  student: {
    type: "student",
    label: "Student club",
    eyebrow: "Hey, friend",
    headline: "Curious about Jesus?",
    body: "Start here. One page, seven days, your phone.",
    cta: "Scan or type the link",
    audienceTagline: "For high school student-led clubs.",
  },
  service: {
    type: "service",
    label: "Service pod",
    eyebrow: "Hey, neighbor",
    headline: "Jesus loved you first.",
    body: "If today moved you, take the next step. We will walk with you.",
    cta: "Scan or type the link",
    audienceTagline: "For community service and outreach pods.",
  },
  youth: {
    type: "youth",
    label: "Youth fellowship",
    eyebrow: "Welcome in",
    headline: "Following Jesus, day one.",
    body: "Verses, prayers, real steps. Made for new believers your age.",
    cta: "Scan or type the link",
    audienceTagline: "For youth groups and church fellowships.",
  },
};

export const clubTypes: ClubType[] = ["student", "service", "youth"];
