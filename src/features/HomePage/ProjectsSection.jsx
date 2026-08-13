import React, { useEffect, useRef } from 'react'
import { Heading, ContentContainer } from '../../components';
import { projectsId } from './navConfig';
import { useHomeContext } from './homeContext';

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const {
    sectionScroller: {
      registerScrollable,
    },
  } = useHomeContext();

  useEffect(() => {
    if (sectionRef.current) registerScrollable(sectionRef, projectsId);
  }, [sectionRef.current]);

  return (
    <div className="pad-3-lr">
      <div
        ref={sectionRef}
        className="sectionContainer content-container margin-auto-lr pad-4-tb"
      >
        <Heading
          level={2}
          className="pad-1-b pad-4-t margin-3-b border-b-1 border-fade-r uppercase"
        >
          Projects
        </Heading>
        <ContentContainer className="margin-3-t pad-3 border-radius-lg">
          <img src="./JBBFencing.png" className="projectImage" aria-hidden={true} />
          <Heading level={3} className="pad-3-t">
            JBB Fencing & Site Services ( Under Construction )
          </Heading>
          <div className="pad-1-t body-small italic">
            <span className="color-text-accent">Stack:</span> React, JavaScript, HTML, SASS, AWS ( S3, CloudFront, API Gateway, Lambda, SES )
          </div>
          <div className="pad-3-t">
            JBB Fencing & Site Services is a family owned startup fencing company that I am building a website for.
          </div>
          <div className="text-align-center pad-2-b pad-4-t">
            <a
              href="https://jbbfencing.com"
              target="_blank"
              className="heading-5 body-bold"
            >
              Visit
            </a>
          </div>
        </ContentContainer>
      </div>
    </div>
  );
};

export default ProjectsSection;
