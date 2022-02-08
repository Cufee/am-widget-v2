import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface LinkProps {
  children: React.ReactNode;
  to: string;
}

const classes = [
  "px-2",
  "py-1",
  "rounded-md",

  "w-full",
  "sm:w-auto",
  "text-center",

  "bg-gray-500",
  "hover:bg-primary",

  "uppercase",
  "font-bold",
  "text-opacity-75",

  "text-gray-200",
  "hover:text-white",
  "whitespace-nowrap",
];

function LinkTo({ children, to }: LinkProps) {
  const location = useLocation();
  const [linkClasses, setLinkClasses] = useState(classes);
  useEffect(() => {
    if (to.startsWith("http")) return;
    if (location.pathname === to) {
      setLinkClasses(
        classes.filter((c) => c !== "bg-gray-500").concat("bg-primary")
      );
    } else {
      setLinkClasses(classes);
    }
  }, [location.pathname, to]);

  if (to.startsWith("http")) {
    return (
      <a target="_blank" rel="noreferrer" href={to}>
        <div className={linkClasses.join(" ")}>{children}</div>
      </a>
    );
  }

  return (
    <Link to={to}>
      <div className={linkClasses.join(" ")}>
        <div>{children}</div>
      </div>
    </Link>
  );
}

export default LinkTo;
{
}
