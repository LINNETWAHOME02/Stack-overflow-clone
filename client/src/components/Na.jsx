import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Na.css'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import logo from '../assets/logo.png'
import search from '../assets/search-solid.svg'
import Animate from './Animate' //Avatar
import { setCurrentUser } from '../actions/currentUser'

const Na = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()
    var User = JSON.parse(localStorage.getItem('Profile')) 
    //getting user profile created in the local storage. The above line of code is equivalent to the following
    var User = useSelector((state) => (state.currentUserReducer))

    const handleLogout = () => {
      dispatch({ type: 'LOGOUT' });
      navigate('/')
      dispatch(setCurrentUser(null))
    }

    //useEffect basically creates a side-effect. [dispatch] is a dependency array
    useEffect(() => {
      const token = User?.token
      if(token){
        const decodedToken = decode(token)
        if(decodedToken.exp * 1000 < new Date().getTime()){ //exp means expired
          handleLogout()
        }
      }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])


  return (
    <nav className='main-nav'>
      <div className='navbar'>
         <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt='logo' />
         </Link>
         <Link to='/' className='nav-item nav-btn'>About</Link>
         <Link to='/' className='nav-item nav-btn'>Products</Link>
         <Link to='/' className='nav-item nav-btn'>For Teams</Link>
         <form>
            <input type='text' placeholder='Search...'/>
            <img src={search} alt='search icon' width='18' className='search-icon'/>
         </form>
        
        {User === null ?
           <Link to='/Auth' className='nav-item nav-links'>Log in</Link> : 
           <>
            <Animate backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white'><Link to={`/Users/${User?.result?._id}`} style={{ color:'white', textDecoration:'none' }}>{User.result.name.charAt(0).toUpperCase()}</Link></Animate>
            <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
           </>
        }
      </div>
    </nav>
  )
}

export default Na
