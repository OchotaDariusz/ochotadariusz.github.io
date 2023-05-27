import React from 'react';

import { useHandleScrollAnimation } from '@app/hooks';

const AboutSection = () => {
  const sectionRef = useHandleScrollAnimation();

  return (
    <section id="about" ref={sectionRef}>
      <h2>About</h2>
      <p>
        I'm fresh from a one-year Full Stack developer course by{' '}
        <a href="https://codecool.com">
          <b>Codecool</b>
        </a>
        . I have experience working on Backend in <b>Java/Spring</b>,{' '}
        <b>Node/Express</b>, <b>Node/NestJS</b>, <b>Python/Flask</b>,
        environments with <b>SQL</b> and <b>NoSQL</b> databases.
      </p>{' '}
      <p>
        I also have experience working on Frontend with pure{' '}
        <b>JavaScript/CSS/HTML </b>
        and with frameworks like <b>React</b>.
      </p>
      <p>
        I am also open to new technology and changes, I am communicative and
        helpful and I can deal with stress at work. Also I know the{' '}
        <b>Agile(Scrum/Kanban)</b> methodology. I'm passionate about
        programming, music and web technologies.
      </p>
    </section>
  );
};

export default AboutSection;
