//Reducers are responsible for updating the state of the application in response to dispatched actions
import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from './currentUser'
import questionsReducer from './questions'
import usersReducer from "./users";

export default combineReducers({
    authReducer, currentUserReducer, questionsReducer, usersReducer
})