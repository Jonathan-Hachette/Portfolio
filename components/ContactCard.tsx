/* eslint-disable @next/next/no-img-element */
import { LucideIcon } from "lucide-react";

type ContactCardProps = {
  Logo: LucideIcon;
  name: string;
  description: string;
  url?: string;
};



export const ContactCard = ({Logo, name, description, url }: ContactCardProps) => {
  return (
    <a href="mailto:jonathan.hachette@gmail.com">
      <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
        <span className="bg-accent text-accent-foreground p-3 rounded-sm">
          <Logo />
        </span>
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </a>
  );
};
