import React from 'react'
import styles from './servicesCard.module.css'
const ServicesCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img></img>
      </div>
      <div className={styles.servicesText}></div>
    </div>
  )
}

export default ServicesCard
