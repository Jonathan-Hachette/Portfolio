import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Code, Copy, Home, LucideIcon, Server, User } from "lucide-react";
import Link from "next/link";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start radius gap-4">
      <div className="flex-[3] w-full">
        <Card className="flex-[2] p-4 flex flex-col gap-2 w-full">
          <p className="text-lg font-semibold">Projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col h-full gap-4">
        <Card className="p-4 flex-1 h-full">Formation</Card>
        <Card className="p-4 flex-1">Contact me </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS = [
  {
    Logo: User,
    title: "Portfolio",
    description: "First portfolio using Next.Js, Tailwindcss, React as a self-taught project.",
    url: "https://github.com/Jonathan-Hachette/ProjetNaturopathie",
  },
  {
    Logo: Code,
    title: "Naturopathy",
    description: "First Website project using HTML, CSS, JavaScript as a self-taught project.",
    url: "https://github.com/Jonathan-Hachette/ProjetNaturopathie",
  },
  {
    Logo: Server,
    title: "Backend Le Bon Coin",
    description:
      "Backend development using Strapi, hosting with Northflank. This project implies customization of the CRUD to extend the controllers ",
    url: "https://github.com/Jonathan-Hachette/ProjetNaturopathie",
  },
  {
    Logo: Copy,
    title: "Clone EasyJet (wip)",
    description:
      "Project with le Reacteur in HTML, CSS work in progress. Will be continued with Vue.js ",
    url: "https://github.com/Jonathan-Hachette/ProjetNaturopathie"
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
