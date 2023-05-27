import classes from './Footer.module.scss';
import GithubIcon from '@app/components/icons/GithubIcon';
import LinkedinIcon from '@app/components/icons/LinkedinIcon';
import MailIcon from '@app/components/icons/MailIcon';

export const Footer = () => {
  return (
    <footer className={classes['footer']}>
      <div>
        <div>
          <a
            href="https://github.com/OchotaDariusz/"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/deadjim/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:ochota.dariusz@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MailIcon />
          </a>
        </div>
      </div>
      <div>&copy; 2023 Ochota Dariusz</div>
    </footer>
  );
};
