import React from 'react';
import { useHandleScrollAnimation } from '@app/hooks';

export const PortfolioSection = () => {
  const sectionRef = useHandleScrollAnimation();

  return (
    <section id="portfolio" ref={sectionRef}>
      <h2>Portfolio</h2>
    </section>
  );
};
