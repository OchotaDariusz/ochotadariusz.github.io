import React from 'react';

import { Header, Footer, MainContainer } from '@app/components/layout';
import {
  AboutSection,
  PortfolioSection,
  ContactSection,
} from '@app/components/layout';
import { BackgroundIllustration } from '@app/components/ui';
import logo from '@app/logo.svg';
import '@app/App.scss';

function App() {
  return (
    <>
      <BackgroundIllustration />
      <Header />
      <MainContainer>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hello! The page is <code>in development</code> and will be
              updated.
            </p>
          </header>
        </div>
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
