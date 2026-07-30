import React, { useEffect, useRef } from 'react'
import { Heading, ContentContainer } from '../../components';
import { projectsId } from './navConfig';

const ProjectsSection = (props) => {
  const { sectionScroller: { registerRef } } = props;
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) registerRef(sectionRef, projectsId);
  }, [sectionRef.current]);

  return (
    <div
      ref={sectionRef}
      className="sectionContainer content-container margin-auto-lr pad-4-tb"
    >
      <Heading level={2} className="pad-1-b pad-4-t margin-3-b border-b-1 border-fade-r margin-3-lr">
        Projects
      </Heading>
      <ContentContainer className="margin-3-t pad-3 border-radius-lg">
        <img src="./JBBFencing.png" className="projectImage" />
        <Heading level={3} className="pad-3-t">
          JBB Fencing & Site Services ( Under Construction )
        </Heading>
        <div className="pad-1-t body-small italic">
          <span className="color-text-accent">Stack:</span> React, JavaScript, HTML, SASS, AWS
        </div>
        <div className="pad-3-t">
          JBB Fencing & Site Services is a family owned startup fencing company that I am building a website for.
        </div>
        <div className="text-align-center pad-1-tb">
          <a>
            Visit
          </a>
        </div>
      </ContentContainer>
    </div>
  );
};

export default ProjectsSection;
