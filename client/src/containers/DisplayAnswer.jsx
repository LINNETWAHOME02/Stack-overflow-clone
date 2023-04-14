import React from 'react'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import Animate from '../components/Animate'
import { deleteAnswer } from '../actions/question'

const DisplayAnswer = ({question, handleShare}) => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const User = useSelector((state) => (state.currentUserReducer))

  const handleDelete = (answerId, noOfAnswers) => {
     dispatch(deleteAnswer(id, answerId, noOfAnswers-1))
  }

  return (
    <div>
      {
        question.answer.map((ans) => (
            <div className='display-ans' key={ans._id} >
               <p>{moment(ans.answerBody).fromNow()}</p>
               <div className='question-actions-user' >
                 <div>
                    <button type='button' onClick={handleShare}>Share</button>
                    {
                      User?.result?._id === ans?.userId && ( //?. is an option selector
                        <button type='button' onClick={() => handleDelete(ans._id, question.noOfAnswers)} >Delete</button>
                      )
                    }
                 </div>
                 <div>
                    <p>answered {ans.answeredOn}</p>
                    <Link to={`/Users/${ans.userId}`} className='user-link' style={{color : '#0086d8'}} >
                        <Animate backgroundColor='green' px='8px' py='5px' > {ans.userAnswered.charAt(0).toUpperCase()} </Animate>
                        <div>
                           {ans.userAnswered}
                        </div>
                    </Link>
                 </div>
               </div>
            </div>
        ))
      }
    </div>
  )
}

export default DisplayAnswer
