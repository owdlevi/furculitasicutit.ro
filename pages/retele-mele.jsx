/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx, Container } from 'theme-ui'
import RecipeCard from '../components/Recipe/RecipeCard'
import RecipeCardBox from '../components/Recipe/RecipeCardBox'

const recipes = [
  {
    name: 'Steak si ciuperci la gratar',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat ante eros, ac porta augue bibendum quis.',
    featuredImage: '/assets/IMG_20200509_193111.jpg',
    tags: ['vegan', 'de post']
  },
  {
    name: 'Steak si ciuperci la gratar',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat ante eros, ac porta augue bibendum quis.',
    featuredImage: 'https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/46406470.jpg',
    tags: ['vegan', 'de post']
  },
  {
    name: 'Steak si ciuperci la gratar',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat ante eros, ac porta augue bibendum quis.',
    featuredImage: 'https://themecrazycode.netlify.com/static/ab5311621e1f6e5b36bc4f66c4a3cc34/a52cf/kenyer.jpg',
    tags: ['vegan', 'de post']
  }
]

const ReteleMele = () => {
  return (
    <section
      sx={{
        backgroundColor: '#f8f9fa'
      }}>
      <Container>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-center',
            flexFlow: 'column'
          }}>
          <h1
            sx={{
              variant: 'styles.h1',
              textAlign: 'center'
            }}>
            Retele Mele
          </h1>
          {recipes.map((recipe) => {
            return <RecipeCard recipe={recipe} />
          })}
          <div
            sx={{
              my: [3, 4],
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'space-between'
            }}>
            {recipes.map((recipe) => {
              return <RecipeCardBox recipe={recipe} />
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ReteleMele
