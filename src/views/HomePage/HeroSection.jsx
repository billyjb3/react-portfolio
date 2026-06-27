import React from 'react';
import { ButtonIcon, Marquee } from '@billyjb3/global-react';
import { Heading, TechCard, ButtonPrimary } from '../../components';
import {
  IconJavascript,
  IconReact,
  IconHtml,
  IconCss,
  IconSass,
  IconVite,
  IconAws,
  IconGit,
  IconGraphql,
  IconNodejs,
  IconJest,
  IconSelenium,
  IconPixi,
  IconLinkedin,
  IconGithub,
  IconGmail,
} from '../../icons';

const HeroSection = () => {
  return (
    <div className="content-container margin-auto-lr pad-4-t heroContainer text-align-center">
      <Heading level={1}>
        Hello, I'm <span className="color-text-accent">Billy</span>
      </Heading>
      <Heading level={2} className="pad-3-t">
        I'm a creative and innovative Front-End Web Developer.
      </Heading>
      <div className="pad-4-t">
        <ButtonPrimary className="margin-1-lr">Resume</ButtonPrimary>
        <ButtonPrimary className="margin-1-lr">Projects</ButtonPrimary>
        <ButtonPrimary className="margin-1-lr">Contact</ButtonPrimary>
      </div>
      <div className="pad-3-t flex flex-justify-center">
        <ButtonIcon><IconLinkedin /></ButtonIcon>
        <ButtonIcon><IconGithub /></ButtonIcon>
        <ButtonIcon><IconGmail /></ButtonIcon>
      </div>
      <Marquee duration={50E3} className="margin-4-t">
        <TechCard Icon={IconJavascript} label="javascript" />
        <TechCard Icon={IconReact} label="react" />
        <TechCard Icon={IconHtml} label="html" />
        <TechCard Icon={IconCss} label="css" />
        <TechCard Icon={IconSass} label="sass" />
        <TechCard Icon={IconVite} label="vite" />
        <TechCard Icon={IconAws} label="aws" />
        <TechCard Icon={IconGit} label="git" />
        <TechCard Icon={IconGraphql} label="graphql" />
        <TechCard Icon={IconNodejs} label="nodejs" />
        <TechCard Icon={IconJest} label="jest" />
        <TechCard Icon={IconSelenium} label="selenium" />
        <TechCard Icon={IconPixi} label="pixijs" />
      </Marquee>
    </div>
  );
};

export default HeroSection;

