import Layout from '../components/Layout'
import UserProvider from '../context/userContext'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme/theme'

// Custom App to wrap it with context provider
export default ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  </ThemeProvider>
)
