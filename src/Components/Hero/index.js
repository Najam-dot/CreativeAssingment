import React from 'react'
import styles from './hero.module.css'
import catImage from '../../assets/images/catHero.png'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroWrap}>
          <img src={catImage}></img>
        </div>
      </div>
    </section>
  )
}

export default Hero
