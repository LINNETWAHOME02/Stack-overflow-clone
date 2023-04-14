import React from 'react'
import { useLocation } from 'react-router-dom'


import L_Side from '../components/L_Side'
import UsersList from './UsersList'

import './Users.css'

const Users = () => {

  const location = useLocation()

  return (

    <div className='home-container-1'>
      <L_Side />
      <div className='home-container-2'style={{ marginTop: "30px" }} >
         <h1 style={{ fontWeight: "400" }}>Users</h1>
         <UsersList />
      </div>
    </div>
  )
}

export default Users
