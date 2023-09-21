import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import DisplayPersonal from "./components/DisplayPersonal";
import DisplayEducation from "./components/DisplayEducation";
import Education from "./components/Education";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [personData, setPersonData] = useState({
    fullName: "Adrian",
    role: "Full Stack Dev",
    summary:
      "A reliable and efficient full stack developer passionate about clean code and user experience",
    email: "adrian.anin@outlook.com",
    linkedin: "https://www.linkedin.com/in/adriananin/",
    phone: "(+233) 551326702",
  });

  const [education, setEducation] = useState([]);
  const [newEducation, setNewEducation] = useState({
    id: "",
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

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

  return (
    <>
      <PersonalDetails handleChange={handleChange} person={personData} />
      <br />
      <Education
        handleChange={handleEduChange}
        education={newEducation}
        onClick={addEducationItem}
      />

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
      {/* <DisplayEducation education={newEducation} /> */}
    </>
  );
};

export default App;
