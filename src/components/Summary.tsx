import SummaryItem from "./SummaryItem";
import { data } from "../data/data";

const Summary = () => {
  return (
    <div className="summary grid-flow" data-spacing="large">
      <h2 className="section-title">Summary</h2>
      <div className="grid-flow">
        {data.map((item) => (
          <SummaryItem
            key={item.id}
            id={item.id}
            icon={item.icon}
            title={item.title}
            score={item.score}
          />
        ))}
      </div>
      <button className="button">Continue</button>
    </div>
  );
};
export default Summary;
