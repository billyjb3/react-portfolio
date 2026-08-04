import React, { useEffect, useRef } from 'react';
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
import { heroId, projectsId, contactId } from './navConfig';
import { useHomeContext } from './homeContext';

const HeroSection = (props) => {
  const {
    sectionScroller: {
      registerRef,
      handleClick: scrollerClick,
    },
  } = props;
  const sectionRef = useRef(null);
  const { pageSettings: { showAnimations } } = useHomeContext();

  useEffect(() => {
    if (sectionRef.current) registerRef(sectionRef, heroId);
  }, [sectionRef.current]);

  return (
    <div className="pad-3-lr">
      <div
        ref={sectionRef}
        className="content-container margin-auto-lr pad-4-tb heroContainer text-align-center"
      >
        <Heading level={1} className="uppercase">
          Hello, I'm <span className="color-text-accent">Billy</span>
        </Heading>
        <Heading level={2} className="pad-3-t pad-4-b font-weight-6">
          I'm a creative and innovative Front-End Software Engineer.
        </Heading>
        <div className="pad-4-t">
          <ButtonPrimary
            isLink={true}
            href="./Billy Brewer Resume - public.pdf"
            className="margin-1"
          >
            Resume
          </ButtonPrimary>
          <ButtonPrimary
            className="margin-1"
            onClick={() => scrollerClick(projectsId)}
          >
            Projects
          </ButtonPrimary>
          <ButtonPrimary
            className="margin-1"
            onClick={() => scrollerClick(contactId)}
          >
            Contact
          </ButtonPrimary>
        </div>
        <div className="pad-3-t pad-4-b flex flex-justify-center">
          <ButtonIcon
            isLink={true}
            href="https://www.linkedin.com/in/billyjbrewer3"
          >
            <IconLinkedin />
          </ButtonIcon>
          <ButtonIcon
            isLink={true}
            href="https://github.com/billyjb3"
          >
            <IconGithub />
          </ButtonIcon>
          <ButtonIcon
            isLink={true}
            href="mailto:billyjbrewer3@gmail.com"
          >
            <IconGmail />
          </ButtonIcon>
        </div>
        {showAnimations.value && (
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
        )}
      </div>
    </div>
  );
};

export default HeroSection;

