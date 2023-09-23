const PersonalDetailsInput = ({ handleChange, person }) => {
  return (
    <>
      <div className="personal-details-input-wrapper">
        <h1>Personal Details</h1>

        <div className="input">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            id="fullName"
            name="fullName"
            onChange={handleChange}
            value={person.fullName}
          />
        </div>

        <div className="input">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            placeholder="Enter Your Role"
            id="role"
            name="role"
            onChange={handleChange}
            value={person.role}
          />
        </div>

        <div className="input">
          <label htmlFor="summary">Sumary</label>
          <textarea
            type="text"
            placeholder="Enter Professional Summary"
            id="summary"
            name="summary"
            onChange={handleChange}
            value={person.summary}
          />
        </div>

        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            id="email"
            name="email"
            onChange={handleChange}
            value={person.email}
          />
        </div>

        <div className="input">
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            type="url"
            placeholder="Enter Your Linkedin Profile Link"
            id="linkedin"
            name="linkedin"
            onChange={handleChange}
            value={person.linkedin}
          />
        </div>

        <div className="input">
          <label htmlFor="phoneNumber">Phone</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            id="phoneNumber"
            name="phone"
            onChange={handleChange}
            value={person.phone}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalDetailsInput;
