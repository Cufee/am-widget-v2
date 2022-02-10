import { PropsWithChildren } from "react";
import InputProps from "../types/InputProps";
import InputContainer from "./InputContainer";
import { omit } from "lodash";

interface TextInputProps extends InputProps {
  onChange?: (text: string) => void;
}

function TextInput(props: PropsWithChildren<TextInputProps>) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e.target.value || "");
    }
  };
  return (
    <InputContainer {...omit(props, "onChange")}>
      {props.children && (
        <div className="flex p-2 flex-grow bg-neutral justify-center">
          {props.children}
        </div>
      )}
      <div className="flex flex-grow justify-center overflow-hidden">
        <input
          className={`p-2 bg-base-light w-full text-center`}
          value={props.value}
          onChange={onChange}
        />
      </div>
    </InputContainer>
  );
}

export default TextInput;
