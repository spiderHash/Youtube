import Video from './Video'
import { videoFetch } from '../utils/apiCalls';
import {useState,useEffect} from "react";

const VideoCard = (props) => {
    const [data,setData] = useState();

    useEffect(() => {
    console.log(props);
    videoFetch(props.id).then(data=>setData(data));
    }, [props])
    
  return (
    <div>
      <img src = {data?.thumbnail[0]?.url || ""} />
      <Video title={props.title} urls={data?.formats} id={props.id}/>
    </div>
  )
}

export default VideoCard
