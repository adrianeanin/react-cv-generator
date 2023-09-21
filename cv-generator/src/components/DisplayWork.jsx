const DisplayWork = ({ work, isFirstRender }) => {
  return (
    <>
      {isFirstRender && <h4>Work experience</h4>}
      <div className="work">
        <p>{work.role}</p>
        <p>
          {work.company}, {work.startDate}-{work.endDate}
        </p>
        <p>{work.description}</p>
      </div>
    </>
  );
};

export default DisplayWork;
