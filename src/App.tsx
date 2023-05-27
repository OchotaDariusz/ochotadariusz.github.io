import React from 'react';

import { Header, Footer, MainContainer } from '@app/components/layout';
import logo from './logo.svg';
import './App.scss';
import AboutSection from '@app/components/layout/about-section/AboutSection';
import PortfolioSection from '@app/components/layout/portfolio-section/PortfolioSection';
import ContactSection from '@app/components/layout/contact-section/ContactSection';

function App() {
  return (
    <>
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
