import IconProps from "../core/types/IconProps";
import WithProps from "../core/WithProps";

function Lock(props: IconProps) {
  return (
    <WithProps {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className={props?.classes?.join(" ")}
      >
        <path d="M24 14v-4a8 8 0 0 0-16 0v4a3.24 3.24 0 0 0-3 3.21v9.54A3.23 3.23 0 0 0 8.23 30h15.54A3.23 3.23 0 0 0 27 26.77v-9.54A3.24 3.24 0 0 0 24 14zM16 4a6 6 0 0 1 6 6v4H10v-4a6 6 0 0 1 6-6zm9 22.77A1.23 1.23 0 0 1 23.77 28H8.23A1.23 1.23 0 0 1 7 26.77v-9.54A1.23 1.23 0 0 1 8.23 16h15.54A1.23 1.23 0 0 1 25 17.23z" />
      </svg>
    </WithProps>
  );
}

export default Lock;
