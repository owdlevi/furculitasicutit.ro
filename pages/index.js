/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx, Container } from 'theme-ui'
import Head from 'next/head'
import Link from 'next/link'
import { useUser } from '../context/userContext'
import firebase from '../firebase/clientApp'
import Hero from '../components/Hero'

export default () => {
  // Our custom hook to get context values
  const { loadingUser, user } = useUser()

  useEffect(() => {
    if (!loadingUser) {
      // You know that the user is loaded: either logged in or out!
      console.log(user)
    }
    // You also have your firebase app initialized
    console.log(firebase)
  }, [loadingUser, user])

  return (
    <>
      <Head>
        <title>Next.js w/ Firebase Client-Side</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title="Let's build the future of the web"
        intro="Get the web's modern capabilities on your own sites and apps with useful guidance and analysis from web.dev."
        cta={{ link: '/', label: 'Contact Us' }}
        ctaSecondary={{ link: '/', label: 'Latest news' }}
      />
      <section>
        <Container
          sx={{
            textAlign: 'center'
          }}>
          <p
            sx={{
              textAlign: 'center',
              maxWidth: '100%',
              mx: 'auto',
              mt: 5,
              fontSize: 4
            }}>
            As the web advances, users' expectations grow. With web.dev's guidance, you can give your users the best experience, wherever
            they are.
          </p>
          <Link href="/about">
            <a
              sx={{
                variant: 'styles.ctabutton',
                color: 'accent',
                backgroundColor: 'transparent',
                mx: 'auto',
                ':hover': {
                  backgroundColor: '#f7f8ff',
                  boxShadow: '0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12)'
                }
              }}>
              About Crazy Code
            </a>
          </Link>
        </Container>
      </section>
    </>
  )
}
