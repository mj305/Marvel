import React from 'react';

import '../styles/FooterComponent.css';

const Footer = () => {

  return (
    <div className="footer-container"  >
          <div>
          <a href='http://marvel.com' target='blank' >
          <p className="all-characters-page-footer-data-text" > Data provided by Marvel. © 2020 Marvel </p>
          </a>
          </div>

            <div>
              <a href='https://mariabeckles.herokuapp.com/'  target='blank' >
              <p className="all-characters-page-footer-data-text" > Created By Maria Beckles </p>
              </a>
            </div>
          </div> 
  ) 
};

export default Footer;