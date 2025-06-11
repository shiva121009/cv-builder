import styles from "./navbar.module.css"
import React from 'react'
import Link from "next/link"


function Navbar() {
  return (
    <div className={styles.navbar}>
    <div className={styles.logo}> 
      <span className={styles.logoName}><Link href='/'>RESUME WORDED</Link></span>
   
   </div>
   <div className={styles.navbarButtons}>
         <div> <Link href="/product">Products &#8615;</Link></div>
         <div><Link href="/login">Login</Link></div>
    </div>
     
</div>
 
  )
}

export default Navbar