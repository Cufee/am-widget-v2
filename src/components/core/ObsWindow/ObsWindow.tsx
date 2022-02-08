// Libraries
import styled from "styled-components";
// Libraries - Types
import { PropsWithChildren } from "react";
import Circle from "../Icons/Circle/Circle";

const StyledDiv = styled.div`
  * {
    min-width: fit-content;
  }
  min-height: 25rem;
`;

function ObsWindow({ children }: PropsWithChildren<{}>) {
  return (
    <StyledDiv className="h-full flex flex-col items-center bg-gray-700 rounded-md overflow-hidden relative select-none pointer-events-none w-full">
      {/* Title Bar */}
      <div className="w-full h-6 items-center bg-gray-900 text-gray-700 text-center text-sm flex flex-row justify-center relative z-10">
        <div className="absolute flex flex-row left-2 top-1/3 gap-1">
          <Circle size="0.5em" classes={["bg-gray-700"]} />
          <Circle size="0.5em" classes={["bg-gray-700"]} />
          <Circle size="0.5em" classes={["bg-gray-700"]} />
        </div>
        <div>OBS Studio</div>
      </div>

      {/* Canvas */}
      <div className="h-full flex items-center relative z-10 flex-grow">
        <div className="m-2 rounded-xl overflow-hidden">{children}</div>
      </div>

      {/* Settings */}
      <div className="flex flex-row w-full h-24 gap-2 bg-gray-800 p-2 z-10">
        <div className=" w-1/5 bg-gray-700 rounded flex flex-col gap-1 p-2 justify-start">
          <div
            className="px-2 rounded bg-gray-500 h-4 w-full flex justify-center items-center whitespace-nowrap"
            style={{ fontSize: "0.5em" }}
          >
            Aftermath ❤️
          </div>
        </div>
        <div className="w-1/5 bg-gray-700 rounded flex flex-col gap-1 p-2 justify-start">
          <div className="rounded bg-gray-500 h-2 w-full"></div>
          <div className="rounded bg-gray-600 h-2 w-full"></div>
        </div>
        <div className="w-1/5 bg-gray-700 rounded flex flex-col gap-1 p-2 justify-start">
          <div className="rounded bg-green-600 h-1 w-full"></div>
          <div className="flex flex-row gap-1">
            <div className="w-full rounded bg-blue-500 h-1"></div>
            <div className="rounded-full bg-red-500 h-1 w-1"></div>
          </div>
        </div>
        <div className=" flex-grow bg-gray-700 rounded flex flex-col gap-1 p-2 justify-center">
          <div className="flex rounded bg-gray-600 h-3 w-full items-center justify-end"></div>
          <div className="rounded bg-gray-600 h-3 w-full"></div>
          <div className="rounded bg-gray-600 h-3 w-full"></div>
        </div>
      </div>

      {/* Background Alteration */}
      <div className="w-1/3 h-full absolute bg-gray-300 z-0 right-2/3" />
      <div className="w-1/3 h-full absolute bg-gray-900 z-0 right-0" />
    </StyledDiv>
  );
}

export default ObsWindow;
