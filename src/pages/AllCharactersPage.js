import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import jwtDecode from 'jwt-decode';

import Footer from '../components/FooterComponent';
import LoadingComponent from '../components/LoadingComponent';
import NavBarComponent from '../components/NavBarComponent';



const AllCharactersPage = (props) => {

  const history = useHistory();

  const [loading, setLoading] = React.useState(true)

  const [allCharacters, setAllCharacters] = React.useState({
    data: {
      data: {
        results: [{
          thumbnail: {
            extension: "",
            path: ""
          }
        }]
      } 
    }
  });

  React.useEffect(() => {
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
    
    
    const fetchAllCharacters = async () => {
      const url = `https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=5189968cf45946bfc4dba96d1349fe75`
      try {
        const result = await axios(url);
        setAllCharacters(result);
        setLoading(false) 
       } catch (error) {
        console.log("there is an error", error)
       }
    }
    fetchAllCharacters();
  },[]);

  const allCharactersMap = allCharacters.data.data.results.map(data => {
    return (
      <div className="all-characters-container" >
        <Link to={`/characterpage/${data.id}`} >
          <h1 className="all-characters-name" key={data.id}> {data.name} </h1>
          <img className="all-characters-image" src={`${data.thumbnail.path}.${data.thumbnail.extension}?apikey=5189968cf45946bfc4dba96d1349fe75`} />
        </Link>
      </div>
    )
  })


  return( 
     <> 
      {loading ? (
        <>
          <div>
            <NavBarComponent user={props.user} />
            <div className="all-characters-loading-component">
             <LoadingComponent />
            </div>
          </div> 
        </>
      ) : (
        <>
          <div>
            <NavBarComponent user={props.user}/>
             <h1 className="all-characters-page-header" >Marvel Characters</h1>
              <div className="all-characters-page" >
               {allCharactersMap}
              </div>
            </div>

            <div className="all-characters-footer-container" >
              <Footer />
            </div>
        </>
      )}
     </> 
   )
};

export default AllCharactersPage;