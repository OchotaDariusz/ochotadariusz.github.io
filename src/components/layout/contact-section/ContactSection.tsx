import React from 'react';
import { useHandleScrollAnimation } from '@app/hooks';

export const ContactSection = () => {
  const sectionRef = useHandleScrollAnimation();

  return (
    <section id="contact" ref={sectionRef}>
      <h2>Contact</h2>
    </section>
  );
};
