/** @jsx jsx */
import { useState, useEffect, useRef } from 'react'
import { jsx } from 'theme-ui'
import { useTransition, useSpring, animated } from 'react-spring'

const CounterItem = ({ items }) => {
  const transitions = useTransition(items, (item) => item.key, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' }
  })
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      style={props}
      sx={{
        fontSize: 6,
        color: 'white'
      }}>
      {item}
    </animated.div>
  ))
}

const Counter = () => {
  const [items, setItems] = useState([10])

  useEffect(() => {
    const interval = setInterval(() => {
      setItems([items[0] - 1])
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <div>
      <CounterItem items={items} />
    </div>
  )
}

export default Counter
