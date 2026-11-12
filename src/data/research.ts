export type ResearchInterest = {
  title: string;
  description: string;
  icon: string; // We will use this to match an icon in the component
};

export type ResearchProject = {
  title: string;
  abstract: string;
  status: "ongoing" | "completed" | "planned";
  methodology?: string;
  supervisor?: string;
};

export const interests: ResearchInterest[] = [
  {
    title: "Human-Computer Interaction (HCI)",
    description: "Exploring how users interact with interfaces, especially in real-time dashboards and healthcare IoT systems.",
    icon: "users"
  },
  {
    title: "Artificial Intelligence & ML",
    description: "Applying computer vision (like YOLO) and machine learning models to solve real-world problems.",
    icon: "brain"
  },
  {
    title: "IoT & Smart Systems",
    description: "Designing connected systems that bridge hardware sensors with cloud backends for safety and automation.",
    icon: "cpu"
  },
  {
    title: "Cybersecurity & Networking",
    description: "Securing IoT devices and studying network infrastructure, routing, and secure data transmission.",
    icon: "shield"
  }
];

// Currently empty, but ready for you to add projects later!
export const researchProjects: ResearchProject[] = [];