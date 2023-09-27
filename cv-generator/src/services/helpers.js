const saveWorkToLocalStorage = (workData) => {
  localStorage.setItem("workData", JSON.stringify(workData));
};

const saveEducationToLocalStorage = (educationData) => {
  localStorage.setItem("educationData", JSON.stringify(educationData));
};

const saveSkillsToLocalStorage = (skillsData) => {
  localStorage.setItem("skillsData", JSON.stringify(skillsData));
};

const getFromLocalStorage = (
  setPersonData,
  setNewEducation,
  setNewWorkExp,
  setNewSkill,
  setWorkExp,
  setEducation,
  setSkills
) => {
  const savedPersonData = JSON.parse(localStorage.getItem("personData"));
  if (savedPersonData) setPersonData(savedPersonData);

  const savedNewEducation = JSON.parse(localStorage.getItem("newEducation"));
  if (savedNewEducation) setNewEducation(savedNewEducation);

  const savedNewWorkExp = JSON.parse(localStorage.getItem("newWork"));
  if (savedNewWorkExp) setNewWorkExp(savedNewWorkExp);

  const savedNewSkill = JSON.parse(localStorage.getItem("newSkill"));
  if (savedNewSkill) setNewSkill(savedNewSkill);

  const savedWorkData = JSON.parse(localStorage.getItem("workData"));
  if (savedWorkData) setWorkExp(savedWorkData);

  const savedEducationData = JSON.parse(localStorage.getItem("educationData"));
  if (savedEducationData) setEducation(savedEducationData);

  const savedSkillsData = JSON.parse(localStorage.getItem("skillsData"));
  if (savedSkillsData) setSkills(savedSkillsData);
};

export default {
  saveEducationToLocalStorage,
  saveSkillsToLocalStorage,
  saveWorkToLocalStorage,
  getFromLocalStorage,
};
