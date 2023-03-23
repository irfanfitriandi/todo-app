import { IconProps } from "../IconProps";

const BackIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.66675 16L14.6667 24"
        stroke="#111111"
        stroke-width="5"
        stroke-linecap="square"
      />
      <path
        d="M6.66675 16L14.6667 8"
        stroke="#111111"
        stroke-width="5"
        stroke-linecap="square"
      />
    </svg>
  );
};

export default BackIcon;
