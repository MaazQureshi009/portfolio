import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';


const Timeline = () => {

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      As a frontend developer, my passion for creating visually stunning and interactive user interfaces is only matched by my dedication to writing clean, maintainable code. With a strong foundation in HTML, CSS, and JavaScript, I have honed my skills in modern frontend framework like React.js, always striving to stay up-to-date with the latest web technologies.
      </SectionText>
      <SectionDivider/>
    </Section>
  );
};

export default Timeline;
