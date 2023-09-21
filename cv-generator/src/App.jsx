import PersonalDetails from "./components/PersonalDetails";
import DisplayPersonal from "./components/DisplayPersonal";
import DisplayEducation from "./components/DisplayEducation";
import Education from "./components/Education";
import DisplayWork from "./components/DisplayWork";
import Work from "./components/Work";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const App = () => {
  const [personData, setPersonData] = useState({
    fullName: "Adrian Anin",
    role: "Full Stack Dev",
    summary:
      "A reliable and efficient full stack developer passionate about clean code and user experience",
    email: "adrian.anin@outlook.com",
    linkedin: "https://www.linkedin.com/in/adriananin/",
    phone: "(+233) 551326702",
  });

  const [education, setEducation] = useState([
    {
      id: "",
      school: "KNUST",
      degree: "Bsc. Computer Engineering",
      startDate: "2017",
      endDate: "2021",
    },
  ]);
  const [newEducation, setNewEducation] = useState({
    id: "",
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });
  const [workExp, setWorkExp] = useState([
    {
      id: "",
      role: "Full Stack Engineer",
      company: "Microsoft",
      startDate: "2023",
      endDate: "Present",
      description:
        "Designing end-to-end experience for financial products on mobile & web platforms. Working closely with managers, marketing specialists and developers.",
    },
  ]);

  const [newWorkExp, setNewWorkExp] = useState({
    id: "",
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const addWorkItem = () => {
    const newId = uuidv4();

    const newWorkItem = {
      id: newId,
      role: newWorkExp.role,
      company: newWorkExp.company,
      startDate: newWorkExp.startDate,
      endDate: newWorkExp.endDate,
      description: newWorkExp.description,
    };

    setWorkExp([...workExp, newWorkItem]);
  };

  const addEducationItem = () => {
    const newId = uuidv4();

    const newEducationItem = {
      id: newId,
      school: newEducation.school,
      degree: newEducation.degree,
      startDate: newEducation.startDate,
      endDate: newEducation.endDate,
    };

    setEducation([...education, newEducationItem]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleEduChange = (e) => {
    const { name, value } = e.target;
    setNewEducation({
      ...newEducation,
      [name]: value,
    });
  };

  const handleWorkChange = (e) => {
    const { name, value } = e.target;
    setNewWorkExp({
      ...newWorkExp,
      [name]: value,
    });
  };

  return (
    <>
      <PersonalDetails handleChange={handleChange} person={personData} />
      <br />
      <hr />
      <Education
        handleChange={handleEduChange}
        education={newEducation}
        onClick={addEducationItem}
      />
      <br />
      <hr />
      <Work
        handleChange={handleWorkChange}
        work={newWorkExp}
        onClick={addWorkItem}
      />
      <hr />
      <hr />
      <DisplayPersonal person={personData} />
      <hr />
      <hr />
      {education.map((item, index) => (
        <DisplayEducation
          key={item.id}
          education={item}
          isFirstRender={index === 0 ? true : false}
        />
      ))}

      <hr />
      <hr />
      {workExp.map((item, index) => (
        <DisplayWork
          key={item.id}
          work={item}
          isFirstRender={index === 0 ? true : false}
        />
      ))}
      {/* <DisplayWork /> */}
      {/* <DisplayEducation education={newEducation} /> */}
    </>
  );
};

export default App;
