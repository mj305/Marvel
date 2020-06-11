import React from 'react';
import axios from 'axios';

const ComicsInfo = () => {

  const [comics, setComics] = React.useState({
    data: {
      data: {
        results: [{
          title: " ",
          images: [{
            path: " ",
            extension: " ",
          }]
        }]
      }
    }
  });

  React.useEffect(() => {
    
    const fetchComics = async () => {
      const url = `https://gateway.marvel.com:443/v1/public/characters/1011334/comics?apikey=5189968cf45946bfc4dba96d1349fe75`
      try {
        const result = await axios(url);
        setComics(result);
      } catch (error) {
        console.log("there is an error", error)
      }
    }

    fetchComics();
  },[]);

  const characterComics = comics.data.data.results.map(data => {
    let images;

    if(data.images.length > 0){
       images = <img src={`${data.images[0].path}.${data.images[0].extension}?apikey=5189968cf45946bfc4dba96d1349fe75`} alt="book pic" className="character-comic-image" /> 
    }
    
    return(
      <>
      {console.log(data.images)}
        <li key={data.title} > { data.title } </li> 
        {images} 
      </>
     )
    })

    
    return(

      <>
          <div>
            <h1>Comics</h1>
            <ul> { characterComics }</ul>
          </div> 
      </>

    );
};

export default ComicsInfo;