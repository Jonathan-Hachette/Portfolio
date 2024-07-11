import { MailCheck, PhoneOutgoing } from "lucide-react";
import { CallMe } from "./CallMe";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import { Badge } from "./ui/badge";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge>Contact me</Badge>
      <h2 className="pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        I will prove you I am the right choice.
      </h2>
      <div className="flex max-md:flex-col w-full gap-4 content-center">
        <div className="flex-1 w-full ">
          <ContactCard
            Logo={MailCheck}
            url="mailto:jonathan.hachette@gmail.com"
            name="jonathan.hachette@gmail.com"
            description="Email me for any informations"
          />
        </div>
        <div className="flex-1 w-full">
          <CallMe Logo={PhoneOutgoing} name="06 14 77 30 65" description="Or call me" />
        </div>
      </div>
    </Section>
  );
};
