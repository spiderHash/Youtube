import { Link } from 'react-router-dom';

const VideoCard = (props) => {
  return (
    <div className="videoCard">
      <Link to= {'/watch?v=' + props.id}>    
         <img src = {props?.snippet?.thumbnails?.medium?.url || props?.snippet?.thumbnails?.default?.url || " "} />
      </Link>
    </div>
  )
}

export default VideoCard
