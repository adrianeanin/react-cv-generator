import "../assets/styles/DisplayWork.css";

const DisplayWork = ({ work, isFirstRender }) => {
  return (
    <>
      <section className="work-wrapper">
        {isFirstRender && <h4>Work experience</h4>}
        <div className="work">
          <p className="work-role">{work.role}</p>
          <p className="work-duration">
            {work.company}, {work.startDate}-{work.endDate}
          </p>
          <p className="work-description">{work.description}</p>
        </div>
      </section>
    </>
  );
};

export default DisplayWork;
