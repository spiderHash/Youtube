import { downloadMp3 } from "../utils/apiCalls"

const Video = (props) => {

    
  return (
    <div>
            <video src= {props.urls? props.urls[2].url : ""} controls></video>
            <a href = {props.urls? props.urls[2].url+"&title="+props.title : ""} download target="_blank">video</a>
            <button onClick={()=>downloadMp3(props.id)}>mp3</button>
            

    </div>
  )
}

export default Video
