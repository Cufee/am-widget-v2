import { omit } from "lodash";
import { PropsWithChildren } from "react";
import tw from "tailwind-styled-components";
import InputProps from "../types/InputProps";
import SelectOption from "../types/SelectOption";
import InputContainer from "./InputContainer";

interface SelectInterfaceProps extends InputProps {
  options: SelectOption[];
  placeholder?: string;
  onChange: (text: string) => void;
}

const Select = tw.select`
bg-base-light
  text-center
  p-2
  flex
  flex-grow
  outline-none
`;

function SelectInput(props: PropsWithChildren<SelectInterfaceProps>) {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <InputContainer {...omit(props, "onChange")}>
      {props.children && (
        <div className="flex p-2 flex-grow bg-neutral justify-center">
          {props.children}
        </div>
      )}
      <Select onChange={onChange} value={props.value}>
        <option value="" disabled hidden>
          {props.placeholder || "Select an Option"}
        </option>
        {props.options.map((option, index) => {
          return (
            <option
              key={`${option.label}-${index}`}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          );
        })}
      </Select>
    </InputContainer>
  );
}

export default SelectInput;
