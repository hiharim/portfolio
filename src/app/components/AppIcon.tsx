import { cn } from "@/lib/utils";

interface AppIconProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  isProject?: boolean;
  onClick?: () => void;
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-16 h-16",
  lg: "w-20 h-20",
  xl: "w-24 h-24",
};

export const AppIcon = ({
  src,
  alt,
  size = "md",
  className,
  isProject = false,
  onClick,
}: AppIconProps) => {
  return (
    <div
      className={cn(
        "relative rounded-[22%] overflow-hidden transition-all duration-300 cursor-pointer",
        "shadow-app-icon hover:shadow-app-icon-hover hover:scale-110",
        sizeClasses[size],
        isProject && "ring-2 ring-primary ring-offset-2 ring-offset-background",
        className
      )}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default AppIcon;
