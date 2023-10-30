const initialPersonalData = {
  fullName: "Adrian Anin",
  role: "Full Stack Engineer",
  summary:
    "A reliable and efficient full stack developer passionate about clean code and user experience. I enjoy working in close collaboration with teams across technology, business and design.",
  email: "adriananin@icloud.com",
  linkedin: "https://www.linkedin.com/in/adriananin/",
  phone: "(+233) 551326702",
};

const initialEdu = [
  {
    id: "",
    school: "KNUST",
    degree: "BSc Computer Engineering",

    startDate: "2017",
    endDate: "2021",
  },
  {
    id: "",
    school: "The Odin Project",
    degree: "Full Stack Web Development",
    startDate: "2022",
    endDate: "Present",
  },
];

const initialWorkExp = [
  {
    id: "",
    role: "Full Stack Engineer",
    company: "The Odin Project",
    startDate: "2023",
    endDate: "Present",
    description:
      "Designing end-to-end experience for products on mobile & web platforms. Working closely with managers, marketing specialists and developers.",
  },
  {
    id: "",
    role: "Front End Engineer",
    company: "Front End Mentor",
    startDate: "2023",
    endDate: "Present",
    description:
      "Designing end-to-end experience for products on mobile & web platforms. Working closely with managers, marketing specialists and developers.",
  },
];

const initialNewEdu = {
  id: "",
  school: "",
  degree: "",
  startDate: "",
  endDate: "",
};

const initialNewWorkExp = {
  id: "",
  role: "",
  company: "",
  startDate: "",
  endDate: "",
  description: "",
};

const initialSkills = [
  { id: "", name: "MongoDb, Express, React, NodeJs" },
  { id: "", name: "" },
  { id: "", name: "Jest, Git, Vite, Webpack, NPM" },
  { id: "", name: "HTML, CSS, Javascript" },
  { id: "", name: "" },
];

export default {
  initialPersonalData,
  initialWorkExp,
  initialEdu,
  initialNewEdu,
  initialNewWorkExp,
  initialSkills,
};
