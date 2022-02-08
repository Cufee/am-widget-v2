import { useState } from "react";

export const useToast = () => {
  const [toast, setToast] = useState("");

  return toast;
};
