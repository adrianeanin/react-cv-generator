const DisplayEducation = ({ education, isFirstRender }) => {
  return (
    <>
      {isFirstRender && <h4>Education &amp; Learning</h4>}
      <div className="education">
        <p>{education.degree}</p>
        <p>
          {education.school}, {education.startDate}-{education.endDate}
        </p>
      </div>
    </>
  );
};

export default DisplayEducation;
