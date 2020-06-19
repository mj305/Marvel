import React from 'react';
import Axios from 'axios';

const StoriesInfo = (props) => {

  const [stories, setStories] = React.useState({
    data: {
      data: {
        results: [{
          title: "",
        }]
      }
    }
  })

  React.useEffect(() => {
    const fetchStories = async () => {
      const url = `https://gateway.marvel.com:443/v1/public/characters/${props.id}/stories?apikey=5189968cf45946bfc4dba96d1349fe75`
      try {
        const results = await Axios(url);
        setStories(results)
      } catch(error) {
        console.log("there is an error", error)
      }
    }
    fetchStories();
  }, [])

  const characterStories = stories.data.data.results.map(data => {
    console.log(data)
    return (
      <>
        <div className="stories-info-stories-info-title" >
            <p>{data.title}</p>
        </div>
      </>
    )})

    return (
      <>
        <div className="stories-info-container" >
          <h1 className="stories-info-header" >Stories</h1>
          <h3 className="stories-info-stories" > {characterStories} </h3>
        </div>
      </>
    )
};

export default StoriesInfo;