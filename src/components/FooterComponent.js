import React from 'react';

const Footer = () => {

  return (
    <div className="all-characters-footer-container" >
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