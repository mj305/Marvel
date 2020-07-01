import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterInfo from '../components/CharacterInfo';
import ComicsInfo from '../components/ComicsInfo';
import SeriesInfo from '../components/SeriesInfo';
import StoriesInfo from '../components/StoriesInfo';
import NavBarComponent from '../components/NavBarComponent';
import Footer from '../components/FooterComponent';



const CharacterPage = (props) => {
  const {auth} = props.user.data

  const {id} = useParams(); 

  return (
    <>  
     <NavBarComponent auth={auth} />
        <div>
             
          <div className="character-page-header-container" >
            <div class="scroll-down center">
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