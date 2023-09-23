const SkillsInput = ({ handleChange, skill, onClick, onDeleteClick }) => {
  return (
    <>
      <div className="skill-input-wrapper">
        <h1>Skill</h1>

        <div className="input">
          <label htmlFor="skill">Skill</label>
          <input
            type="text"
            placeholder="Enter a new skill"
            id="skill"
            name="name"
            value={skill.name}
            onChange={handleChange}
          />

          <div className="btns">
            <button onClick={onClick} className="save-btn">
              Save
            </button>

            {onDeleteClick && (
              <button onClick={onDeleteClick} className="delete-btn">
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsInput;
