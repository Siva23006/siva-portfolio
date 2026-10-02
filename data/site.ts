// Source of truth: Siva_B_Resume_Modern.pdf. Do not add facts that are not in the resume.
export const site = {
  name: "Siva", url: "https://siva-b.vercel.app", email: "sivababu796@gmail.com",
  github: "https://github.com/Siva23006", linkedin: "https://linkedin.com/in/siva-babu-b24578332",
  resume: "/Siva_B_Resume.pdf",
  description: "Siva is a B.Tech Computer Science Engineering student specializing in Data Science & AI, with hands-on software and ISP networking experience in Chennai, India.",
};
export const nav = ["about", "expertise", "work", "experience", "contact"];
export const expertise = [
  { label: "Vibe Coding", note: "How I build most of my software", items: ["AI-Assisted Development", "Rapid Prototyping", "Testing & Iteration"] },
  { label: "Programming", items: ["Python", "Java", "Dart", "JavaScript", "SQL"] },
  { label: "AI & Computer Vision", items: ["OpenCV", "Face Detection", "Face Recognition", "Machine Learning"] },
  { label: "Application Development", items: ["Flutter", "Node.js", "Express.js", "REST APIs"] },
  { label: "Databases", items: ["PostgreSQL", "SQLite"] },
  { label: "Networking", items: ["CCNA", "FTTH", "EPON", "GPON", "OLT", "ONT", "Fiber Optics", "TCP/IP"] },
  { label: "Web Development", items: ["HTML", "CSS", "JavaScript"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
];
export const projects = [
  { no: "01", name: "NexiNet", category: "ISP Management App", variant: "app",
    tech: ["Flutter", "Node.js", "Express.js", "PostgreSQL", "JWT"], stats: ["150+ customer records"],
    desc: "A Flutter admin app for ISP maintenance and customer maintenance: customers, plans and administrators managed in one place, designed around real-world ISP management requirements.",
    features: ["Customer management", "Plan management", "Administrator management", "Flutter admin application", "Node.js/Express backend", "PostgreSQL database", "JWT authentication", "bcrypt password encryption"] },
  { no: "02", name: "Nexi Net Website", category: "Business Website", variant: "web",
    tech: ["HTML", "CSS", "JavaScript"], stats: [], link: "https://nexinet.in",
    desc: "The business website for my own company, Nexi Net, created to showcase broadband services, plans and company information.",
    features: ["Website development", "Service presentation", "Plan presentation", "Company information", "Content management", "Deployment"] },
];
export const dutiesOld = ["Supported 150+ broadband customers", "Customer onboarding and service requirements", "Plan management and technical support", "Hands-on with FTTH, EPON/GPON, OLT, ONT, routers and fiber-optic networks", "Resolved connectivity and network-related issues", "ISP operations and customer service management"];
export const certs = ["Cisco CCNA", "Networking System Course", "IBM Python Programming Course", "IBM Java Programming Course"];
export const duties = ["Founded Nexi Net and run its day-to-day broadband operations", "Grown to 150+ customers since 2024", "Customer onboarding, service requirements and plan management", "Technical support and connectivity troubleshooting", "Hands-on with FTTH, EPON/GPON, OLT, ONT, routers and fiber-optic networks", "Built our own tools: the NexiNet management app and the business website"];
export const facts = [["Studying", "B.Tech CSE (Data Science & AI), 2023 — 2027"], ["Running", "Nexi Net, Gummidipoondi. Founder & CEO since 2024"], ["Customers", "150+"], ["Focus", "Software · AI · Networking"], ["Based in", "Chennai, Tamil Nadu"], ["Builds with", "Vibe coding"]];
