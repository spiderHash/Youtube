import { search } from '../utils/apiCalls';
import {useState,useEffect} from "react";
import VideoCard from './VideoCard';import React from 'react'

const VideoCardList = (props) => {
    const [items, setItems] = useState();
    useEffect(() => {
    search(props.params).then((data) => {console.log(props.params); setItems(data.items) });
  }, [props])
  
  return (
    <div>
      {items?.map((item,index)=> {
        return(
        <VideoCard key={index} id={item.id.videoId} snippet={item.snippet}/>  
        );
      })}
    </div>
  )
}

export default VideoCardList
