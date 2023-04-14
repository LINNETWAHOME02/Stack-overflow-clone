import mongoose from "mongoose"
import Questions from "../models/Questions.js"

export const postAnswer = async (req, res) =>  {
    const { id : _id } = req.params;  //params here means the id present in the parameter. (Referring to the url in Answers.js in routes)
    const { noOfAnswers, answerBody, userAnswered, userId } = req.body;  //updating number of answers if an answer is posted

    if(!mongoose.Types.ObjectId.isValid(_id)) { //Checking if id of this question is present in the db
        return res.status(404).send('Question unavailable...')
    }
    
    updateNoOfQuestions(_id, noOfAnswers)

    try {
        const updatedQuestion = await Questions.findByIdAndUpdate( _id, { $addToSet : {'answer' : [{answerBody, userAnswered, userId}]} } )
        res.status(200).json(updatedQuestion)
    } catch (error) {
        res.status(400).json('Error in updating')
    }

}

const updateNoOfQuestions = async (_id, noOfAnswers) => {
    try {
        await Questions.findByIdAndUpdate( _id, { $set : { 'noOfAnswers' : noOfAnswers } } )
    } catch (error) {
        console.log(error)
    }
}

export const deleteAnswer = async (req, res) => {
    const { id:_id } = req.params;
    const {answerId, noOfAnswers} = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Question unavailable...')
    }

    if(!mongoose.Types.ObjectId.isValid(answerId)) {
        return res.status(404).send('Answer unavailable...')
    }
    updateNoOfQuestions(_id, noOfAnswers)

    try {
        await Questions.updateOne(
            {_id},
            {$pull: {'answer': { _id: answerId }}} //pull here is used to pull a specific id from the answer array 
        )
        res.status(200).json({ message: 'Answer successfully deleted...' })
    } catch (error) {
        res.status(405).json(error)
    }
}