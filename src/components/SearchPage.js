import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search'; 
import Button from '@material-ui/core/Button';

import NavBar from './NavBar';
import Footer from './Footer';

const SearchPage = () => {

  return (
    
    <> 
      <NavBar />
        
        <div className="search-bar-container" >
          <p className="search-text" >Find your favorite character...</p>
          
          <InputBase placeholder="Search Character…" inputProps={{ 'aria-label': 'search' }} />

          <Button variant="contained" className="search-button" > Search </Button>
        </div>

      <Footer />  
    </>
    
  );

};

export default SearchPage;
