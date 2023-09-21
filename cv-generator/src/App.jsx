import PersonalDetailsInput from "./components/PersonalDetailsInput";
import DisplayPersonal from "./components/DisplayPersonal";
import DisplayEducation from "./components/DisplayEducation";
import DisplayWork from "./components/DisplayWork";
import DisplaySkills from "./components/DisplaySkills";
import WorkInput from "./components/WorkInput";
import EducationInput from "./components/EducationInput";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import defaultData from "./services/defaultData";
import SkillsInput from "./components/SkillsInput";

const App = () => {
  const [personData, setPersonData] = useState(defaultData.initialPersonalData);
  const [education, setEducation] = useState(defaultData.initialEdu);
  const [newEducation, setNewEducation] = useState(defaultData.initialNewEdu);
  const [workExp, setWorkExp] = useState(defaultData.initialWorkExp);
  const [newWorkExp, setNewWorkExp] = useState(defaultData.initialNewWorkExp);

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: "React" });

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

  const addSkill = () => {
    const newId = uuidv4();

    const newSkillItem = {
      id: newId,
      name: newSkill.name,
    };

    setSkills([...skills, newSkillItem]);
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

  const handleSkillChange = (e) => {
    const { name, value } = e.target;
    setNewSkill({
      ...newSkill,
      [name]: value,
    });
  };

  return (
    <>
      <PersonalDetailsInput handleChange={handleChange} person={personData} />
      <br />
      <hr />
      <EducationInput
        handleChange={handleEduChange}
        education={newEducation}
        onClick={addEducationItem}
      />
      <br />
      <hr />
      <WorkInput
        handleChange={handleWorkChange}
        work={newWorkExp}
        onClick={addWorkItem}
      />
      <br />
      <hr />
      <SkillsInput
        handleChange={handleSkillChange}
        skill={newSkill}
        onClick={addSkill}
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
          isFirstRender={index === 0}
        />
      ))}

      <hr />
      <hr />
      {workExp.map((item, index) => (
        <DisplayWork key={item.id} work={item} isFirstRender={index === 0} />
      ))}
      <hr />
      <hr />
      {skills.map((skill, index) => (
        <DisplaySkills key={index} skill={skill} isFirstRender={index === 0} />
      ))}
    </>
  );
};

export default App;
