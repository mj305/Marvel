import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

import CharacterPage from './CharacterPage'
import NavBar from './NavBar';
import Footer from './Footer';
import BackToTop from './BackToTop';

const SearchPage = () => {

  return (
    
    <> 
      <NavBar />
        
        <div className="search-bar-container" >
          <p className="search-text" >Find your favorite character...</p>
          
          <InputBase placeholder="Search Character…" inputProps={{ 'aria-label': 'search' }} />

          <Button variant="contained" className="search-button" > Search </Button>
        </div>

        < CharacterPage />
        <BackToTop />
      <Footer />  
    </>
    
  );

};

export default SearchPage;
