import Image from "next/image";

export interface ResponsiveImageProps {
  src: string;
  alt: string;
  description?: string;
  className?: string;
}

export const ResponsiveImage = ({
  src,
  alt,
  description,
  className,
}: ResponsiveImageProps) => {
  return (
    <div
      className={`relative mb-10 mt-6 flex h-full items-center justify-center rounded-md lg:my-12 ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        width={128}
        height={128}
        className="h-32 w-32 rounded-md border-2 border-black border-opacity-30 object-cover md:h-48 md:w-48 lg:h-64 lg:w-64"
      />
      {description && (
        <span className="absolute -bottom-4 font-sans text-xs tracking-[1px] text-[#333333] text-opacity-90">
          {description}
        </span>
      )}
    </div>
  );
};
