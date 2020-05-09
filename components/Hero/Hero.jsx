/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Hero = ({ title, intro, cta, ctaSecondary }) => {
  return (
    <section
      sx={{
        backgroundImage: 'url(/assets/hero-bg.jpg)',
        backgroundColor: '#f8f9fa',
        backgroundPosition: 'left 0 top 0',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        height: ['auto', '450px'],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        m: 4,
        position: 'relative',
        zIndex: 0
      }}>
      <div
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '40px',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <svg
          sx={{
            height: '40px',
            width: '450px',
            display: 'inline-block'
          }}
          xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="none"></rect>
          <g class="currentLayer">
            <path
              d="M1125.4.3H457.2c-102.7 0-128.8 25-231.5 25C121 25.3 94.9.3-9.8.3h-669.8v-49h1805v49z"
              fill="#FFF"
              fill-rule="nonzero"></path>
          </g>
        </svg>
      </div>
      <Container>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-center',
            maxWidth: '408px',
            flexFlow: 'column',
            height: '100%',
            mx: 'auto',
            pt: ['50vh', 0]
          }}>
          <h1
            sx={{
              variant: 'styles.h1',
              color: 'white',
              textAlign: 'center'
            }}>
            {title}
          </h1>
          <p sx={{ color: 'white', textAlign: 'center' }}>{intro}</p>
          <div
            sx={{
              mt: 4
            }}>
            <Link href={cta.link}>
              <a
                sx={{
                  variant: 'styles.ctabutton'
                }}>
                {cta.label}
              </a>
            </Link>
            {ctaSecondary && (
              <Link href={ctaSecondary.link}>
                <a
                  sx={{
                    variant: 'styles.ctabutton',
                    ml: 3,
                    backgroundColor: '#FFF',
                    border: '1px solid #dadce0',
                    color: '#202124',
                    ':hover': {
                      backgroundColor: '#f7f8ff',
                      outline: 'none',
                      textDecoration: 'none',
                      boxShadow: '0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12)'
                    }
                  }}>
                  {ctaSecondary.label}
                </a>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  cta: PropTypes.object.isRequired,
  ctaSecondary: PropTypes.object
}

export default Hero
