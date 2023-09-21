const SkillsInput = ({ handleChange, skill, onClick }) => {
  return (
    <>
      <div className="input">
        <input
          type="text"
          placeholder="Enter a new skill"
          name="name"
          value={skill.name}
          onChange={handleChange}
        />
        <button onClick={onClick}>Add Skill</button>
      </div>
    </>
  );
};

export default SkillsInput;
