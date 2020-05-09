/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header
      sx={{
        variant: 'styles.header'
      }}>
      <Link href="/">
        <a
          sx={{
            height: '50px'
          }}>
          <img
            sx={{
              height: '50px'
            }}
            alt="UI Logo"
            src="/assets/furculitasicutit.svg"
          />
          <span
            sx={{
              position: 'absolute',
              width: 1,
              height: 1,
              overflow: 'hidden',
              top: -9999
            }}>
            Home
          </span>
        </a>
      </Link>
      <div sx={{ mx: 'auto' }} />
      <Link href="/blog">
        <a
          sx={{
            variant: 'styles.navlink',
            ml: 3,
            py: 2
          }}>
          Blog
        </a>
      </Link>
      <Link href="/about">
        <a
          sx={{
            variant: 'styles.navlink',
            ml: 3,
            py: 2
          }}>
          About
        </a>
      </Link>
    </header>
  )
}

Header.propTypes = {}

export default Header
