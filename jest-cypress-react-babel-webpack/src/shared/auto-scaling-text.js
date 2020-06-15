import React from 'react'
import PropTypes from 'prop-types'
import styles from './auto-scaling-text.module.css'

console.log(styles) // should be '{ hello: 'world' }' in Jest test environment (see style-mock.js)

function getScale(node) {
  debugger // for this to work in a testing env (i.e. non-browser), run 'yarn test:debug' (see package.json)
  // then, go to 'chrome://inspect' > click 'inspect' > press the play button
  // OR open dev tools and click the Node button
  if (!node) {
    return 1
  }
  const parentNode = node.parentNode

  const availableWidth = parentNode.offsetWidth
  const actualWidth = node.offsetWidth
  const actualScale = availableWidth / actualWidth

  if (actualScale < 1) {
    return actualScale * 0.9
  }
  return 1
}

function AutoScalingText({children}) {
  const nodeRef = React.useRef()
  const scale = getScale(nodeRef.current)
  return (
    <div
      className={styles.autoScalingText}
      style={{transform: `scale(${scale},${scale})`}}
      ref={nodeRef}
      data-testid="total"
    >
      {children}
    </div>
  )
}
AutoScalingText.propTypes = {
  children: PropTypes.node,
}

export default AutoScalingText
