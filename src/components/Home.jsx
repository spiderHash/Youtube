import React from 'react'
import Search from './Search';
import VideoCardList from './VideoCardList';

const Home = () => {
  
  return (
    <div>
      <h1>Youtube</h1>
      <Search />
      <VideoCardList params={{q:'new'}} />
    </div>
  )
}

export default Home
