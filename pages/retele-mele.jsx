/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx, Container } from 'theme-ui'

const ReteleMele = () => {
  return (
    <section
      sx={{
        backgroundColor: '#f8f9fa'
      }}>
      <Container>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-center',
            flexFlow: 'column'
          }}>
          <h1
            sx={{
              variant: 'styles.h1',
              textAlign: 'center'
            }}>
            Retele Mele
          </h1>
          {/* Start Lista de retete */}
          <div
            sx={{
              display: 'flex',
              my: [4, 5],
              flexFlow: ['column'],
              justifyContent: ['space-between'],
              width: '100%'
            }}>
            <div
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'space-between',
                width: ['100%'],
                position: 'relative',
                overflow: 'hidden',
                height: '400px',
                borderRadius: '3px',
                backgroundColor: 'white'
              }}>
              <div
                sx={{
                  p: [3, 4],
                  flexGrow: 1,
                  display: 'flex',
                  flexFlow: 'column',
                  alignItems: 'left',
                  justifyContent: 'center'
                }}>
                <h2
                  sx={{
                    mt: 0,
                    mb: [3, 4],
                    position: 'relative',
                    '::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: '-8px',
                      height: '8px',
                      width: '100px',
                      backgroundColor: 'accent'
                    }
                  }}>
                  Steak si ciuperci la gratar
                </h2>
                <p
                  sx={{
                    display: 'inline-block'
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat ante eros, ac porta augue bibendum quis.
                </p>
                <div
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start'
                  }}>
                  <span
                    sx={{
                      display: 'inline-block',
                      py: 1,
                      px: 2,
                      borderRadius: '5px',
                      backgroundColor: 'accent',
                      color: 'white',
                      fontSize: '12px',
                      verticalAlign: 'center',
                      mr: 2
                    }}>
                    post
                  </span>
                  <span
                    sx={{
                      display: 'inline-block',
                      py: 1,
                      px: 2,
                      borderRadius: '5px',
                      backgroundColor: 'accent',
                      color: 'white',
                      fontSize: '12px',
                      verticalAlign: 'center',
                      mr: 2
                    }}>
                    vegan
                  </span>
                  <span
                    sx={{
                      display: 'inline-block',
                      py: 1,
                      px: 2,
                      borderRadius: '5px',
                      backgroundColor: 'accent',
                      color: 'white',
                      fontSize: '12px',
                      verticalAlign: 'center'
                    }}>
                    dieta
                  </span>
                </div>
              </div>
              <div
                sx={{
                  flexGrow: 2,
                  // width: '45%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}>
                <img
                  sx={{
                    display: 'inline-block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  src="/assets/IMG_20200509_193111.jpg"
                  alt="Steak la Gratar"
                />
              </div>
            </div>
          </div>
          {/* End Lsita retee */}
        </div>
      </Container>
    </section>
  )
}

export default ReteleMele
