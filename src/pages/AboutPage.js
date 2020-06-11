import React from 'react';
import BackToTop from '../components/BackToTop';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import characterspic from '../assets/characterspic.png';

const AboutPage = () => {

  return (
    
      <>
       <NavBar />
          <div className="App">
            <header className="App-header">
  
              <img src={characterspic} className="characters-pic" alt="logo" /> 
              
              <p className="main-page-paragraph" > 
                Marvel Comics is the brand name and primary imprint of Marvel Worldwide Inc., 
                formerly Marvel Publishing, Inc. and Marvel Comics Group, a publisher of 
                American comic books and related media. In 2009, The Walt Disney Company acquired Marvel Entertainment, Marvel Worldwide's parent company.
              </p>
              
            </header>
          </div>
          <BackToTop />
        <Footer />  
      </>
    );
};

export default AboutPage;