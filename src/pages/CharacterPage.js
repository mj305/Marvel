import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import jwtDecode from 'jwt-decode';

import CharacterInfo from '../components/CharacterInfo';
import ComicsInfo from '../components/ComicsInfo';
import Footer from '../components/FooterComponent';
import NavBarComponent from '../components/NavBarComponent';
import SeriesInfo from '../components/SeriesInfo';
import StoriesInfo from '../components/StoriesInfo';



const CharacterPage = (props) => {
  const history = useHistory();
  
   useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      const decoded = jwtDecode(token)

       if (decoded && decoded.email) {

        console.log("this is decoded: ", decoded)
       } else {
        console.log("this is decoded else: ", decoded)
         history.push("/")
       }
    } else {
      history.push("/")
    }
   }, [history]) 
  
  const {id} = useParams(); 

  return (
    <>  
     <NavBarComponent user={props.user} />
        <div>
          <div className="character-page-header-container" >
              <div class="scroll-down center" >
                <CharacterInfo id={id}/>
              <div class="scroll-icon center">&darr;</div>
          </div>   
        </div> 

            <ComicsInfo id={id} /> 

            <SeriesInfo id={id} />

            <StoriesInfo id={id} />     

        </div>
        
        <div className="character-page-footer-contaier" >   
          <Footer />
        </div> 
    </>
  )
};

export default CharacterPage;