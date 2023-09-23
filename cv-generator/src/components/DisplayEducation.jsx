import "../assets/styles/DisplayEducation.css";

const DisplayEducation = ({ education, isFirstRender }) => {
  return (
    <>
      <section className="education-wrapper">
        {isFirstRender && <h4>Education &amp; Learning</h4>}
        <div className="education">
          <p className="education-degree">{education.degree}</p>
          <p className="education-duration">
            {education.school}, {education.startDate}-{education.endDate}
          </p>
        </div>
      </section>
    </>
  );
};

export default DisplayEducation;
