import { videoFetch } from '../utils/apiCalls';
import {useState,useEffect} from "react";
import { downloadMp3 } from "../utils/apiCalls"
import { useSearchParams } from 'react-router-dom';
import VideoCardList from './VideoCardList';

const Video = () => {
    const [data,setData] = useState();
    const [params,setParams] = useSearchParams();
    useEffect(() => {
    videoFetch(params.get('v')).then(data=>setData(data));
    }, [params])
    console.log(data);
    
  return (
    <div>
        <span style={{width:'50%', background:'cyan'}}>
            <video src= {data?.formats[2]?.url || ""} width='100px' controls></video>
            <a href = {data?.formats[2]?.url+"&title="+data?.title || ""} download target="_blank">video</a>
            <button onClick={()=>downloadMp3(params.get('v'))}>mp3</button>
        </span>
        <span>
          <VideoCardList params={{relatedToVideoId: params.get('v')}} />
        </span>
    </div>
  )
}

export default Video
