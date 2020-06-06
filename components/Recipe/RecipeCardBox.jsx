/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

const RecipeCardBox = ({ recipe }) => {
  return (
    <div
      sx={{
        display: 'flex',
        my: [2, 3],
        flexFlow: ['column'],
        justifyContent: ['space-between'],
        width: ['100%', 'calc(100%/3 - 20px)', 'calc(100%/3 - 20px']
      }}>
      <div
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'space-between',
          width: ['100%'],
          position: 'relative',
          overflow: 'hidden',
          height: '500px',
          borderRadius: '3px',
          backgroundColor: 'white'
        }}>
        <div
          sx={{
            flexGrow: 1,
            // width: '45%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'relative'
          }}>
          <img
            sx={{
              display: 'inline-block',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            src={recipe.featuredImage}
            alt="Steak la Gratar"
          />

          <div
            sx={{
              display: 'flex',
              flexFlow: 'row',
              justifyContent: 'space-between',
              mb: [2, 3],
              position: 'absolute',
              left: '0px',
              top: '0px'
            }}>
            <div
              sx={{
                display: 'flex',
                flexFlow: 'row',
                alignItems: 'center',
                backgroundColor: 'accent',
                color: 'white',
                p: 2
              }}>
              <svg
                sx={{
                  width: '20px',
                  mr: '10px'
                }}
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128">
                <path d="M 64 13.5 C 36.2 13.5 13.5 36.2 13.5 64 C 13.5 91.8 36.2 114.5 64 114.5 C 91.8 114.5 114.5 91.8 114.5 64 C 114.5 36.2 91.8 13.5 64 13.5 z M 64 19.5 C 88.5 19.5 108.5 39.5 108.5 64 C 108.5 88.5 88.5 108.5 64 108.5 C 39.5 108.5 19.5 88.5 19.5 64 C 19.5 39.5 39.5 19.5 64 19.5 z M 64 31 C 62.3 31 61 32.3 61 34 L 61 58.800781 C 59.2 59.800781 58 61.8 58 64 C 58 67.3 60.7 70 64 70 C 66.2 70 68.199219 68.8 69.199219 67 L 84 67 C 85.7 67 87 65.7 87 64 C 87 62.3 85.7 61 84 61 L 69.199219 61 C 68.699219 60.1 67.9 59.300781 67 58.800781 L 67 34 C 67 32.3 65.7 31 64 31 z" />
              </svg>
              <span
                sx={{
                  display: 'inline-block',
                  fontSize: '12px',
                  lineHeight: '20px'
                }}>
                25 minutes
              </span>
            </div>
          </div>

          <div
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              position: 'absolute',
              left: '20px',
              bottom: '20px'
            }}>
            <span
              sx={{
                display: 'inline-block',
                py: 1,
                px: 2,
                borderRadius: '5px',
                backgroundColor: 'accent',
                color: 'white',
                fontSize: '12px',
                verticalAlign: 'center',
                mr: 2
              }}>
              post
            </span>
            <span
              sx={{
                display: 'inline-block',
                py: 1,
                px: 2,
                borderRadius: '5px',
                backgroundColor: 'green',
                color: 'white',
                fontSize: '12px',
                verticalAlign: 'center',
                mr: 2
              }}>
              vegan
            </span>
            <span
              sx={{
                display: 'inline-block',
                py: 1,
                px: 2,
                borderRadius: '5px',
                backgroundColor: 'accent',
                color: 'white',
                fontSize: '12px',
                verticalAlign: 'center'
              }}>
              dieta
            </span>
          </div>
        </div>

        <div
          sx={{
            p: [2, 3],
            flexGrow: 1,
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'left',
            justifyContent: 'center'
          }}>
          <h2
            sx={{
              mt: [2, 2],
              mb: [2, 2],
              pb: [2, 2],
              borderBottom: '1px solid',
              borderColor: 'accent',
              position: 'relative',
              fontSize: '18px',
              fontWeight: '500',
              '::after': {
                // content: '""',
                position: 'absolute',
                left: 0,
                bottom: '-5px',
                height: '4px',
                width: '100px',
                backgroundColor: 'accent'
              }
            }}>
            {recipe.name}
          </h2>

          <p
            sx={{
              display: 'inline-block',
              fontSize: '14px'
            }}>
            {recipe.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default RecipeCardBox
