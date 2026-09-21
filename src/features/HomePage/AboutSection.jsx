import React, { useEffect, useRef } from 'react';
import { Heading, TechCard, ContentContainer } from '../../components';
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
  IconGSU,
} from '../../components/icons';
import { aboutId } from './navConfig';
import { useHomeContext } from './homeContext';

// TODO: have tech section with a button that can switch between text and icons
const AboutSection = () => {
  const sectionRef = useRef(null);
  const {
    sectionScroller: {
      registerScrollable,
    },
  } = useHomeContext();

  useEffect(() => {
    if (sectionRef.current) registerScrollable(sectionRef, aboutId); // TODO: need breakpoints for threshold. Need lower threshold the larger the section gets
  }, [sectionRef.current]);

  return (
    <ContentContainer className="sectionContainer pad-4-tb pad-3-lr">
      <div
        ref={sectionRef}
        className="content-container margin-auto-lr pad-4-tb"
      >
        <Heading
          level={2}
          className="uppercase pad-1-b margin-3-b border-b-1 border-fade-r"
        >
          About
        </Heading>
        <div className="row pad-3-t">
          <div className="col-6-md-up pad-1-r-md-up">
            <Heading
              level={3}
              className="body font-weight-6 condensed uppercase color-text-accent"
            >
              introduction
            </Heading>
            <div className="pad-2-t">
              Hello there, I'm <span className="color-text-accent">Billy Brewer</span>. I'm a front end engineer with a keen eye for detail who excels at writing quality, reusable code.
            </div>
            <div className="pad-2-t">
              Since I've started coding, I've always been drawn to creating engaging visual experiences, which lead me to being a front end engineer.
            </div>

            <Heading
              level={3}
              className="body font-weight-6 condensed uppercase color-text-accent pad-4-t"
            >
              education
            </Heading>
            <div className="text-align-center display-inline-block pad-2 margin-3-r margin-2-tb border-2 border-radius-md color-border-primary color-bg-surface">
              <IconGSU aria-hidden={true} />
              <div className="italic">Georgia Southern University</div>
              <div>BS in Computer Science</div>
              <div>2018</div>
            </div>
            <div className="text-align-center display-inline-block pad-2 margin-2-tb border-2 border-radius-md color-border-primary color-bg-surface">
              <IconGSU aria-hidden={true} />
              <div className="italic">Georgia Southern University</div>
              <div>BS in Physics</div>
              <div>2018</div>
            </div>

            <Heading
              level={3}
              className="body font-weight-6 condensed uppercase color-text-accent pad-4-t"
            >
              experience
            </Heading>
            <div className="pad-2-t">
              <div className="flex flex-justify-between">
                <span className="color-text-accent pad-1-r">Cognizant</span>
                <span>Feb. 2020 - Feb. 2026</span>
              </div>
              <span className="italic">Sr. Software Engineer</span>
            </div>
            <div className="pad-3-t">
              <div className="flex flex-justify-between">
                <span className="color-text-accent pad-1-r">Revature LLC</span>
                <span>Oct. 2018 - Feb. 2020</span>
              </div>
              <span className="italic">Software Engineer</span>
            </div>
            <div className="pad-3-t">
              <div className="flex flex-justify-between">
                <span className="color-text-accent pad-1-r">Revature LLC</span>
                <span>Aug. 2018 - Oct. 2018</span>
              </div>
              <span className="italic">Trainee</span>
            </div>
          </div>

          <div className="col-6-md-up pad-1-l-md-up">
            <Heading
              level={3}
              className="body font-weight-6 condensed uppercase color-text-accent text-align-center pad-3-t-sm-down"
            >
              Technologies
            </Heading>
            <div className="text-align-center">
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
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default AboutSection;
