const DisplayPersonal = ({ person }) => {
  return (
    <>
      <div className="summary-left">
        <h1>{person.fullName}</h1>
        <h3>{person.role}</h3>
        <p>{person.summary}</p>
      </div>
      <div className="summary-right">
        <div className="profile">
          <p>Email</p>
          <a href="mailto:adriananin@outlook.com">{person.email}</a>
        </div>
        <div className="profile">
          <p>LinkedIn</p>
          <a href="#">{person.linkedin}</a>
        </div>
        <div className="profile">
          <p>Phone</p>
          <p>{person.phone}</p>
        </div>
      </div>
    </>
  );
};

export default DisplayPersonal;
