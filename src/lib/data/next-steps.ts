// Content for /next-steps. Edit copy and plan URLs here.

// Welcome video shown right under the hero. Drop a YouTube video ID (the
// 11-char string after `v=` in the URL) into `youtubeId` to go live.
export const welcomeVideo: { youtubeId: string | null; title: string } = {
  youtubeId: null,
  title: "Welcome to your next step",
};

export type FoundationCard = {
  title: string;
  body: string;
};

export const foundations: FoundationCard[] = [
  {
    title: "What just happened",
    body: "You said yes to Jesus. That is the start of being known by God and walking with Him. Not a religion to perform. A friendship to live.",
  },
  {
    title: "Why Jesus",
    body: "Because He is real. He lived, He died, and He rose. Everything He said about Himself stands or falls on that. We believe it stands.",
  },
  {
    title: "What changes now",
    body: "You are not on your own. You are loved, you are forgiven, and you have a Father. The next steps are small and worth taking every day.",
  },
];

export type BiblePlan = {
  id: string;
  title: string;
  length: string;
  body: string;
  href: string;
};

// YouVersion / bible.com universal links (open in the app on mobile).
export const biblePlans: BiblePlan[] = [
  {
    id: "john",
    title: "The Gospel of John",
    length: "21 days",
    body: "The clearest place to meet Jesus for the first time. Read one short chapter a day.",
    href: "https://www.bible.com/bible/111/JHN.1.NIV",
  },
  {
    id: "brand-new",
    title: "Brand New",
    length: "7 days",
    body: "A starter plan for new believers. Short readings, big ideas, easy to finish.",
    href: "https://www.bible.com/reading-plans/2340-brand-new",
  },
  {
    id: "one-year",
    title: "Bible in One Year",
    length: "365 days",
    body: "When you are ready for the long view. The whole story, one bite at a time.",
    href: "https://www.bible.com/reading-plans/1-bible-in-one-year",
  },
];

export const bibleAppLinks = {
  iOS: "https://apps.apple.com/app/bible/id282935706",
  android:
    "https://play.google.com/store/apps/details?id=com.sirma.mobile.bible.android",
  web: "https://www.bible.com/app",
};

export type DayGuide = {
  day: number;
  title: string;
  verse: string;
  reference: string;
  prayer: string;
  action: string;
};

export const sevenDays: DayGuide[] = [
  {
    day: 1,
    title: "Hello, Father",
    verse:
      "See what great love the Father has lavished on us, that we should be called children of God. And that is what we are.",
    reference: "1 John 3:1",
    prayer:
      "Father, thank You for calling me Yours. Help me believe that today.",
    action: "Open the Bible app and start the Gospel of John plan.",
  },
  {
    day: 2,
    title: "He hears you",
    verse:
      "Call to me and I will answer you and tell you great and unsearchable things you do not know.",
    reference: "Jeremiah 33:3",
    prayer:
      "Jesus, I am still figuring out how to pray. Teach me. I am listening.",
    action: "Pray out loud for 60 seconds, even if it feels awkward.",
  },
  {
    day: 3,
    title: "You are not alone",
    verse: "And surely I am with you always, to the very end of the age.",
    reference: "Matthew 28:20",
    prayer:
      "Jesus, when I feel alone today, remind me that You are right here.",
    action: "Text one Christian friend that you started following Jesus.",
  },
  {
    day: 4,
    title: "Forgiven and free",
    verse:
      "If we confess our sins, He is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
    reference: "1 John 1:9",
    prayer:
      "Father, I bring You the stuff I am ashamed of. Thank You for the cross.",
    action:
      "Write one thing you are sorry for, then thank Jesus for the cross.",
  },
  {
    day: 5,
    title: "Find your people",
    verse:
      "And let us consider how we may spur one another on toward love and good deeds.",
    reference: "Hebrews 10:24",
    prayer: "Father, give me real friends who follow You. Make me one of them.",
    action: "Find your campus on the Clubs page and plan to show up this week.",
  },
  {
    day: 6,
    title: "Tell someone",
    verse: "We cannot help speaking about what we have seen and heard.",
    reference: "Acts 4:20",
    prayer:
      "Jesus, give me one person to tell. Make me brave and kind, not weird.",
    action: "Share your story with one friend or family member, in your words.",
  },
  {
    day: 7,
    title: "Keep going",
    verse:
      "Being confident of this, that He who began a good work in you will carry it on to completion.",
    reference: "Philippians 1:6",
    prayer:
      "Father, You started this. Keep me walking with You tomorrow and the day after.",
    action: "Pick one habit (prayer, Bible, club) and commit to it for week 2.",
  },
];
