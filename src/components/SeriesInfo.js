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
      const url = `https://gateway.marvel.com:443/v1/public/characters/${props.id}/series?apikey=5189968cf45946bfc4dba96d1349fe75`  
      try{
      const result = await axios(url);
      setSeries(result)
    } catch(error) {
      console.log("there is an error", error)
    }
   }
    fetchSeries();
  }, [])
  
  const characterSeries = series.data.data.results.map(data => {

    return (
      <>
        
        <div className="all-series-container" >
          <h2 className="all-series-name" > { data.title } </h2>
          <img src={`${data.thumbnail.path}.${data.thumbnail.extension}?apikey=5189968cf45946bfc4dba96d1349fe75`} alt="series pic" className="character-series-image" />
        </div>
      </>
    )
  })



  return (
    <>
      <p className="all-series-title" >Series</p>
      <div className="all-series-thumbnail" > { characterSeries }  </div>
    </>
  )
};

export default SeriesInfo;