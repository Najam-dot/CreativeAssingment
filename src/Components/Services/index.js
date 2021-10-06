import React from 'react'
import styles from './services.module.css'
import headingImg from '../../assets/images/careHeading.png'
const Services = () => {
  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles.servicesWrap}>
          <div className={styles.servicesHeading}>
            <img src={headingImg}></img>
            <h2>FELINE-FOCUSED SERVICES</h2>
          </div>
          <div className={styles.servicesData}></div>
        </div>
      </div>
    </section>
  )
}

export default Services
