import Toggle from "../../core/Toggle/Toggle";
import Card from "../core/types/Card";
import CardPlaceholder from "./core/CardEditable/CardEditable";
import AddIcon from "./core/Icons/Add";
import NewContainer from "./core/NewContainer";

interface CardSectionProps {
  onChange: (cards: Card[]) => void;
  setEnabled: (enabled: boolean) => void;
  cardLimit: number;
  enabled: boolean;
  locked: boolean;
  title: string;
  cards: Card[];
}

function CardsSection({
  locked,
  title,
  cards,
  onChange,
  cardLimit,
  enabled,
  setEnabled,
}: CardSectionProps) {
  const newCard = () => {
    onChange([
      ...cards,
      {
        rows: [
          {
            blocks: [
              {
                rows: [
                  {
                    type: "text",
                    content: "New Block",
                  },
                ],
              },
            ],
          },
        ],
        tags: [],
      },
    ]);
  };

  const updateCard = (index: number, card: Card) => {
    const newCards = [...cards];
    newCards[index] = card;
    onChange(newCards);
  };
  const deleteCard = (index: number) => {
    const newCards = cards.filter((_, i) => i !== index);
    onChange(newCards);
  };
  return (
    <div className="flex flex-col gap-2 w-full bg-gray-700 p-2 rounded-xl">
      <div className="flex flex-row justify-between items-center gap-2 px-2">
        <Toggle value={enabled} onChange={setEnabled} />
        <h3 className="text-xl font-bold">{title}</h3>
        <Toggle value={false} onChange={(e) => {}} className="invisible" />
      </div>

      {cards.map((card, index) => {
        return (
          <CardPlaceholder
            locked={locked}
            content={card}
            key={`card-${index}`}
            onDelete={() => deleteCard(index)}
            onChange={(card: Card) => updateCard(index, card)}
          />
        );
      })}

      {cards.length < cardLimit && (
        <NewContainer onClick={newCard}>
          <AddIcon size="2.5em" />
        </NewContainer>
      )}
    </div>
  );
}

export default CardsSection;
