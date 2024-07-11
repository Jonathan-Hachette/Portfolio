import { Section } from "./Section";
import { JavaScriptLogo } from "./icons/JavaScriptLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { StrapiLogo } from "./icons/StrapiLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { VueLogo } from "./icons/VueLogo";
import { Badge } from "./ui/badge";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">My stack</h2>
      <div className="flex flex-row max-md:flex-col gap-8">
        <div className="flex max-md:flex-col gap-4">
          <div className="flex-1 max-md:flex-col gap-4">
            <div className="flex flex-1 flex-col gap-4">
              <JavaScriptLogo size={42} />
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Js</h3>
              <p className="text-sm text-muted-foreground">My main programming language.</p>
            </div>
          </div>
        </div>
        <div className="flex-1 max-md:flex-col gap-4">
          <div>
            <div className="flex flex-col gap-4">
              <StrapiLogo size={42} />
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Strapi</h3>
              <p className="text-sm text-muted-foreground">
                Customization of the CRUD and database.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 max-md:flex-col gap-4">
          <div>
            <div className="flex flex-col gap-4">
              <ReactLogo size={42} />
              <h3 className="text-2xl font-semibold tracking-tight mb-2">React</h3>
              <p className="text-sm text-muted-foreground">
                I want to develop my React skills with a study-contract.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 max-md:flex-col gap-4">
          <div>
            <div className="flex flex-col gap-4">
              <TailwindLogo size={42} />
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Tailwind css</h3>
              <p className="text-sm text-muted-foreground">First steps with a css framework.</p>
            </div>
          </div>
        </div>
        <div className="flex-1 max-md:flex-col gap-4">
          <div>
            <div className="flex flex-col gap-4">
              <VueLogo size={42} />
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Vue</h3>
              <p className="text-sm text-muted-foreground">Learning in progress this framework.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
