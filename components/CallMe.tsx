/* eslint-disable @next/next/no-img-element */
import { LucideIcon } from "lucide-react";

type CallMeProps = {
  Logo: LucideIcon;
  name: string;
  description: string;
};

export const CallMe = ({ Logo, name, description }: CallMeProps) => {
  return (
    <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded w-full">
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <Logo />
      </span>
      <div>
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
