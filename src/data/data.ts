import memoryIcon from "../assets/images/icon-memory.svg";
import reactionIcon from "../assets/images/icon-reaction.svg";
import verbalIcon from "../assets/images/icon-verbal.svg";
import visualIcon from "../assets/images/icon-visual.svg";

export type dataType = {
  id: number;
  icon: string;
  title: string;
  score: number;
};
export const data: dataType[] = [
  {
    id: 1,
    icon: reactionIcon,
    title: "Reaction",
    score: 80,
  },
  {
    id: 2,
    icon: memoryIcon,
    title: "Memory",
    score: 92,
  },
  {
    id: 3,
    icon: verbalIcon,
    title: "Verbal",
    score: 61,
  },
  {
    id: 4,
    icon: visualIcon,
    title: "Visual",
    score: 72,
  },
];
