const Education = ({ education, handleChange, onClick }) => {
  return (
    <>
      <h1>Education</h1>
      <div className="input">
        <label htmlFor="school">School</label>
        <input
          type="text"
          placeholder="Enter school / university"
          id="school"
          name="school"
          value={education.school}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="input">
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          placeholder="Enter degree / field of study"
          id="degree"
          name="degree"
          value={education.degree}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="dates">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="text"
          placeholder="Enter start date"
          id="startDate"
          name="startDate"
          value={education.startDate}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="endDate">End Date</label>
        <input
          type="text"
          placeholder="Enter end date"
          id="endDate"
          name="endDate"
          value={education.endDate}
          onChange={handleChange}
        />
      </div>

      <button onClick={onClick}>Add Education</button>
    </>
  );
};

export default Education;
