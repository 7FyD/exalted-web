import { Button } from "../ui/button";

interface LinkProps {
  imgSrc: string;
  alt: string;
  href: string;
  label: string;
  newTab?: boolean;
}

const Link = ({ imgSrc, alt, href, label, newTab = false }: LinkProps) => {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      <div className="flex flex-col justify-center items-center gap-4 hover:scale-105 transition-transform duration-300">
        <img src={imgSrc} alt={alt} className="w-[200px]" />
        <Button className="p-6 tracking-wider text-lg w-36 shadow-sm">
          {label}
        </Button>
      </div>
    </a>
  );
};

export default Link;
