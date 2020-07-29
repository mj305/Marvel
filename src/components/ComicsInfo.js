import React from 'react';
import axios from 'axios';

const ComicsInfo = (props) => {

  const [comics, setComics] = React.useState({
    data: {
      data: {
        results: [{
          title: "",
          images: [{}]
        }]
      }
    }
  });


  React.useEffect(() => {

    const fetchComics = async () => {
      const url = `${process.env.REACT_APP_MARVEL_URL}/characters/${props.id}/comics?apikey=${process.env.REACT_APP_API_KEY}`
      try {
        const result = await axios(url);
        setComics(result);
      } catch (error) {
        console.log("there is an error", error)
      }
    }

    fetchComics();
  },[props.id]);

      

      const thumbnails = comics.data.data.results.map(data => {
        let images; 
      if(data.images.length){
         images = <img src={`${data.images[0].path}.${data.images[0].extension}?apikey=${process.env.REACT_APP_API_KEY}`} alt="book pic" className="character-comic-image" /> 
      } 
      
      return(
        <>
          <div className="all-comics-container" >
            {images} 
          </div>
        </>
       )
      })  
  

    return(
      <>
        <div>
          <h1 className="all-comics-title" >Comics</h1>
         <div className="all-comics-thumbnail" > { thumbnails }</div>
        </div> 
      </>
    );
};

export default ComicsInfo;