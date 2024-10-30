import type { SVGProps } from "react";

export default function Circle2Icon({ ...props }: SVGProps<SVGSVGElement>) {
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
      <path d="M12.5 2.2a10.3 10.3 0 1 0 10.3 10.3A10.299 10.299 0 0 0 12.5 2.2zm0 19.6a9.3 9.3 0 1 1 9.3-9.3 9.31 9.31 0 0 1-9.3 9.3zM16 17H9v-.5c0-2.157 1.762-3.105 3.317-3.942 1.391-.748 2.592-1.394 2.592-2.721A1.983 1.983 0 0 0 12.696 8a2.692 2.692 0 0 0-1.983.69A2.772 2.772 0 0 0 10 10.46l-1 .01a3.76 3.76 0 0 1 .996-2.475 3.64 3.64 0 0 1 2.7-.995 2.976 2.976 0 0 1 3.213 2.837c0 1.924-1.657 2.815-3.118 3.602-1.273.685-2.482 1.335-2.74 2.561H16z" />
    </svg>
  );
}
