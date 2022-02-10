import { ReactElement } from "react";

export default interface SelectOption {
  label: string | ReactElement;
  disabled?: boolean;
  value: any;
}
