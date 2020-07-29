import React from 'react';
import axios from 'axios';

const SeriesInfo = (props) => {

  const [series, setSeries] = React.useState({
    data: {
      data: {
        results: [{
          title: "",
          thumbnail: {
            path: "",
            extension: "",
          }
        }]
      }
    }
  });

  React.useEffect(() => {
    const fetchSeries = async () => {
      const url = `${process.env.REACT_APP_MARVEL_URL}/characters/${props.id}/series?apikey=${process.env.REACT_APP_API_KEY}`  
      try{
      const result = await axios(url);
      setSeries(result)
    } catch(error) {
      console.log("there is an error", error)
    }
   }
    fetchSeries();
  }, [props.id])

  
    const characterSeries = series.data.data.results.map(data => {
    return <>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div class="flip-card-front">
                 <img src={`${data.thumbnail.path}.${data.thumbnail.extension}?apikey=${process.env.REACT_APP_API_KEY}`} alt="series pic" className="character-series-image" />
               </div>
  
            <div/>
              <h2 className="flip-card-back" > { data.title } </h2>
            </div>
            
          </div>
        </>
  })



  return (
    <>
      <p className="all-series-title" >Series</p>
      <div className="all-series-thumbnail" > { characterSeries }</div>
    </>
  )
};

export default SeriesInfo;