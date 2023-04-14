import React from 'react'

import L_Side from '../components/L_Side'
import R_Side from '../components/R_Side'
import HomeMain from '../components/HomeMain'
import '../App.css'

const Home = () => {
  return (
    <div className='home-container-1'>
      <L_Side />
      <div className='home-container-2'>
        <HomeMain />
        <R_Side />
      </div>
    </div>
  )
}

export default Home
