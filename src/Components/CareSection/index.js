import React from 'react'
import styles from './care.module.css'
import headingImage from '../../assets/images/careHeading.png'
import careImg from '../../assets/images/careImage.png'
const Care = () => {
  return (
    <section className={styles.care}>
      <div className="container">
        <div className={styles.careWrap}>
          <div className={styles.careHeading}>
            <img src={headingImage}></img>
            <h1>FELINE-FOCUSED VETERINARY CARE</h1>
          </div>
          <div className={styles.careDetails}>
            <div className={styles.careImage}>
              <img src={careImg}></img>
            </div>
            <div className={styles.careText}>
              <p>
                Cat Veterinary Clinic is a feline-only practice dedicated to
                providing high-quality health services for cats. As the first
                cat-focused clinic in Texas, we have been exclusively feline
                since 1973 and we truly love taking care of our cat patients and
                getting to know their families.
              </p>
              <p>
                At Cat Vet Clinic, we understand that bringing your pet in for a
                visit can be a stressful experience. We are committed to
                providing personalized treatment in a warm, cat-friendly space,
                and making sure your cat feels safe and comfortable in our care
                at all times.
              </p>
              <p>
                Our knowledgeable team offers a variety of cat veterinary
                services including
                <b>Wellness and Prevention, Dentistry, Ultrasound,</b> and
                <b>Surgery</b>. We are passionate about feline medicine and very
                proud that our clients choose us when they need professional and
                affordable veterinary care.
              </p>
              <div class={styles.careBooking}>
                <div class={styles.bookingNum}>
                  <ul>
                    <li>
                      Please call us at<a href="#">(713)523-5171</a>
                    </li>
                  </ul>
                </div>
                <div class={styles.bookAppointment}>
                  <button>Book an Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Care
