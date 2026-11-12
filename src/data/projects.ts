export type Project = {
  slug: string;
  name: string;
  tagline: string;
  images: string[];
  overview: string;
  problem: string;
  contribution: string;
  tech: string[];
  features: string[];
  github?: string;
  live?: string;
  status: "complete" | "in-progress" | "academic";
};

export const projects: Project[] = [
  {
    slug: "smart-iubat-bus",
    name: "Smart IUBAT Bus Tracking",
    tagline: "IoT + Computer Vision campus transportation",
    images: [
      "/assets/projects/bus_1.png",
      "/assets/projects/bus_2.png",
      "/assets/projects/bus_3.png",
      "/assets/projects/bus_4.png",
      "/assets/projects/bus_5.png",
      "/assets/projects/bus_6.png",
      "/assets/projects/bus_7.png"
    ],
    overview: "An IoT-based university transportation system for monitoring bus locations and passenger counts.",
    problem: "Students wait without knowing bus locations; the university lacks real-time passenger data.",
    contribution: "Designed the IoT architecture, integrated NEO-6M GPS, ESP32-CAM, SIM800L, YOLO-based passenger counting, and built the web dashboard.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Python", "YOLO", "ESP32-CAM", "NEO-6M GPS", "SIM800L"],
    features: [
      "Real-time GPS tracking",
      "YOLO-based passenger counting",
      "Student & faculty dashboards",
      "Administrator dashboard",
      "Mobile internet with Wi-Fi fallback"
    ],
    github: "https://github.com/RHSrabon14/Smart-IUBAT-Bus-Tracking",
    status: "in-progress",
  },
  {
    slug: "eldersafe",
    name: "ElderSafe — IoT Elder Monitoring",
    tagline: "Healthcare & safety IoT",
    images: [
      "/assets/projects/eldersafe1.jpeg",
      "/assets/projects/eldersafe2.jpeg",
      "/assets/projects/eldersafe3.jpeg",
      "/assets/projects/eldersafe4.jpeg",
      "/assets/projects/eldersafe5.jpeg",
      "/assets/projects/eldersafe6.jpeg",
      "/assets/projects/eldersafe7.jpeg"
    ],
    overview: "IoT safety system monitoring elderly people living alone with health sensors, fall detection, and alerts.",
    problem: "Elderly individuals living alone are at risk of unnoticed falls and health emergencies.",
    contribution: "Integrated MAX30102, MPU6050, MC-38 sensors with a FastAPI backend and a live dashboard, and designed the alert pipeline.",
    tech: ["ESP32", "MAX30102", "MPU6050", "MC-38", "FastAPI", "React"],
    features: [
      "Heart rate & SpO₂ monitoring",
      "Fall detection",
      "Washroom duration alerts",
      "Relative notification system",
      "Live monitoring dashboard"
    ],
    status: "in-progress",
  }
];