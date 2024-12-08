import type { SVGProps } from "react";

export default function CyclusIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill ?? "none"}
      viewBox="0 0 505 505"
      height={props.height ?? "24"}
      width={props.width ?? "24"}
      strokeWidth={1.5}
      stroke={props.stroke ?? "currentColor"}
    >
      <circle fill="#84DBFF" cx="252.5" cy="252.5" r="252.5" />
      <g>
        <path
          fill="#FFFFFF"
          d="M196.6,88.3c-67.8,23.1-116.8,87.1-117.5,162.4h35.5c0.8-65.9,48.1-120.8,110.5-133.4L196.6,88.3z    M425.9,246.8h-35.5c0.1,1.9,0.1,3.7,0.1,5.6c0,66.2-46.9,121.8-109.3,135l28.8,28.7c67.5-23.8,116-88.2,116-163.7   C425.9,250.6,425.9,248.7,425.9,246.8z M117.5,280.8l-28.8,28.8c22.7,65,83,112.4,154.7,116.1v-35.5   C181.1,386.1,130,340.5,117.5,280.8z M260.4,79.2v35.5c62.8,3.6,114.5,49.3,127.1,109.3l28.8-28.8   C393.4,130.1,332.6,82.5,260.4,79.2z"
        />
        <polygon
          fill="#FFFFFF"
          points="461.7,279.3 408.2,225.7 354.7,279.3  "
        />
        <polygon fill="#FFFFFF" points="43.3,225.7 96.8,279.3 150.3,225.7  " />
        <polygon fill="#FFFFFF" points="279.3,43.3 225.7,96.8 279.3,150.3  " />
        <polygon
          fill="#FFFFFF"
          points="225.7,461.7 279.3,408.2 225.7,354.7  "
        />
      </g>
      <path
        fill="#FD8469"
        d="M252.5,318.8c-36.6,0-66.3-29.7-66.3-66.3c0-36.5,29.7-66.3,66.3-66.3s66.3,29.7,66.3,66.3  C318.8,289,289.1,318.8,252.5,318.8z M252.5,205.9c-25.7,0-46.6,20.9-46.6,46.6s20.9,46.6,46.6,46.6s46.6-20.9,46.6-46.6  S278.2,205.9,252.5,205.9z"
      />
    </svg>
  );
}