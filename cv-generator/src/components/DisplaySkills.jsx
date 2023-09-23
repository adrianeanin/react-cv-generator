import "../assets/styles/DisplaySkills.css";

const DisplaySkills = ({ skill, isFirstRender }) => {
  return (
    <>
      <section className="skills-wrapper">
        {isFirstRender && <h4>Skills</h4>}
        <ul className="skills-list">
          <li className="skill">{skill.name}</li>
        </ul>
      </section>
    </>
  );
};

export default DisplaySkills;
