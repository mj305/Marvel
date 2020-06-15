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
        <p>{data.title}</p>
      </>
    )})

    return (
      <>
        <p>Stories</p>
        <h1> {characterStories} </h1>
      </>
    )
};

export default StoriesInfo;