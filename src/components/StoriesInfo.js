import React from 'react';
import axios from 'axios';

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
      const url = `https://gateway.marvel.com:443/v1/public/characters/${props.id}/stories?apikey=${process.env.REACT_APP_API_KEY}`
      try {
        const results = await axios(url);
        setStories(results)
      } catch(error) {
        console.log("there is an error", error)
      }
    }
    fetchStories();
  }, [props.id])

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