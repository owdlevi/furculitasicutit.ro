/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <footer
      sx={{
        variant: 'styles.footer',
        justifyContent: 'center',
        height: 80
      }}>
      <div sx={{ p: 2 }}>© 2020 www.furculitasicutit.ro</div>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
