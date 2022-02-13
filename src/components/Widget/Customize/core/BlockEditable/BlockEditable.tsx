import CardBlock from "../../../core/types/CardBlock";
import RemoveIcon from "../Icons/Remove";
import LabeledBlock from "../LabeledBlock";

interface BlockEditableProps {
  onChange: (block: CardBlock) => void;
  onDelete: () => void;
  content: CardBlock;
  locked: boolean;
}

function BlockEditable({
  onDelete,
  content,
  onChange,
  locked,
}: BlockEditableProps) {
  return (
    <LabeledBlock>
      <div className="flex flex-row gap-1 justify-center items-center relative w-full h-full">
        {!locked && (
          <div className="absolute left-0.5">
            <RemoveIcon size="1.25em" onClick={onDelete} />
          </div>
        )}
        {content.rows &&
          content.rows.map((row, index) => {
            return (
              <div
                key={`block-content-${index}`}
                className="flex flex-grow justify-center font-bold"
              >
                {row.content || "Empty Block"}
              </div>
            );
          })}
      </div>
    </LabeledBlock>
  );
}

export default BlockEditable;
