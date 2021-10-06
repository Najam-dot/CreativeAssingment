import React from 'react'
import styles from './footerCol.module.css'
const FooterColomn = (props) => {
  return (
    <div className={styles.footerCol}>
      <h3>{props.heading}</h3>
      <ul>
        <li>{props.weekdays}</li>
        <li>{props.weekend}</li>
      </ul>
    </div>
  )
}

export default FooterColomn
