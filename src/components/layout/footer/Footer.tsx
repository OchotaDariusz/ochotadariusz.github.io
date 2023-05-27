import classes from './Footer.module.scss';
import githubIcon from '../../../assets/icons/github.svg';
import linkedinIcon from '../../../assets/icons/linkedin.svg';
import mailIcon from '../../../assets/icons/mail.svg';
import GithubIcon from '../../icons/GithubIcon';
import LinkedinIcon from '../../icons/LinkedinIcon';
import MailIcon from '../../icons/MailIcon';

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
