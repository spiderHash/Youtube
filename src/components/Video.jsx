import { videoFetch } from '../utils/apiCalls';
import {useState,useEffect} from "react";
import { downloadMp3 } from "../utils/apiCalls"
import { useParams } from 'react-router-dom';

const Video = () => {
    const [data,setData] = useState();
    const {id} = useParams();
    useEffect(() => {
    videoFetch(id).then(data=>setData(data));
    }, [id])
    console.log(data);
    
  return (
    <div>
            <video src= {data?.formats[2]?.url || ""} controls></video>
            <a href = {data?.formats[2]?.url+"&title="+data?.title || ""} download target="_blank">video</a>
            <button onClick={()=>downloadMp3(id)}>mp3</button>
    </div>
  )
}

export default Video
