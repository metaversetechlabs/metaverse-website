import React, { useEffect } from 'react';
import ContactUs from '../Sections/ContactUs';
import { useLocation } from 'react-router-dom';
const ContactUsScreen = () => {
  const location = useLocation();

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
