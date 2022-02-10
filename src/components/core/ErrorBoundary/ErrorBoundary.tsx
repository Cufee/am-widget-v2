import { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useToast } from "../../hooks/useToast/useToast";
import Error from "../../pages/Error/Error";

function ErrorBoundaryWrapper({ children }: PropsWithChildren<{}>) {
  const { addToast } = useToast();

  const handleError = (
    error: Error,
    info: {
      componentStack: string;
    }
  ) => {
    addToast({
      content: {
        title: "Error",
        message: `${error.message}`,
      },
      type: "error",
    });
  };

  return (
    <ErrorBoundary FallbackComponent={Error} onError={handleError}>
      {children}
    </ErrorBoundary>
  );
}

export default ErrorBoundaryWrapper;
