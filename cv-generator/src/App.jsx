import PersonalDetailsInput from "./components/PersonalDetailsInput";
import DisplayPersonal from "./components/DisplayPersonal";
import DisplayEducation from "./components/DisplayEducation";
import DisplayWork from "./components/DisplayWork";
import DisplaySkills from "./components/DisplaySkills";
import WorkInput from "./components/WorkInput";
import EducationInput from "./components/EducationInput";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import html2pdf from "html2pdf.js";
import defaultData from "./services/defaultData";
import helpers from "./services/helpers";
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
    localStorage.clear();
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

    const updatedWorkData = [...workExp, newWorkItem];
    setWorkExp(updatedWorkData);
    helpers.saveWorkToLocalStorage(updatedWorkData);

    setMostRecentWorkId(newId);
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

    const updatedEducationData = [...education, newEducationItem];
    setEducation(updatedEducationData);
    helpers.saveEducationToLocalStorage(updatedEducationData);

    setMostRecentEducationId(newId);
  };

  const addSkill = () => {
    const newId = uuidv4();

    const newSkillItem = {
      id: newId,
      name: newSkill.name,
    };

    const updatedSkillsData = [...skills, newSkillItem];
    setSkills(updatedSkillsData);

    setMostRecentSkillId(newId);
    helpers.saveSkillsToLocalStorage(updatedSkillsData);
  };

  const handlePersonChange = (e) => {
    const { name, value } = e.target;

    setPersonData((prev) => {
      const updatedPersonData = {
        ...prev,
        [name]: value,
      };
      localStorage.setItem("personData", JSON.stringify(updatedPersonData));
      return updatedPersonData;
    });
  };

  const handleEduChange = (e) => {
    const { name, value } = e.target;

    const updatedNewEducation = {
      ...newEducation,
      [name]: value,
    };
    setNewEducation(updatedNewEducation);
    localStorage.setItem("newEducation", JSON.stringify(updatedNewEducation));
  };

  const handleWorkChange = (e) => {
    const { name, value } = e.target;

    const updatedNewWorkExp = {
      ...newWorkExp,
      [name]: value,
    };
    setNewWorkExp(updatedNewWorkExp);
    localStorage.setItem("newWork", JSON.stringify(updatedNewWorkExp));
  };

  const handleSkillChange = (e) => {
    const { name, value } = e.target;

    const updatedNewSkill = {
      ...newSkill,
      [name]: value,
      id: mostRecentSkillId,
    };
    setNewSkill(updatedNewSkill);
    localStorage.setItem("newSkill", JSON.stringify(updatedNewSkill));
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

  const saveAsPDF = () => {
    try {
      const cvContainer = document.querySelector("#cv-container");

      html2pdf().from(cvContainer).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  useEffect(() => {
    helpers.getFromLocalStorage(
      setPersonData,
      setNewEducation,
      setNewWorkExp,
      setNewSkill,
      setWorkExp,
      setEducation,
      setSkills
    );
  }, []);

  return (
    <>
      <main>
        <section className="inputs">
          <div className="btns">
            <button onClick={clearResume} className="delete-btn">
              🗑 Clear Resume
            </button>
            <button onClick={loadExample} className="save-btn">
              📄 Load Example
            </button>
            <button onClick={saveAsPDF} className="pdf-btn">
              📄 Save PDF
            </button>
          </div>

          <PersonalDetailsInput
            handleChange={handlePersonChange}
            person={personData}
          />

          <WorkInput
            handleChange={handleWorkChange}
            work={newWorkExp}
            onClick={addWork}
            onDeleteClick={removeMostRecentWork}
          />

          <EducationInput
            handleChange={handleEduChange}
            education={newEducation}
            onClick={addEducation}
            onDeleteClick={removeMostRecentEducation}
          />

          <SkillsInput
            handleChange={handleSkillChange}
            skill={newSkill}
            onClick={addSkill}
            onDeleteClick={removeMostRecentSkill}
          />
        </section>

        <section className="displays" id="cv-container">
          <DisplayPersonal person={personData} />

          <div className="columns | center-content">
            <div className="columns-left">
              {workExp.map((item, index) => (
                <DisplayWork
                  key={item.id}
                  work={item}
                  isFirstRender={index === 0}
                />
              ))}
            </div>

            <div className="columns-right ">
              <div className="column-right-content">
                {education.map((item, index) => (
                  <DisplayEducation
                    key={item.id}
                    education={item}
                    isFirstRender={index === 0}
                  />
                ))}
              </div>

              <div className="column-right-content">
                {skills.map((skill, index) => (
                  <DisplaySkills
                    skill={skill}
                    key={skill.id}
                    isFirstRender={index === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
