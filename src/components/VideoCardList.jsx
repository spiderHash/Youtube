import { search } from '../utils/apiCalls';
import {useState,useEffect} from "react";
import VideoCard from './VideoCard';import React from 'react'

const VideoCardList = (props) => {
    const [items, setItems] = useState();
    useEffect(() => {
    search(props.params).then((data) => {console.log(props.params); setItems(data.items) });
  }, [props.params.relatedToVideoId, props.params.q])
  
  return (
    <div className="videoCardList">
      {items?.map((item,index)=> {
        return(
        <VideoCard key={index} id={item.id.videoId} snippet={item.snippet}/>  
        );
      })}
    </div>
  )
}

export default VideoCardList
