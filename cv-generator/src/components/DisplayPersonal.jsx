import "../assets/styles/DisplayPersonal.css";

const DisplayPersonal = ({ person }) => {
  return (
    <>
      <div className="personal-details-wrapper">
        <section className="personal-details | center-content">
          <div className="summary-left">
            <h1 className="personal-details-heading">{person.fullName}</h1>
            <h2>{person.role}</h2>
            <p>{person.summary}</p>
          </div>

          <div className="summary-right">
            <div className="profile">
              <p>Email</p>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </div>

            <div className="profile">
              <p>LinkedIn</p>
              <a href={`${person.linkedin}`} target="_blank">
                {person.linkedin}
              </a>
            </div>

            <div className="profile">
              <p>Phone</p>
              <a>{person.phone}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DisplayPersonal;
