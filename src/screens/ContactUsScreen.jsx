import React, { useEffect } from 'react';
import ContactUs from '../Sections/ContactUs';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const ContactUsScreen = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <ContactUs />
    </>
  );
};

export default ContactUsScreen;
