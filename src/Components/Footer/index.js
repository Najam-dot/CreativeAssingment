import React from 'react'
import styles from './footer.module.css'
import FooterColomn from './FooterColumn'
import { useState } from 'react'
const Footer = () => {
  const [footerColumn, setFooterColumn] = useState([
    {
      heading: 'Clinic hours',
      weekdays: 'Monday through Friday 7:30 A.M.- 6:00 P.M.',
      weekend: 'Saturday and Sunday 9:00 A.M. - 1:00P.M',
    },
    {
      heading: 'APPOINTMENT HOURS',
      weekdays: 'Mon-Friday: 8:00am - 5:00pm',
      weekend: 'Sat. and Sunday 9:00am - 12:30pm',
    },
    {
      heading: 'SUPPORT',
      weekdays: 'Phone: (713) 523-5171',
      weekend: 'Email: info@catvetclinic.com',
    },
  ])
  return (
    <footer>
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.footerTopWrap}>
            {footerColumn.map((item, index) => {
              return (
                <FooterColomn
                  key={index}
                  heading={item.heading}
                  weekdays={item.weekdays}
                  weekend={item.weekend}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerBottomWrap}>
            <div className={styles.footerCopyright}>
              <p>
                &copy; 2019 Cat vet clinic. Veterinary Website by Beyond Indigo
                Pets
              </p>
            </div>
            <div className={styles.footerSocial}>
              <p>Follow Us</p>
              <a href="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
