/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Code, Copy, Mail, MailCheck, PhoneOutgoing, Server, User } from "lucide-react";
import { SideProject } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { CallMe } from "./CallMe";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start radius gap-4">
      <div className="flex-[2] w-full ">
        <Card className="flex-[1] p-4 pb-12 flex flex-col gap-2 w-full">
          <p className="text-xl font-semibold ">Projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="flex-[2] w-full flex flex-col h-full gap-4">
        <Card className="p-3 flex-1 h-full">
          <p className="text-xl font-semibold">Training</p>
          <div className="flex flex-col gap-4 p-4">
            <TrainingCard
              image="https://media.licdn.com/dms/image/C560BAQENN-_uQarUgQ/company-logo_100_100/0/1630621116083/le_reacteur_logo?e=1726704000&v=beta&t=P9wWcxSD9FzH0dDM8UviWk2CJEPTdeqZm5ryQlHB-fk"
              name="Le Reacteur"
              description="RNCP"
              date="Mai 2024 - Juillet 2024"
            />
            <TrainingCard
              image="https://media.licdn.com/dms/image/C4E0BAQGlmFPtqQCQiQ/company-logo_100_100/0/1675788561155/omneseducation_logo?e=1726704000&v=beta&t=-zyJENb3wZRONGL-UJ0S7hi02iE_rqKP1scRwA8wxDs"
              name="OMNES EDUCATION"
              description="Msc Wine Marketing & Management"
              date="2018 - 2020"
            />
            <TrainingCard
              image="https://media.licdn.com/dms/image/C4E0BAQGlmFPtqQCQiQ/company-logo_100_100/0/1675788561155/omneseducation_logo?e=1726704000&v=beta&t=-zyJENb3wZRONGL-UJ0S7hi02iE_rqKP1scRwA8wxDs"
              name="OMNES EDUCATION"
              description="Bachelor Wine and Spirits"
              date="2017 - 2018"
            />
          </div>
        </Card>
        <Card className="p-3 flex-1">
          <p className="text-xl font-semibold">Contact me</p>
          <div className="flex flex-col gap-4 p-2">
            <ContactCard
              Logo={MailCheck}
              url="mailto:jonathan.hachette@gmail.com"
              name="jonathan.hachette@gmail.com"
              description="Email me for any informations"
            />
            <CallMe Logo={PhoneOutgoing} name="06 14 77 30 65" description="Or call me" />
          </div>
        </Card>
      </div>
    </Section>
  );
};





type TrainingProps = {
  image: string;
  name: string;
  description: string;
  date: string;
};

 const TrainingCard = ({ image, name, description, date }: TrainingProps) => {
  return (
    <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
      <span className=" text-accent-foreground p-3 rounded-sm">
        <img src={image} alt={name} className="w-10 h-10 object-contain"/>
      </span>
      <div>
        <p className="text-l font-semibold">{name}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <div className="ml-auto">
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
    </div>
  );
};


const CONTACT_CARD = [
  {
    Logo: Mail,
    title: "Mail",
    description: "jonathan.hachette@gmail.com",
  },
  {
    Logo: PhoneOutgoing,
    title: "Phone",
    description: "06 14 77 30 65",
  },
];

const SIDE_PROJECTS = [
  {
    Logo: User,
    title: "Portfolio",
    description: "First portfolio using Next.Js, Tailwindcss, React as a self-taught project.",
    url: "https://github.com/Jonathan-Hachette/Portfolio",
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
      "Using Strapi / Northflank hosting. Customization of the CRUD to extend the controllers. ",
    url: "https://github.com/Jonathan-Hachette/clone-le-bon-coin",
  },
  {
    Logo: Copy,
    title: "Clone EasyJet (wip)",
    description:
      "Project with le Reacteur in HTML, CSS work in progress. Will be continued with Vue.js. ",
    url: "https://github.com/Jonathan-Hachette/clone-easyJet",
  },
];
