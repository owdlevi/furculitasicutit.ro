/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <footer
      sx={{
        variant: 'styles.footer'
      }}>
      <Link href="/">
        <a sx={{ variant: 'styles.navlink', p: 2 }}>Home</a>
      </Link>
      <Link href="/">
        <a sx={{ variant: 'styles.navlink', p: 2 }}>Blog</a>
      </Link>
      <Link href="/">
        <a sx={{ variant: 'styles.navlink', p: 2 }}>About</a>
      </Link>

      <div sx={{ mx: 'auto' }} />
      <div sx={{ p: 2 }}>© 2020 CrazyCode</div>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
