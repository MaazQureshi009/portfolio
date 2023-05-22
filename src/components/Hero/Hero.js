import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hi, I'm Maaz Qureshi<br />
      A Front-End Web Developer
    </SectionTitle>
    <a href="Resume.pdf">
    <Button>Download CV</Button>
    </a>
  </LeftSection>
  </Section>
);

export default Hero;