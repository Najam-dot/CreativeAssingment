import React from 'react'
import styles from './map.module.css'
import mapImage from '../../assets/images/map.png'
const Map = () => {
  return (
    <div>
      <section className={styles.map}>
        <img src={mapImage}></img>
      </section>
    </div>
  )
}

export default Map
