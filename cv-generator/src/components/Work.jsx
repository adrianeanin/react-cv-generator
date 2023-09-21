const Work = ({ work, handleChange, onClick }) => {
  return (
    <>
      <h1>Experience</h1>
      <div className="input">
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          placeholder="Enter company name"
          id="company"
          name="company"
          value={work.school}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="input">
        <label htmlFor="role">Position Title</label>
        <input
          type="text"
          placeholder="Enter position title"
          id="role"
          name="role"
          value={work.degree}
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
          value={work.startDate}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="endDate">End Date</label>
        <input
          type="text"
          placeholder="Enter end date"
          id="endDate"
          name="endDate"
          value={work.endDate}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="input">
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          placeholder="Enter description"
          id="description"
          name="description"
          onChange={handleChange}
          value={work.description}
        />
      </div>

      <button onClick={onClick}>Add Work</button>
    </>
  );
};

export default Work;
