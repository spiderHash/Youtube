import VideoCardList from './VideoCardList';
import Categories from './Categories';
import Navbar from './Navbar';

const Home = () => {
  
  return (
    <div className='home'>
      <Navbar />
      <div className='content'>
      <Categories />
      <VideoCardList params={{q:'new'}} />
      </div>
    </div>
  )
}

export default Home
