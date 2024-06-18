import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 bg-card opacity-50">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-semibold opacity-150">Jonathan Hachette</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/Jonathan-Hachette"
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="www.linkedin.com/in/jonathan-hachette-b82522142"
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
          >
            <LinkedinIcon size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
