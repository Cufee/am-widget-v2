import Card from "../../../core/types/Card";

export default interface CardProps {
  content: Card;
  locked: boolean;
  onDelete: () => void;
  onChange: (card: Card) => void;
}
