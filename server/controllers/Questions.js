import Questions from '../models/Questions.js'
import mongoose from 'mongoose'

export const AskQuestion = async (req, res) => {
     const postQuestionData = req.body; //receive the data
     const postQuestion = new Questions(postQuestionData) //
     try {
        await postQuestion.save()
        res.status(200).json('Posted a question successfully')
     } catch (error) {
        console.log(error)
        res.status(409).json('Unable to post a new question')
     }
}

export const getAllQuestions = async (req, res) => {
   try {
      const questionList = await Questions.find();
      res.status(200).json(questionList)
   } catch (error) {
      res.status(404).json({ message: error.message })
   }
}

export const deleteQuestion = async (req, res) => {
   const { id:_id } = req.params; // params is the data available in the url. Here we are returning the id in the url

   //Checking if id of this question is present in the db
   if(!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send('Question unavailable...')
   }

   try {
      await Questions.findByIdAndRemove(_id)
      res.status(200).json({ message:'Successfully deleted...' })
   } catch (error) {
      res.status(404).json({ message: error.message })
   }
}

export const voteQuestion = async (req, res) => {
   const {id: _id} = req.params
   const { value, userId } = req.body

   if(!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send('Question unavailable...')
   }

   try {
      const question = await Questions.findById(_id) //re-triving the entire record of the question from the db
      const upIndex = question.upVotes.findIndex((id) => id===String(userId))
      const downIndex = question.downVotes.findIndex((id) => id===String(userId))
               /****************************EXPLANATION********************************/ 
      /*upVote and downVote are arrays which contain the lists of users/usererIds who have up/down-voted the question.
      (id) is the specific element. If that specific element matches the userId of the user who sent the request, then 
      the up/downIndex will have the value. */

      if( value === 'upVote'){
         if (downIndex !== -1){
            question.downVote = question.downVotes.filter((id) => id !== String(userId))
         }  /*If the user has already down-voted and is now trying to up-vote, then removed this user's id from the downVotes array*/

         if(upIndex === -1){ /*This means this user has not voted yet therefore on clicking upVote icon their id should be added to this array*/
            question.upVote.push(userId)
         }else{ /*If the user has already up-voted, remove vote on 2nd click, to take the vote back*/
            question.upVote = question.downVote.filter((id) => id !== String(userId))
         }
      }else if( value === 'downVote'){
         if (upIndex !== -1){
            question.upVote = question.upVotes.filter((id) => id !== String(userId))
         }  /*If the user has already up-voted and is now trying to up-vote, then removed this user's id from the upVotes array*/
      
         if(downIndex === -1){ /*This means this user has not voted yet therefore on clicking downVote icon their id should be added to this array*/
            question.downVote.push(userId)
         }else{ /*If the user has already down-voted, remove vote on 2nd click, to the vote back*/
            question.downVote = question.downVote.filter((id) => id !== String(userId))
         }
      }
      await Questions.findByIdAndUpdate(_id, question)
      res.status(200).json({message: 'Voted successfully...'})
   } catch (error) {
      res.status(404).json({message: 'Id not found'})
   }
}