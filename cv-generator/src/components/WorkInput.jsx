const WorkInput = ({ work, handleChange, onClick, onDeleteClick }) => {
  return (
    <>
      <div className="work-input-wrapper">
        <h1>Experience</h1>
        <div className="input">
          <label htmlFor="company">Company Name</label>
          <input
            type="text"
            placeholder="Enter company name"
            id="company"
            name="company"
            value={work.company}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <label htmlFor="role">Position Title</label>
          <input
            type="text"
            placeholder="Enter position title"
            id="role"
            name="role"
            value={work.role}
            onChange={handleChange}
          />
        </div>

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
    </>
  );
};

export default WorkInput;
