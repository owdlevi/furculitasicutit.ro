/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Hero = ({ title, intro, cta, ctaSecondary }) => {
  return (
    <section
      sx={{
        backgroundImage: 'url(/assets/undraw_innovative_b409.svg)',
        backgroundColor: '#f8f9fa',
        backgroundPosition: ['left 0 top 50%', 'left 55vw top 50%'],
        backgroundSize: ['400px', '400px'],
        backgroundRepeat: 'no-repeat',
        height: ['auto', '450px'],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Container>
        <div
          sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'flex-start',
            maxWidth: '408px',
            flexFlow: 'column',
            height: '100%',
            pt: ['50vh', 0]
          }}>
          <h1
            sx={{
              variant: 'styles.h1'
            }}>
            {title}
          </h1>
          <p>{intro}</p>
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
