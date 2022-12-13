import styles from './JobSorter.module.css'
import { useState, useEffect } from 'react'

const JobSorter = () => {
    const [jobNumbers, setJobNumbers] = useState("")
    const handleChange = evt => {
        setJobNumbers(evt.target.value)
    }
    const handleClear = (evt) => {
        evt.preventDefault()
        setJobNumbers("")
        console.log('cleared the input')
    }

    useEffect(() => {
        console.log(jobNumbers)
    })

  return (
    <div className={styles.container}>
      <h3>Job Number Sorter</h3>
      <form>
        <textarea rows="5" cols="50" name="input" onChange={handleChange} value={jobNumbers}/>
        <button onClick={handleClear}>Clear</button>
      </form>
      {!jobNumbers ? <p>Enter Job Numbers to Sort</p> : <p>{jobNumbers}</p>}
    </div>
  )
}

export default JobSorter
