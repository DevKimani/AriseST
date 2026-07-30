export interface Program {
  slug: string;
  name: string;
  icon: "heart" | "book" | "people" | "coin";
  intro: string;
  heading1: string; list1: string[];
  heading2: string; list2: string[];
  who: string;
  outcomes: { n: string; l: string }[];
}

export const programs: Program[] = [
  {
    slug: "gbv",
    name: "Gender-Based Violence Response",
    icon: "heart",
    intro: "Confidential, survivor-led support for anyone affected by gender-based violence — at the pace they choose.",
    heading1: "Objectives",
    list1: [
      "Ensure survivors can access safe, confidential support without fear or judgment",
      "Support emotional recovery and restore a sense of control",
      "Connect survivors to the legal, health, and shelter services they need",
      "Reduce the isolation that keeps survivors from seeking help",
    ],
    heading2: "Activities",
    list2: [
      "Confidential helpline and one-to-one support",
      "Safety planning and risk assessment",
      "Accompaniment and referral to [legal aid, health facilities, safe houses]",
      "Counselling and peer support groups",
      "Follow-up support through healing and recovery",
    ],
    who: "[Describe who the programme serves — e.g. women, girls, and all survivors of GBV in [area], regardless of background.]",
    outcomes: [
      { n: "[X]", l: "survivors supported to safety" },
      { n: "[X]%", l: "report feeling more in control" },
      { n: "[X]", l: "referrals to partner services" },
    ],
  },
  {
    slug: "capacity-building",
    name: "Capacity Building",
    icon: "book",
    intro: "Lasting change needs knowledge and skills spread widely — not held by a few.",
    heading1: "Training areas",
    list1: [
      "Understanding gender-based violence and survivors’ rights",
      "Safe identification and referral of survivors",
      "Psychological first aid and survivor-centred support",
      "Community awareness and prevention",
      "[Any others specific to your work]",
    ],
    heading2: "What participants gain",
    list2: [
      "Confidence to recognise and respond to GBV safely",
      "Practical referral skills and knowledge of services",
      "A network of trained peers in the community",
    ],
    who: "[e.g. survivors, community health volunteers, teachers, faith and community leaders, and local responders in [area].]",
    outcomes: [
      { n: "[X]", l: "people trained" },
      { n: "[X]", l: "active community volunteers" },
      { n: "[X]", l: "partner institutions reached" },
    ],
  },
  {
    slug: "community-advocacy",
    name: "Community Advocacy",
    icon: "people",
    intro: "We work to stop violence before it starts — partnering with communities to change attitudes, norms, and gaps in protection.",
    heading1: "Advocacy focus areas",
    list1: [
      "Changing harmful gender norms and attitudes",
      "Promoting survivors’ rights and access to justice",
      "Strengthening local protection systems and referral pathways",
      "[Policy or duty-bearer engagement, if applicable]",
    ],
    heading2: "Engagement activities",
    list2: [
      "Community dialogues and awareness campaigns",
      "Engaging men and boys as allies",
      "Working with schools, faith groups, and local leaders",
      "Public events and commemorations [e.g. 16 Days of Activism]",
    ],
    who: "Communities, local leaders, schools, faith groups, and partners across [area]. Partners: [list partners].",
    outcomes: [
      { n: "[X]", l: "people reached in campaigns" },
      { n: "[X]", l: "community dialogues held" },
      { n: "[X]", l: "partners engaged" },
    ],
  },
  {
    slug: "economic-empowerment",
    name: "Economic Empowerment",
    icon: "coin",
    intro: "Financial independence and safety go hand in hand. We help survivors gain the skills, resources, and confidence to stand on their own.",
    heading1: "What we offer",
    list1: [
      "Livelihood initiatives [savings groups, income-generating activities, grants]",
      "Vocational and technical skills [list trades]",
      "Financial literacy and money management",
      "Business and entrepreneurship skills",
    ],
    heading2: "Business support",
    list2: [
      "[Start-up kits / seed grants / mentorship / market linkages]",
      "Ongoing coaching as businesses grow",
      "Peer networks of survivor entrepreneurs",
    ],
    who: "Survivors ready to build independent livelihoods, in [area].",
    outcomes: [
      { n: "[X]", l: "supported into work or enterprise" },
      { n: "[X]", l: "businesses started" },
      { n: "[X]%", l: "reporting increased income" },
    ],
  },
];

export const getProgram = (slug?: string) => programs.find((p) => p.slug === slug);
