import type { SVGProps } from "react";

export default function Circle3Icon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill ?? "none"}
      viewBox="0 0 24 24"
      height={props.height ?? "24"}
      width={props.width ?? "24"}
      strokeWidth={1.5}
      stroke={props.stroke ?? "currentColor"}
    >
      <path d="M12.5 2.2a10.3 10.3 0 1 0 10.3 10.3A10.299 10.299 0 0 0 12.5 2.2zm0 19.6a9.3 9.3 0 1 1 9.3-9.3 9.31 9.31 0 0 1-9.3 9.3zm0-4.8a3.086 3.086 0 0 1-3.25-2.882h1A2.093 2.093 0 0 0 12.5 16a2.093 2.093 0 0 0 2.25-1.882c0-.997-.967-1.748-2.25-1.748v-1c1.283 0 2.25-.697 2.25-1.62A2.05 2.05 0 0 0 12.5 8a2.05 2.05 0 0 0-2.25 1.75h-1A3.035 3.035 0 0 1 12.5 7a3.035 3.035 0 0 1 3.25 2.75 2.458 2.458 0 0 1-1.313 2.131 2.598 2.598 0 0 1 1.313 2.237A3.086 3.086 0 0 1 12.5 17z" />
    </svg>
  );
}
