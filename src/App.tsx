import Results from "./components/Results";
import Summary from "./components/Summary";

const App = () => {
  return (
    <main>
      <div className="result-summary">
        <Results />
        <Summary />
      </div>
    </main>
  );
};
export default App;
