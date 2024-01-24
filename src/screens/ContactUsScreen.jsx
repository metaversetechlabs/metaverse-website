import React, { useEffect } from 'react';
import ContactUs from '../Sections/ContactUs';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const ContactUsScreen = () => {
  useEffect(() => {
    ReactGA.send({ hitType: 'Contact Page', page: window.location.pathname });
  }, []);

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
