import { useEffect } from "react";
import { useToast } from "../../hooks/useToast/useToast";

const typeClasses = {
  info: "bg-blue-400 rounded-full",
  warning: "bg-yellow-400 rounded-full",
  error: "bg-red-400 rounded-full",
  success: "bg-green-400 rounded-full",
};

export interface ToastProps {
  content: {
    title: string;
    message: string;
    context?: string;
  };
  id: string;
  timeout?: number;
  type: "success" | "error" | "warning" | "info";
}

function Toast({
  id,
  type,
  timeout,
  content: { title, message, context },
}: ToastProps) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, timeout || 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast, timeout]);

  return (
    <div
      id="toast-default"
      className="relative flex items-center gap-4 w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
    >
      <div className={`absolute w-3 h-3 -top-1 -left-1 ${typeClasses[type]}`} />
      <div className="flex flex-col">
        <div className="text-sm font-bold">{title}</div>
        <div className="text-sm font-normal">{message}</div>
        {context && (
          <div className="text-sm font-normal text-gray-500">{context}</div>
        )}
      </div>
      <button
        onClick={() => removeToast(id)}
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default Toast;
