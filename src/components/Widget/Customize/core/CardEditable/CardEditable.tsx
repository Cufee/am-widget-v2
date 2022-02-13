import CardRow from "../../../core/types/CardRow";
import CardRowEditable from "../CardRowEditable/CardRowEditable";
import AddIcon from "../Icons/Add";
import RemoveIcon from "../Icons/Remove";
import NewContainer from "../NewContainer";
import CardProps from "../types/CardProps";

function CardPlaceholder({ content, onChange, onDelete, locked }: CardProps) {
  const setRows = (rows: CardRow[]) => {
    onChange({ ...content, rows });
  };

  const newRow = () => {
    setRows([
      ...content.rows,
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
    ]);
  };
  const deleteRow = (index: number) => {
    const newRows = content.rows.filter((_, i) => i !== index);
    if (newRows.length === 0) {
      onDelete();
    } else {
      setRows(newRows);
    }
  };
  const updateRow = (index: number, row: CardRow) => {
    const newRows = [...content.rows];
    newRows[index] = row;
    setRows(newRows);
  };

  return (
    <div className="flex flex-row p-2 bg-gray-800 bg-opacity-50 rounded-xl gap-2">
      {!locked && content.rows.length === 0 && (
        <NewContainer onClick={onDelete}>
          <RemoveIcon size="1.5em" />
        </NewContainer>
      )}
      <div className="flex flex-col w-full gap-2">
        {content.rows.map((row, rowIndex) => {
          return (
            <CardRowEditable
              content={row}
              locked={locked}
              key={`row-${rowIndex}`}
              onDelete={() => deleteRow(rowIndex)}
              onChange={(row: CardRow) => updateRow(rowIndex, row)}
            />
          );
        })}
        {!locked && content.rows.length < 5 && (
          <NewContainer onClick={newRow}>
            <AddIcon size="1.5em" />
          </NewContainer>
        )}
      </div>
    </div>
  );
}

export default CardPlaceholder;
