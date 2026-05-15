import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.header}>
        <div >Navbar_Header</div>
        <button  className={styles.btn}>Hi</button>
    </div>
  )
}

export default Navbar