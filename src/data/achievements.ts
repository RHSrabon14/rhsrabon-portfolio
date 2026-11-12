export type Achievement = {
  title: string;
  organization: string;
  date: string;
  description: string;
  type: "award" | "academic" | "training" | "milestone" | "sports";
};

export const achievements: Achievement[] = [
  {
    title: "Clemon Indoor Cricket Tournament",
    organization: "Clemon",
    date: "2022 & 2026",
    description: "Participated in the Clemon Indoor Cricket Tournament. Developed strong teamwork, communication, and strategic thinking skills outside of academics.",
    type: "sports",
  },
  {
    title: "BCSE Undergraduate Student",
    organization: "IUBAT",
    date: "Present",
    description: "Pursuing a Bachelor of Computer Science and Engineering with a focus on software engineering, IoT, and networking.",
    type: "academic",
  },
  {
    title: "9 Professional Certifications",
    organization: "Cisco, IBM, NSDA, Grameenphone Academy",
    date: "2023 - Present",
    description: "Completed rigorous coursework in CCNA networking, Python data science, MERN stack, and web development.",
    type: "milestone",
  },
];