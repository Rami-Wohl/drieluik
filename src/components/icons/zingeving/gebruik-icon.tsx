import type { SVGProps } from "react";

export default function GebruikIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill ?? "none"}
      viewBox="0 0 512 512"
      height={props.height ?? "24"}
      width={props.width ?? "24"}
      strokeWidth={1.5}
      stroke={props.stroke ?? "currentColor"}
    >
      <circle fill="#FAD24D" cx="255.999" cy="255.999" r="255.999" />
      <path
        fill="#FF5B62"
        d="M230.063,419.77h56.27c6.672,0,12.131,5.459,12.131,12.131v76.572  c-13.813,2.306-27.995,3.525-42.463,3.525c-12.936,0-25.647-0.968-38.069-2.82V431.9C217.931,425.229,223.391,419.77,230.063,419.77  z"
      />
      <rect
        x="217.933"
        y="440.338"
        fill="#ED4C54"
        width="80.532"
        height="6.511"
      />
      <path
        fill="#666666"
        d="M275.075,390.855v28.914h-33.757v-28.914c5.552,0.556,11.181,0.842,16.878,0.842  C263.893,391.697,269.525,391.411,275.075,390.855L275.075,390.855z"
      />
      <path
        fill="#828282"
        d="M258.196,56.949c92.438,0,167.374,74.936,167.374,167.374s-74.936,167.374-167.374,167.374  S90.822,316.761,90.822,224.323S165.758,56.949,258.196,56.949z M258.196,84.608c77.163,0,139.715,62.552,139.715,139.715  c0,77.161-62.552,139.713-139.715,139.713c-77.161,0-139.713-62.552-139.713-139.713C118.484,147.16,181.036,84.608,258.196,84.608z  "
      />
      <g>
        <path
          fill="#FFDB66"
          d="M258.196,79.957c79.732,0,144.368,64.636,144.368,144.368c0,79.732-64.635,144.366-144.368,144.366   c-79.732,0-144.366-64.635-144.366-144.366S178.465,79.957,258.196,79.957z M258.196,87.691   c75.46,0,136.635,61.173,136.635,136.635s-61.173,136.632-136.635,136.632s-136.632-61.173-136.632-136.632   C121.564,148.865,182.737,87.691,258.196,87.691z"
        />
        <path
          fill="#FFDB66"
          d="M258.196,85.017c24.996,0,48.451,6.59,68.733,18.118c-17.44-8.019-36.845-12.498-57.3-12.498   c-75.84,0-137.324,61.482-137.324,137.326c0,67.167,48.225,123.061,111.938,134.972c-70.383-7-125.352-66.386-125.352-138.612   C118.892,147.385,181.26,85.017,258.196,85.017z"
        />
      </g>
      <path
        fill="#D1D2D4"
        d="M145.936,224.323c64.342-103.282,160.178-103.282,224.52,0  C306.114,327.605,210.278,327.605,145.936,224.323z"
      />
      <path
        fill="#FFFFFF"
        d="M145.936,224.323c64.342-94.698,160.178-94.698,224.52,0  C306.114,319.022,210.278,319.022,145.936,224.323z"
      />
      <circle fill="#21D0C3" cx="258.195" cy="224.321" r="54.632" />
      <circle fill="#15BDB2" cx="258.195" cy="224.321" r="38.175" />
      <circle fill="#666666" cx="258.195" cy="224.321" r="19.857" />
      <g>
        <circle fill="#FFFFFF" cx="231.118" cy="201.855" r="9.42" />
        <circle fill="#FFFFFF" cx="274.613" cy="240.769" r="6.411" />
      </g>
      <rect
        x="217.933"
        y="452.634"
        fill="#ED4C54"
        width="80.532"
        height="6.511"
      />
    </svg>
  );
}
