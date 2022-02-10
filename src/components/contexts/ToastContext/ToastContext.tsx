import { createContext, PropsWithChildren, useCallback, useState } from "react";
import { ToastProps } from "../../core/Toast/Toast";
import { ToastContainer } from "../../core/Toast/ToastContainer";

interface ToastContextProps {
  addToast: (toast: Omit<ToastProps, "id">) => void;
  removeToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextProps>(
  {} as ToastContextProps
);

export const ToastProvider = ({ children }: PropsWithChildren<{}>) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback(
    (toast: Omit<ToastProps, "id">) => {
      setToasts((current) => {
        return [...current, { ...toast, id: makeId() } as ToastProps];
      });
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (id: string) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id));
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
};

const makeId = () => {
  return `${Math.random() * 100}-${Date.now()}`;
};
