import { useState } from "react";
import Card from "../core/types/Card";
import CardBlock from "../core/types/CardBlock";
import CardRowType from "../core/types/CardRow";
import CardsSection from "./CardsSection";

function Customize() {
  const [nameEnabled, setNameEnabled] = useState(true);
  const [nameCards, setNameCards] = useState<Card[]>([
    {
      rows: [
        {
          blocks: [
            {
              rows: [
                {
                  type: "text",
                  content: "PlayerName [CLAN]",
                },
              ],
            } as CardBlock,
          ],
        },
        {
          blocks: [
            {
              rows: [
                {
                  type: "text",
                  content: "Pin Collection",
                },
              ],
            } as CardBlock,
          ],
        },
      ] as CardRowType[],
      tags: [],
    },
  ]);

  const [rankedCards, setRankedCardsDirect] = useState<Card[]>([]);
  const [rankedEnabled, setRankedEnabled] = useState(rankedCards.length > 0);
  const setRankedCards = (cards: Card[]) => {
    if (cards.length === 0) setRankedEnabled(false);
    else setRankedEnabled(true);
    setRankedCardsDirect(cards);
  };

  const [regularCards, setRegularCardsDirect] = useState<Card[]>([]);
  const [regularEnabled, setRegularEnabled] = useState(regularCards.length > 0);
  const setRegularCards = (cards: Card[]) => {
    if (cards.length === 0) setRegularEnabled(false);
    else setRegularEnabled(true);
    setRegularCardsDirect(cards);
  };

  const [vehicleExpandedCards, setVehicleExpandedCardsDirect] = useState<
    Card[]
  >([]);
  const [vehiclesExpandedEnabled, setVehiclesExpandedEnabled] = useState(
    vehicleExpandedCards.length > 0
  );
  const setVehicleExpandedCards = (cards: Card[]) => {
    if (cards.length === 0) setVehiclesExpandedEnabled(false);
    else setVehiclesExpandedEnabled(true);
    setVehicleExpandedCardsDirect(cards);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <CardsSection
        enabled={nameEnabled}
        setEnabled={setNameEnabled}
        cards={nameCards}
        onChange={setNameCards}
        title="Player Name"
        locked={true}
        cardLimit={1}
      />
      <CardsSection
        enabled={rankedEnabled}
        setEnabled={setRankedEnabled}
        cards={rankedCards}
        onChange={setRankedCards}
        title="Ranked Battles"
        locked={false}
        cardLimit={1}
      />
      <CardsSection
        enabled={regularEnabled}
        setEnabled={setRegularEnabled}
        cards={regularCards}
        onChange={setRegularCards}
        title="Regular Battles"
        locked={false}
        cardLimit={1}
      />
      <CardsSection
        enabled={vehiclesExpandedEnabled}
        setEnabled={setVehiclesExpandedEnabled}
        cards={vehicleExpandedCards}
        onChange={setVehicleExpandedCards}
        title="Vehicle Stats"
        locked={false}
        cardLimit={1}
      />
    </div>
  );
}

export default Customize;
