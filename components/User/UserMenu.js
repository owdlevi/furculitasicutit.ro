/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import { useUser } from '../../context/userContext'
import LoginForm from './LoginForm'
// import { signOut } from '../../firebase/auth'

const UserMenu = (props) => {
  const [showLogin, setShowLogin] = useState(false)
  const { loadingUser, user } = useUser()

  useEffect(() => {
    if (!loadingUser) {
      // You know that the user is loaded: either logged in or out!
      console.log(user)
    }
    // You also have your firebase app initialized
    // console.log(firebase)
  }, [loadingUser, user])

  const showModal = () => {
    setShowLogin(!showLogin)
  }

  return user ? (
    <React.Fragment>
      <div
        sx={{
          height: '40px',
          width: '40px',
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'inline-flex'
        }}>
        <img
          sx={{
            display: 'inlone-block',
            width: '100%',
            height: '100%'
          }}
          src={user.photoURL}
          alt=""
        />
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <button
        onClick={showModal}
        sx={{
          variant: 'styles.ctabutton',
          height: '30px',
          py: 2,
          px: 4,
          fontSize: '12px',
          ml: 5
        }}>
        Login
      </button>
      {showLogin && <LoginForm showLogin={showLogin} showModal={showModal} />}
    </React.Fragment>
  )
}
export default UserMenu
