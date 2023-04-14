import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './HomeMain.css'
import QuestionList from './QuestionList'

const HomeMain = () => {

    const location = useLocation();

    const user = 1;

    const navigate = useNavigate();

    const questionsList = useSelector(state => state.questionsReducer)

  // var questionsList = [{ 
  //       _id: 1,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 2,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["java", "node js", "react js", "mongo db", "express js"],
  //       userPosted: "linnet",
  //       userId: 1,
  //       askedOn: "jan 1",
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'wahome',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   },{ 
  //       _id: 2,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 0,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
  //       userPosted: "linnet",
  //       askedOn: "jan 1",
  //       userId: 1,
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'wahome',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   },{ 
  //       _id: 3,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 0,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
  //       userPosted: "linnet",
  //       askedOn: "jan 1",
  //       userId: 1,
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'wahome',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   }]

    const redirect = () => {
      alert("Log-in or Sign-up to ask a question")
      navigate('/Auth')
    }


  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
            location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <Link to={ user === null ? redirect() : '/AskQuestion'} className='ask-btn'>Ask Question</Link>
      </div>
      <div>
        {
           questionsList.data === null ?
           <h1>Loading...</h1> : 
           <>
            <p>{ questionsList.data.length } questions</p>
            <QuestionList questionsList={questionsList.data}/>
           </>
        }
      </div>
    </div>
  )
}

export default HomeMain
