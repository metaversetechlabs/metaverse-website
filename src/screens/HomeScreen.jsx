import React, { useEffect } from 'react';
import HeroSection from '../Sections/HeroSection';
import AboutSection from '../Sections/AboutSection';
import Work from '../Sections/Work';
import Services from '../Sections/Services';
import Team from '../Sections/Team';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const HomeScreen = () => {
  useEffect(() => {
    ReactGA.send({ hitType: 'Page View', page: window.location.pathname });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Work />
      <Services />
      <Team />
    </>
  );
};

export default HomeScreen;
