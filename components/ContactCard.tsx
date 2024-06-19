/* eslint-disable @next/next/no-img-element */
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type ContactCardProps = {
  Logo: LucideIcon;
  name: string;
  description: string;
  url?: string;
};

export const ContactCard = ({ Logo, name, description, url }: ContactCardProps) => {
  return (
    <Link href="mailto:jonathan.hachette@gmail.com w-full">
      <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded w-full ">
        <span className="bg-accent text-accent-foreground p-3 rounded-sm">
          <Logo />
        </span>
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Link>
  );
};
