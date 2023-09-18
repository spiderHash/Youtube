import React from 'react'
import { search } from '../utils/apiCalls';
import {useState,useEffect} from "react";
import VideoCard from './VideoCard';
import Search from './Search';

const Home = (props) => {
  const [items, setItems] = useState();
  useEffect(() => {
    search({q:'new'}).then((data) => { setItems(data.items) });
  }, [props])
  
  return (
    <div>
      <h1>Youtube</h1>
      <Search />
      {items?.map((item,index)=> {
        return(
        <VideoCard key={index} id={item.id.videoId} snippet={item.snippet}/>  
        );
      })}
    </div>
  )
}

export default Home
