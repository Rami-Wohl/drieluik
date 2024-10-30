import type { SVGProps } from "react";

export default function Circle1Icon({ ...props }: SVGProps<SVGSVGElement>) {
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
      <path d="M12.5 2.2a10.3 10.3 0 1 0 10.3 10.3A10.299 10.299 0 0 0 12.5 2.2zm0 19.6a9.3 9.3 0 1 1 9.3-9.3 9.31 9.31 0 0 1-9.3 9.3zM13 17h-1V8.383l-1.978.805-.377-.926L13 6.896z" />
    </svg>
  );
}
