import React from 'react'
import styles from './header.module.css'
import logo from '../../assets/images/logo.png'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrap}>
          <div className={styles.logo}>
            <a href="#">
              <img src={logo}></img>
            </a>
          </div>
          <div className={styles.nav}>
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">SERVICES</a>
              </li>
              <li>
                <a href="">ABOUT US</a>
              </li>
              <li>
                <a href="">CLIENT RESOURCES</a>
              </li>
              <li>
                <a href="">BLOG</a>
              </li>
              <li>
                <a href="">CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
