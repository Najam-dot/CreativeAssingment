import React from 'react'
import styles from './testimonials.module.css'
import headingImg from '../../assets/images/careHeading.png'
const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.testimonialsWrap}>
          <div className={styles.testimonialsHeading}>
            <img src={headingImg} alt="" />
            <h2>OUR AMAZING TESTIMONIALS</h2>
          </div>
          <div className={styles.testimonialsText}>
            <p>
              Jelly cotton candy sesame snaps sweet candy canes. Jelly-o jelly
              beans liquorice pudding chupa chups liquorice soufflé. Topping
              fruitcake pie bear claw pudding macaroon cake muffin. Cheesecake
              ice cream jelly beans chupa chups lemon drops. Powder I love I
              love donut tiramisu icing caramels. Dessert pie I love bear claw.
              Gummi bears powder I love I love chupa chups. Liquorice apple pie
              caramels jelly beans I love apple pie.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
