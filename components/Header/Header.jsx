/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import PropTypes from 'prop-types'
import UserMenu from '../User/UserMenu'

const Header = (props) => {
  return (
    <header
      sx={{
        variant: 'styles.header'
      }}>
      <div
        sx={{
          width: ['100%', '100%', '20%'],
          order: ['1', '1', '2'],
          textAlign: 'center'
        }}>
        <Link href="/">
          <a
            sx={{
              height: '40px'
            }}>
            <img
              sx={{
                height: '40px'
              }}
              alt="UI Logo"
              src="/assets/logo-furculita-si-cutit.svg"
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
      </div>

      <div
        sx={{
          width: '30%',
          display: ['none', 'none', 'flex'],
          order: 1
        }}>
        <Link href="/">
          <a
            sx={{
              variant: 'styles.navlink',
              mr: 3,
              py: 2
            }}>
            Home
          </a>
        </Link>
        <Link href="/retele-mele">
          <a
            sx={{
              variant: 'styles.navlink',
              mr: 3,
              py: 2
            }}>
            Retele mele
          </a>
        </Link>
      </div>
      <div
        sx={{
          width: '30%',
          display: ['none', 'none', 'flex'],
          order: 3,
          justifyContent: 'flex-end',
          alignItems: 'center',
          textAlign: 'right',
          verticalAlign: 'center'
        }}>
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
        <Link href="/despre-noi">
          <a
            sx={{
              variant: 'styles.navlink',
              mx: 3,
              py: 2
            }}>
            Despre Noi
          </a>
        </Link>
        <UserMenu />
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header
