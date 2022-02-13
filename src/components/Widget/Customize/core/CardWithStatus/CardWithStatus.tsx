import { useEffect, useState } from "react";
import CardPlaceholder from "../CardEditable/CardEditable";
import CardProps from "../types/CardProps";

interface CardStatus {
  status: "success" | "error" | "unknown";
  message?: string;
}

const statusBackgrounds = {
  success: "bg-green-300",
  error: "bg-red-500",
  unknown: "",
};

function CardWithStatus(props: CardProps) {
  const [status, setStatus] = useState<CardStatus>({
    status: "success",
  });
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    if (props.content.rows.length === 0) {
      setStatus({
        status: "error",
        message: "Card must have at least one row",
      });
    } else if (props.content.rows.find((row) => row.blocks.length === 0)) {
      setStatus({
        status: "error",
        message: "Each row must have at least one block",
      });
    } else {
      setStatus({
        status: "success",
        message: "Everything looks good!",
      });
    }
  }, [props.content]);

  return (
    <div className="flex flex-row w-full box-content items-center relative">
      {status.status !== "unknown" && (
        <div
          onMouseEnter={() => setShowMessage(true)}
          onMouseLeave={() => setShowMessage(false)}
          className={`flex rounded-full w-2 h-2 m-2 ml-3 p-2 box-content justify-center items-center bg-opacity-50 cursor-help ${
            statusBackgrounds[status.status]
          }`}
        >
          {showMessage && (
            <span className="text-center left-10 absolute w-48 z-50 bg-opacity-50 bg-gray-600 px-4 py-2 rounded-md">
              <div className="text-xs text-white">{status.message}</div>
            </span>
          )}
          <span>{status.status === "success" ? "✓" : "X"}</span>
        </div>
      )}
      <div className="w-full">
        <CardPlaceholder {...props} />
      </div>
    </div>
  );
}

export default CardWithStatus;
