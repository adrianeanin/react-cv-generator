const initialPersonalData = {
  fullName: "Adrian Anin",
  role: "Full Stack Dev",
  summary:
    "A reliable and efficient full stack developer passionate about clean code and user experience",
  email: "adrian.anin@outlook.com",
  linkedin: "https://www.linkedin.com/in/adriananin/",
  phone: "(+233) 551326702",
};

const initialWorkExp = [
  {
    id: "",
    role: "Full Stack Engineer",
    company: "Microsoft",
    startDate: "2023",
    endDate: "Present",
    description:
      "Designing end-to-end experience for financial products on mobile & web platforms. Working closely with managers, marketing specialists and developers.",
  },
];

const initialEdu = [
  {
    id: "",
    school: "KNUST",
    degree: "Bsc. Computer Engineering",
    startDate: "2017",
    endDate: "2021",
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

export default {
  initialPersonalData,
  initialWorkExp,
  initialEdu,
  initialNewEdu,
  initialNewWorkExp,
};
