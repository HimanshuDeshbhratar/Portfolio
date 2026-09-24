export const profile = {
  name: "Himanshu Deshbhratar",
  email: "himanshudeshbhratar9@gmail.com",
  phone: "+91 7038619668",
  location: "India",
  resumeUrl: "https://drive.google.com/file/d/1pvqHvm4BlLUaInarA3f-QC-0_oHz_jGR/view?usp=sharing",
  socials: {
    github: "https://github.com/HimanshuDeshbhratar",
    linkedin: "https://www.linkedin.com/in/himanshu-deshbhratar-799bb42a8/",
    leetcode: "",
  },
};

export const projectCount = 18;

export const skills = [
  ["Languages", ["C++", "Python", "JavaScript"]],
  ["Frontend", ["React", "HTML5", "CSS"]],
  ["Backend", ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL"]],
  ["Systems & Tools", ["gRPC", "Docker", "Git", "GitHub", "AWS", "CI/CD", "VS Code"]],
] as const;

export const experience = {
  company: "People Tech Group",
  role: "Software Developer Intern – SDV",
  date: "June – August 2025",
  location: "Hyderabad, India",
  tech: ["C++", "gRPC", "Linux", "JSON", "VSS", "CAN", "CMake"],
  text: "Built reusable C++ wrappers for the Kuksa.val Databroker, integrating gRPC and JSON APIs for dependable real-time vehicle signal exchange across SDV modules.",
};

export const projects = [
  {
    title: "Moodify",
    subtitle: "Emotion-based Music Recommender",
    date: "Oct – Dec 2025",
    tech: ["TypeScript", "React", "Node.js", "Spotify API"],
    description:
      "A full-stack music recommendation experience combining client-side facial expression recognition with weather-aware personalization.",
    highlights: [
      "94.3% image classification accuracy",
      "200+ automations tested",
      "Weather personalization",
      "Optimized caching & CI/CD",
    ],
    liveUrl: "https://moodifyv23.onrender.com/",
    githubUrl: "https://github.com/HimanshuDeshbhratar/Moodifyv23",
  },
  {
    title: "Real-Time Vehicle Telemetry",
    subtitle: "Dashboard",
    date: "Feb 2026 – Present",
    tech: ["TypeScript", "React", "WebSockets", "MongoDB"],
    description:
      "A modular dashboard for streaming, persisting, and monitoring automotive signals with threshold-based alerting.",
    highlights: [
      "10+ live signals",
      "100+ streamed signals",
      "3 prototype vehicles",
      "95% uptime",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/HimanshuDeshbhratar/Real-Time-Vehicle-Telemetry-Dashboard-",
  },
];

export const additionalProjects = [
  ["BookVerse", "https://github.com/HimanshuDeshbhratar/BookVerse"],
  ["Finance Visualizer", "https://github.com/HimanshuDeshbhratar/Finance-Visualizer"],
  ["FuelEU VMS", "https://github.com/HimanshuDeshbhratar/FuelEU-VMS"],
  ["Store Rating App", "https://github.com/HimanshuDeshbhratar/Store-Rating-App"],
  ["Kiddo SDUI Renderer", "https://github.com/HimanshuDeshbhratar/Kiddo-SDUI-renderer"],
  ["Bitespeed Identity Reconciliation", "https://github.com/HimanshuDeshbhratar/Bitespeed-Identity-Reconciliation"],
  ["LinkedIn Profile Extractor", "https://github.com/HimanshuDeshbhratar/LinkedIn-Profile-Extractor"],
  ["Expenses App", "https://github.com/HimanshuDeshbhratar/Expenses-App"],
] as const;

export const education = [
  ["NIT Rourkela", "B.Tech in Metallurgical & Materials Engineering · 2022–2026 · CGPA: 7.26"],
  ["Sarwashree Junior College", "Higher Secondary (PCM) · June 2022 · 73.83%"],
  ["Saraswat Central Public School", "CBSE Class X · July 2020 · 91.20%"],
] as const;

export function demoAnswer(question: string) {
  const q = question.toLowerCase();
  if (q.includes("people tech") || q.includes("intern"))
    return "At People Tech Group, Himanshu was a Software Developer Intern – SDV (June–August 2025). He built C++ wrappers for Kuksa.val Databroker and worked with gRPC and JSON APIs for real-time vehicle signals, reducing average latency by 5 ms across HVAC, odometer, and tyre-pressure signals.";
  if (q.includes("telemetry") || q.includes("vehicle"))
    return "The Real-Time Vehicle Telemetry Dashboard streams 100+ signals through WebSockets and visualizes 10+ live vehicle signals. It includes threshold alerts, a modular REST backend, MongoDB persistence, testing across 3 prototype vehicles, and 95% uptime.";
  if (q.includes("moodify") || q.includes("music"))
    return "Moodify is a full-stack emotion-based music recommender. It uses face-api.js for client-side expression detection (94.3% classification accuracy), weather personalization, Spotify and OpenWeather APIs, caching, and CI/CD. Live demo: https://moodifyv23.onrender.com/";
  if (q.includes("skill") || q.includes("technolog"))
    return "Himanshu works with C++, Python, JavaScript, React, Node.js, Express, REST APIs, MongoDB, MySQL, gRPC, Docker, Git, AWS, and CI/CD.";
  if (q.includes("education") || q.includes("nit"))
    return "Himanshu is pursuing a B.Tech in Metallurgical & Materials Engineering at NIT Rourkela (2022–2026) with a CGPA of 7.26.";
  if (q.includes("achievement") || q.includes("dsa") || q.includes("codeforces"))
    return "He has solved 550+ DSA problems across LeetCode and Codeforces, has a Codeforces rating of 1253, and has earned 3+ Player of the Match awards in regional tournaments.";
  if (q.includes("project") || q.includes("github"))
    return `Himanshu has ${projectCount} public projects on GitHub. Featured work includes Moodify and the Real-Time Vehicle Telemetry Dashboard, plus BookVerse, Finance Visualizer, FuelEU VMS, Store Rating App, and more.`;
  if (q.includes("contact") || q.includes("email") || q.includes("hire"))
    return `Reach Himanshu at ${profile.email} or ${profile.phone}. LinkedIn: ${profile.socials.linkedin}`;
  return "I can help with Himanshu’s experience, projects, skills, education, and achievements. Try asking about People Tech Group, Moodify, or the vehicle telemetry dashboard.";
}
