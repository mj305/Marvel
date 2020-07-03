import React from 'react';

import Footer from '../components/FooterComponent';
import NavBarComponent from '../components/NavBarComponent';


const AboutPage = () => {

  return (

    <>
      <div>
       <NavBarComponent />
          <div className="about-page-container">

            <div className="about-page-paragraph-wrapper">
                <h2 className="about-page-parragraph-1" >
                In this super cool app you'll learn more 
                about your favorite Marvel Comic characters. 
                </h2>

                <h3 className="about-page-parragraph-1" >
                Have lots of fun checking out the Superheroes and Villans. 
                </h3>
            </div>

              {/* <img className="about-page-image" src={aboutmarvel} alt="about heroes"/> */}

       {/*        <p className="about-page-parragraph-2" > 
              Marvel Entertainment, LLC, 
              a wholly-owned subsidiary of The Walt Disney Company, 
              is one of the world's most prominent character-based 
              entertainment companies, built on a proven library of 
              more than 8,000 characters featured in a variety of 
              media over seventy-five years. Marvel utilizes its 
              character franchises in entertainment, licensing and 
              publishing. For more information visit 
              <a href="https://www.marvel.com/" target="blank" > marvel.com</a> © 2020 MARVEL.
              </p>
 */}
          </div>

          <div  className="main-characters-footer-container">  
              <Footer />
            </div>
      </div>
    </>
  )
};

export default AboutPage;