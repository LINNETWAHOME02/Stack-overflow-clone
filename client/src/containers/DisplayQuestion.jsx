import React from 'react'

import L_Side from '../components/L_Side'
import R_Side from '../components/R_Side'
import QuestionsDetails from './QuestionsDetails'

const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
      <L_Side />
      <div className='home-container-2'>
        <QuestionsDetails />
        <R_Side />
      </div>
    </div>
  )
}

export default DisplayQuestion
