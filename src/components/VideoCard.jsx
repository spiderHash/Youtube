import { Link } from 'react-router-dom';

const VideoCard = (props) => {
  return (
    <div>
      <Link to= {'/video/' + props.id}>    
         <img src = {props.snippet.thumbnails.medium.url} />
      </Link>
    </div>
  )
}

export default VideoCard
