import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Link as RouteLink } from "react-router-dom";

interface LinkProps {
  imgSrc: string;
  alt: string;
  href: string;
  label: string;
  newTab?: boolean;
  className?: string;
}

const Link = ({
  imgSrc,
  alt,
  href,
  label,
  newTab = false,
  className,
}: LinkProps) => {
  return (
    <RouteLink
      to={href}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      <div className="flex flex-col h-[275px] justify-between items-center gap-4 hover:scale-105 transition-transform duration-300">
        <img src={imgSrc} alt={alt} className={cn("w-[200px]", className)} />
        <Button className="p-6 tracking-wider text-lg w-36 shadow-sm">
          {label}
        </Button>
      </div>
    </RouteLink>
  );
};

export default Link;
