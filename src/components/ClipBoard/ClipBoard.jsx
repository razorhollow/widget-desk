import React from 'react'
import styles from './ClipBoard.module.css'

const ClipBoard = (props) => {
  return (
    <div className={styles.container}>
      <p>{props.sortedJobNumbers.join(", ")}</p>
    </div>
  )
}

export default ClipBoard
