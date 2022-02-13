import Circle from "../Icons/Circle/Circle";

interface TogleProps {
  onChange: (value: boolean) => void;
  className?: string;
  value: boolean;
}

const classes = [
  "flex",
  "h-5",
  "w-8",
  "rounded-xl",
  "bg-neutral",
  "items-center",
  "p-1",
];

function Toggle({ value, onChange, className }: TogleProps) {
  const thisClasses = className ? [...classes, className] : classes;
  return (
    <div className={thisClasses.join(" ")} onClick={() => onChange(!value)}>
      {value && (
        <div className="ml-auto">
          <Circle size="0.75em" classes={["bg-green-400"]} />
        </div>
      )}
      {!value && <Circle size="0.75em" classes={["bg-red-400"]} />}
    </div>
  );
}

export default Toggle;
