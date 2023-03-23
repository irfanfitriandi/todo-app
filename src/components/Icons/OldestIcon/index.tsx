import { IconProps } from "../IconProps";

const OldestIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 4.5H8.25"
        stroke="#16ABF8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 9H8.25"
        stroke="#16ABF8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 13.5H9.75"
        stroke="#16ABF8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.25 6.75L13.5 4.5L15.75 6.75"
        stroke="#16ABF8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.5 4.5V13.5"
        stroke="#16ABF8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default OldestIcon;
