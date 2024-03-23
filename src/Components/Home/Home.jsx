import React from 'react'
import Carousel from './Carousel/Carousel'
import './Home.css';

const Home = () => {
  return (
    <div className='flex-col item-center home'>
      <div className='text-center'>
        <p className='heading'>Featured Products</p>
        <p className='subheading'>Explore and discover a variety of products</p>
      </div>
      <Carousel/>
    </div>
  )
}

export default Home
