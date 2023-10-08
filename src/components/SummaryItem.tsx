interface SummaryItemProps {
  icon: string;
  title: string;
  score: number;
  id: number;
}

const SummaryItem: React.FC<SummaryItemProps> = ({
  id,
  icon,
  title,
  score,
}) => {
  return (
    <div className="summary-item" data-item-type={"accent" + id}>
      <div className="flex-group">
        <img src={icon} alt={title + "icon"} />
        <h3 className="summary-item-title">{title}</h3>
      </div>
      <p className="summary-score">
        <span>{score}</span> / 100
      </p>
    </div>
  );
};
export default SummaryItem;
