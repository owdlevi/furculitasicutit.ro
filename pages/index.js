/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx, Container } from 'theme-ui'
import Head from 'next/head'
import Link from 'next/link'
import Counter from '../components/Counter'

export default () => {
  return (
    <>
      <Head>
        <title>Furculita si Cutit - siteul se va lansa in curand!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Container
          sx={{
            textAlign: 'center',
            height: 'calc(100vh - 80px)',
            width: '100vw',
            maxWidth: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexFlow: 'column',
            backgroundImage: 'url(/assets/hero-bg.jpg)',
            backgroundColor: '#f8f9fa',
            backgroundPosition: 'left 0 top 0',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          <div>
            <img
              sx={{
                height: '120px'
              }}
              alt="UI Logo"
              src="/assets/logo-furculita-si-cutit.svg"
            />
          </div>
          <p
            sx={{
              textAlign: 'center',
              maxWidth: 750,
              px: [2, 3, 4],
              mx: 'auto',
              mt: 5,
              fontSize: 4,
              color: 'white'
            }}>
            Momentan lucram la site-ul nostru nou.
          </p>
          <div>{/* <Counter /> */}</div>
        </Container>
      </section>
    </>
  )
}
