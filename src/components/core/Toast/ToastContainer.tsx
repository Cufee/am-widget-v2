import { createPortal } from "react-dom";
import Toast, { ToastProps } from "./Toast";

export interface ToastContainerProps {
  toasts: ToastProps[];
}

export const ToastContainer = ({ toasts }: ToastContainerProps) => {
  return createPortal(
    <div className="absolute top-0 right-0 flex flex-col gap-1 m-2 z-50">
      {toasts.map((item) => (
        <Toast key={item.id} {...item} />
      ))}
    </div>,
    document.body
  );
};
