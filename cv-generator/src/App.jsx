import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import Display from "./components/Display";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  console.log(personData);

  return (
    <>
      <PersonalDetails handleChange={handleChange} person={personData} />
      <hr />
      <Display person={personData} />
    </>
  );
};

export default App;
