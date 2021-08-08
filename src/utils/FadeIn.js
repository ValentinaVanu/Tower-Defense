import React from 'react'
import { useSpring, animated, config } from 'react-spring'

export const FadeInTitle = ({ children }) => {
  // const [flip, set] = useState(false)
  const flip = false
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    // reset: true,
    reverse: flip,
    delay: 400,
    config: config.molasses,
    // onRest: () => set(!flip),
  })

  return <animated.h1 style={props} >{children}</animated.h1>
}

export const ChainExample = ({ children }) => {
  const styles = useSpring({
    // loop: true,
    to: [
      { opacity: 0, color: 'rgb(14,26,19)' },
      { opacity: 1, color: '#ffaaee' },
    ],
    from: { opacity: 1, color: 'red' },
    delay: 400,
  })

  return <animated.div style={styles}>{children}</animated.div>
}
