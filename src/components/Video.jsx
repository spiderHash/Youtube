import { videoFetch } from '../utils/apiCalls';
import {useState,useEffect} from "react";
import { downloadMp3 } from "../utils/apiCalls"
import { useSearchParams } from 'react-router-dom';
import VideoCardList from './VideoCardList';
import Navbar from './Navbar';

const Video = () => {
    const [data,setData] = useState();
    const [params,setParams] = useSearchParams();
    useEffect(() => {
    videoFetch(params.get('v')).then(data=>setData(data));
    console.log("Video");
    }, [params])
    //console.log(data);
    
  return (
    <div>
    <Navbar />
    <div className='video'>
        <span className='mainVideo'>
            <video src= {data?.formats[2]?.url || ""} width='50%' controls></video>
            <a href = {data?.formats[2]?.url+"&title="+data?.title || ""} download target="_blank">video</a>
            <button onClick={()=>downloadMp3(params.get('v'))}>mp3</button>
        </span>
          <VideoCardList params={{relatedToVideoId: params.get('v')}} />
    </div>
    </div>
  )
}

export default Video
