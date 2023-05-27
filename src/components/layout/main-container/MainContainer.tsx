import React from 'react';

type MainContainerProps = {
  children: JSX.Element | JSX.Element[];
};

export const MainContainer: React.FC<MainContainerProps> = (props) => {
  return (
    <main>
      <>{props.children}</>
    </main>
  );
};
