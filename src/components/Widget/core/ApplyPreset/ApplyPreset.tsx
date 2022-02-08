// Components
import Default from "../../styled/presets/default/Default";
import Minimal from "../../styled/presets/minimal/Minimal";

interface ApplyPresetProps {
  name: string;
}

function ApplyPreset({ name }: ApplyPresetProps) {
  switch (name) {
    case "minimal":
      return Minimal;

    default:
      return Default;
  }
}

export default ApplyPreset;
