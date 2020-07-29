import React from 'react';

import NavBarComponent from '../components/NavBarComponent';

import '../styles/AboutPage.css';


const AboutPage = () => {

  return (

    <>
      <div>
       <NavBarComponent />
          <div className="about-page-container">
            <div className="about-page-paragraph-wrapper">
              <p className="about-page-parragraph-1" > 
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
               <p className="about-page-parragraph-1" > Created By <a href="https://mariabeckles.herokuapp.com/" target="blank" > Maria Beckles </a></p>
            </div>
          </div>
      </div>
    </>
  )
};

export default AboutPage;