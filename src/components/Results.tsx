const Results = () => {
  return (
    <div className="results grid-flow" data-spacing="large">
      <h1 className="section-title">Your Result</h1>

      <p className="result-score">
        <span>76</span> of 100
      </p>

      <div className="grid-flow">
        <p className="result-rank">Great</p>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};
export default Results;
