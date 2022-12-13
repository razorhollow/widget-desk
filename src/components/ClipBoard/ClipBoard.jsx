import styles from './ClipBoard.module.css'
import copy from 'copy-to-clipboard'


const ClipBoard = ({ sortedJobNumbers }) => {
    const handleClick = () => {
        copy(sortedJobNumbers.join(', '))
    }
  return (
    <div className={styles.container}>
      <p>{sortedJobNumbers.join(", ")}</p>
      <button onClick={handleClick}>Copy</button>
    </div>
  )
}

export default ClipBoard
