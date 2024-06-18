import { LucideIcon } from "lucide-react";
import Link from "next/link";

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};
export const SideProject = ({ Logo, title, description, url }: SideProjectProps) => {
  return (
    <Link
      href={url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-4 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm items-start">
        <Logo />
      </span>
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
};
