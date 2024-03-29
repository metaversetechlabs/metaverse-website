import React, { useEffect } from 'react';
import NavBar from './Sections/NavBar';
import Footer from './Sections/Footer';
import Team from './Sections/Team';
import AboutSection from './Sections/AboutSection';
import Work from './Sections/Work';
import HeroSection from './Sections/HeroSection';
import Services from './Sections/Services';
import ContactUs from './Sections/ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import ReactGA from 'react-ga4';

const App = () => {
  // console.log(window.location.pathname);
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, [window.location.search]);
  return (
    <div className='bg-gradient-to-tl to-basePurple from-black min-h-[100vh]'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<HomeScreen />} />
          <Route path='/contact' element={<ContactUsScreen />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
