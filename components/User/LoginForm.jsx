/** @jsx jsx */
import { useState, useEffect, useRef } from 'react'
import { jsx } from 'theme-ui'
import { useClickAway } from 'react-use'
import { useSpring, animated } from 'react-spring'
import { loginWithGoogle } from '../../firebase/auth'

const LoginForm = ({ showLogin, showModal }) => {
  const [show, setShow] = useState(false)
  const [renderAuth, setRenderAuth] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true)
    }
  }, [])

  useEffect(() => {
    setShow(showLogin)
  }, [showLogin])

  const ref = useRef(null)

  useClickAway(ref, () => {
    closeModal()
  })
  const closeModal = () => {
    setShow(false)
    // showModal(false)
  }

  const modal = useSpring({
    // visibility: show ? 'visible' : 'hidden',

    transform: show ? 'scale(1) translate3d(0,0,0)' : 'scale(0.8) translate3d(120%,0,0)'
  })

  function login(fn) {
    return async () => {
      try {
        // setError("");
        // setLoading(true);
        await fn()
        // setRedirectToReferrer(true);
      } catch (err) {
        // setLoading(false);
        // setError(err.message || "Please try again.");
      }
    }
  }

  return (
    <animated.div
      style={modal}
      sx={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.40);',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <div ref={ref} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          onClick={() => setShow(false)}
          sx={{
            width: '320px',
            height: '518px',
            backgroundColor: 'accent',
            borderRadius: '4px 0px 0px 4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <div>
            <img src="/assets/signin-bg.png" alt="" />
          </div>
        </div>
        <div
          sx={{
            width: '460px',
            height: '518px',
            background: '#FFFFFF',
            borderRadius: '0px 4px 4px 0px',
            p: '30px'
          }}>
          <div
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <h3
              sx={{
                fontWeight: 'bold',
                fontSize: '24px',
                lineHeight: '24px',
                textAlign: 'left',
                letterSpacing: '-0.015em',
                color: '#444444'
              }}>
              Sign in
            </h3>
            <span
              onClick={closeModal}
              sx={{
                display: 'inline-block'
              }}>
              close
            </span>
          </div>
          {renderAuth ? (
            <div>
              <button
                onClick={login(loginWithGoogle)}
                sx={{
                  border: '1px solid #CDCDCD',
                  boxSizing: 'border-box',
                  borderRadius: '2px',
                  width: '100%',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}>
                <img src="/assets/Google__G__Logo 1.svg" alt="Sign in with Google" />
                <span
                  sx={{
                    fontSize: '15px',
                    lineHeight: '15px',
                    letterSpacing: '-0.015em',
                    color: '#898989',
                    display: 'inline-block',
                    ml: '10px'
                  }}>
                  Sign in with Google
                </span>
              </button>
              {/* <FirebaseAuth /> */}
            </div>
          ) : null}
        </div>
      </div>
    </animated.div>
  )
}

export default LoginForm
