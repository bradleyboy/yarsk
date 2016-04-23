const React = require('react')

import styles from './style'

const SubHeader = ({children}) => (
  <h2 className={styles.tagline}>
    {children.split(' ').map((word) => {
        const arr = word.split('')
        return (<span><strong>{arr.shift()}</strong>{arr.join('')} </span>)
      }
    )}
  </h2>
)

export default SubHeader
