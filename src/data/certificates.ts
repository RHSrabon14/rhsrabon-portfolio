export type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  verifyUrl?: string;
  pdfUrl: string; 
};

export const certificates: Certificate[] = [
  { title: "CCNA: Introduction to Networks", issuer: "Cisco", pdfUrl: "/assets/certificates/ccna1.pdf" },
  { title: "CCNA: Switching, Routing & Wireless Essentials", issuer: "Cisco", pdfUrl: "/assets/certificates/ccna2.pdf" },
  { title: "CCNA: Enterprise Networking, Security & Automation", issuer: "Cisco", pdfUrl: "/assets/certificates/ccna3.pdf" },
  { title: "Python for Data Science, AI & Development", issuer: "IBM (Coursera)", pdfUrl: "/assets/certificates/ibm_python.pdf" },
  { title: "Intro to Data Science", issuer: "IBM (Coursera)", pdfUrl: "/assets/certificates/intro_data_science.pdf" },
  { title: "AI-Powered Communication", issuer: "Grameenphone Academy", pdfUrl: "/assets/certificates/ai_communication.pdf" },
  { title: "MERN Full Stack Development", issuer: "Grameenphone Academy", pdfUrl: "/assets/certificates/mern_stack.pdf" },
  { title: "Web Application Development with Python", issuer: "NSDA", pdfUrl: "/assets/certificates/nsda_python.pdf" },
];