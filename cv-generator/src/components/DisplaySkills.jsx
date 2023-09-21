const DisplaySkills = ({ skill, isFirstRender }) => {
  return (
    <>
      {isFirstRender && <h4>Skills</h4>}
      <div className="skills">
        <li>{skill.name}</li>
      </div>
    </>
  );
};

export default DisplaySkills;
