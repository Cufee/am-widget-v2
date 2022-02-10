import { useContext } from "react";
import { ApiError } from "../../api/core/types/ApiResponse";
import { ToastContext } from "../../contexts/ToastContext/ToastContext";

export function useToast() {
  const { addToast, removeToast } = useContext(ToastContext);
  const addFromError = (error: ApiError) => {
    addToast({
      content: {
        title: "Something did not work...",
        message: error.message,
        context: error.context,
      },
      type: "error",
    });
  };
  return { addToast, removeToast, addFromError };
}
