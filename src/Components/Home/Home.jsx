import React from 'react'
import Carousel from './Carousel/Carousel'
import './Home.css';

const Home = () => {
  return (
    <div className='flex-col item-center home'>
      <div className='text-center'>
        <p className='heading'>heading</p>
        <p className='subheading'>subheading</p>
      </div>
      <Carousel/>
    </div>
  )
}

export default Home
