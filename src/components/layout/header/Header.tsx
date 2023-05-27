import classes from './Header.module.scss';

export const Header = () => {
  return (
    <header className={classes['header']}>
      <p>
        <a href="#about">About</a>
      </p>
      <p>
        <a href="#portfolio">Portfolio</a>
      </p>
      <p>
        <a href="#contact">Contact</a>
      </p>
    </header>
  );
};
