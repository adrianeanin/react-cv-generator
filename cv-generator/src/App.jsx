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
  const [workExp, setWorkExp] = useState(defaultData.initialWorkExp);
  const [newEducation, setNewEducation] = useState(defaultData.initialNewEdu);
  const [newWorkExp, setNewWorkExp] = useState(defaultData.initialNewWorkExp);
  const [skills, setSkills] = useState(defaultData.initialSkills);
  const [newSkill, setNewSkill] = useState({ name: "" });
  const [mostRecentEducationId, setMostRecentEducationId] = useState(null);
  const [mostRecentWorkId, setMostRecentWorkId] = useState(null);
  const [mostRecentSkillId, setMostRecentSkillId] = useState(null);

  const clearResume = () => {
    setPersonData({});
    setEducation([]);
    setWorkExp([]);
    setNewEducation({});
    setNewWorkExp({});
    setSkills([]);
    setNewSkill({});
    setMostRecentEducationId(null);
    setMostRecentWorkId(null);
    setMostRecentSkillId(null);
  };

  const loadExample = () => {
    setPersonData(defaultData.initialPersonalData);
    setEducation(defaultData.initialEdu);
    setWorkExp(defaultData.initialWorkExp);
    setNewEducation(defaultData.initialNewEdu);
    setNewWorkExp(defaultData.initialNewWorkExp);
    setSkills(defaultData.initialSkills);
    setNewSkill({ name: "" });
    setMostRecentEducationId(null);
    setMostRecentWorkId(null);
    setMostRecentSkillId(null);
  };

  const addEducation = () => {
    const newId = uuidv4();

    const newEducationItem = {
      id: newId,
      school: newEducation.school,
      degree: newEducation.degree,
      startDate: newEducation.startDate,
      endDate: newEducation.endDate,
    };

    setEducation([...education, newEducationItem]);
    setMostRecentEducationId(newId);
  };

  const addWork = () => {
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
    setMostRecentWorkId(newId);
  };

  const addSkill = () => {
    const newId = uuidv4();

    const newSkillItem = {
      id: newId,
      name: newSkill.name,
    };

    setSkills([...skills, newSkillItem]);
    setMostRecentSkillId(newId);
  };

  const handlePersonChange = (e) => {
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

  const removeMostRecentSkill = () => {
    if (mostRecentSkillId) {
      const updatedSkills = skills.filter(
        (skill) => skill.id !== mostRecentSkillId
      );
      setSkills(updatedSkills);
      setMostRecentSkillId(null);
    }
  };

  const removeMostRecentEducation = () => {
    if (mostRecentEducationId) {
      const updatedEducation = education.filter(
        (edu) => edu.id !== mostRecentEducationId
      );
      setEducation(updatedEducation);
      setMostRecentEducationId(null);
    }
  };

  const removeMostRecentWork = () => {
    if (mostRecentWorkId) {
      const updatedWorkExp = workExp.filter(
        (work) => work.id !== mostRecentWorkId
      );
      setWorkExp(updatedWorkExp);
      setMostRecentWorkId(null);
    }
  };

  return (
    <>
      <button onClick={clearResume}>Clear Resume</button>
      <button onClick={loadExample}>Load Example</button>
      <br />
      <hr />

      <PersonalDetailsInput
        handleChange={handlePersonChange}
        person={personData}
      />
      <br />
      <hr />
      <EducationInput
        handleChange={handleEduChange}
        education={newEducation}
        onClick={addEducation}
        onDeleteClick={removeMostRecentEducation}
      />
      <br />
      <hr />
      <WorkInput
        handleChange={handleWorkChange}
        work={newWorkExp}
        onClick={addWork}
        onDeleteClick={removeMostRecentWork}
      />
      <br />
      <hr />
      <SkillsInput
        handleChange={handleSkillChange}
        skill={newSkill}
        onClick={addSkill}
        onDeleteClick={removeMostRecentSkill}
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
        <DisplaySkills
          key={skill.id}
          skill={skill}
          isFirstRender={index === 0}
        />
      ))}
    </>
  );
};

export default App;
