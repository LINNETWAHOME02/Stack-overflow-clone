import React from 'react'

import { Routes as Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Auth from './containers/Auth'
import Questions from './containers/Questions'
import AskQuestion from './containers/AskQuestion'
import DisplayQuestion from './containers/DisplayQuestion'
import Tags from './containers/Tags'
import Users from './containers/Users'
import UserProfile from './containers/UserProfile'


const Routes = () => {
  return (
   <Switch>
     <Route exact path='/' element={<Home />}/>
     <Route exact path='/Auth' element={<Auth />} />
     <Route exact path='/Questions' element={<Questions />} />
     <Route exact path='/AskQuestion' element={<AskQuestion />} />
     <Route exact path='/Questions/:id' element={<DisplayQuestion />} />
     <Route exact path='/Tags' element = {<Tags />} />
     <Route exact path='/Users' element = {<Users />} />
     <Route exact path='/Users/:id' element = {<UserProfile />} />
   </Switch>
  )
}

export default Routes

