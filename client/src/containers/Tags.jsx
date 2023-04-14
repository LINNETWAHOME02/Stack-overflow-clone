import React from 'react'
import L_Side from '../components/L_Side'
import TagsList from './TagsList'
import './Tags.css'
import { tagList } from './tagList'

const Tags = () => {
  return (
    <div className='home-container-1'>
    <L_Side /> 
      <div className='home-container-2'>
         <h1 className='tags-h1'>Tags</h1>
         <p className="tags-p">
          A tag is a keyword or label that categorizes your question with other,
          similar questions.
        </p>
        <p className="tags-p">
          Using the right tags makes it easier for others to find and answer
          your question.
        </p>
        <div className='tags-list-container'>
          {
            tagList.map((tag)=>(
              <TagsList tag={tag} key={tagList.id}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Tags
