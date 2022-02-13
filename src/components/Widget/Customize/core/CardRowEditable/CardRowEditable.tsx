import CardBlock from "../../../core/types/CardBlock";
import CardRow from "../../../core/types/CardRow";
import BlockEditable from "../BlockEditable/BlockEditable";
import AddIcon from "../Icons/Add";
import RemoveIcon from "../Icons/Remove";
import NewContainer from "../NewContainer";

interface CardRowEditableProps {
  onChange: (row: CardRow) => void;
  onDelete: () => void;
  content: CardRow;
  locked: boolean;
}

function CardRowEditable({
  content,
  onDelete,
  onChange,
  locked,
}: CardRowEditableProps) {
  const deleteBlock = (index: number) => {
    const newBlocks = content.blocks.filter((block, i) => index !== i);
    if (newBlocks.length === 0) {
      onDelete();
    } else {
      onChange({ ...content, blocks: newBlocks });
    }
  };
  const updateBlock = (index: number, block: CardBlock) => {};
  const newBlock = () => {
    onChange({
      ...content,
      blocks: [
        ...content.blocks,
        {
          rows: [
            {
              type: "text",
              content: "New Block",
            },
          ],
        },
      ],
    });
  };

  return (
    <div className="flex flex-row gap-2 h-16">
      {!locked && content.blocks.length < 2 && (
        <div>
          <NewContainer onClick={onDelete} height="100%">
            <RemoveIcon size="2em" />
          </NewContainer>
        </div>
      )}

      <div className="flex flex-grow flex-row gap-2">
        {content.blocks.map((block, index) => {
          return (
            <BlockEditable
              locked={locked}
              content={block}
              key={`block-${index}`}
              onDelete={() => deleteBlock(index)}
              onChange={(block: CardBlock) => updateBlock(index, block)}
            />
          );
        })}

        {!locked && content.blocks.length < 5 && (
          <div
            className={`${
              content.blocks.length === 0 ? "flex-grow w-full" : ""
            } flex`}
          >
            <NewContainer onClick={newBlock}>
              <AddIcon size="2em" />
            </NewContainer>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardRowEditable;
