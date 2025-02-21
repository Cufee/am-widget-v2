import Headless from "../Widget/Widget";
import ObsWindow from "../../core/ObsWindow/ObsWindow";
import HeadlessProps from "../Widget/core/types/HeadlessProps";

interface PreviewProps extends HeadlessProps {}

function Preview({ style }: PreviewProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex text-white opacity-40 text-xl justify-center mb-2 uppercase">
        Preview
      </div>
      <div className="h-full">
        <ObsWindow>
          <Headless style={style} />
        </ObsWindow>
      </div>
    </div>
  );
}

export default Preview;
