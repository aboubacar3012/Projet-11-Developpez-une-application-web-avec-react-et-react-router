import styles from './Loader.module.css'
import React from 'react'

function Loader() {
    return (
        <div className={styles.containerLoader}>
            <div className={styles.loaderItem}></div>
        </div>
    )
}
export default Loader