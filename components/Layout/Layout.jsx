/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column'
        // set this to `minHeight: '100vh'` for full viewport height
        // minHeight: '100vh'
      }}>
      <Header />
      <main
        sx={{
          variant: 'styles.main'
        }}>
        {/* <Container>{children}</Container> */}
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
