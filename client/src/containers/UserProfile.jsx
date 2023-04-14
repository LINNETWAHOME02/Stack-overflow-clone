import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'

import moment from 'moment'

import ProfileBio from './ProfileBio'
import EditProfileForm from './EditProfileForm'
import L_Side from '../components/L_Side'
import Animate from '../components/Animate'
import { useParams } from 'react-router-dom'
import './UserProfile.css'

const UserProfile = () => {

  const { id } = useParams
  const users = useSelector((state) => state.usersReducer)
  const currentProfile = users.filter((user) => user._id === id)[0]
  const currentUser = useSelector((state) => state.currentUserReducer)

  const [Switch, setSwitch] = useState(false);

  return (
    <div className='home-container-1'>
      <L_Side />
      <div className='home-container-2'>
        <section>
          <div className='user-details-container'>
            <div className='user-details'>
              <Animate backgroundColor="purple" color="white" fontSize="50px" px="40px" py="30px">
                {
                  currentProfile?.name.charAt(0).toUpperCase()
                }
              </Animate>
              <div className='user-name'>
                <h1>{currentProfile?.name}</h1>
                <p> <FontAwesomeIcon icon={faBirthdayCake} /> Joined {moment(currentProfile?.joinedOn.fromNow()) } </p>
              </div>
            </div>
            {
              currentUser?.result?._id === id && (
                <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn' >
                  <FontAwesomeIcon icon={faPen}/> Edit profile
                </button>
              )
            }
          </div>
          <>
            {
              Switch ? (
                 <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
              ) :
              <ProfileBio currentProfile={currentProfile}/>
            }
          </>
        </section>
      </div>
    </div>
  )
}

export default UserProfile
