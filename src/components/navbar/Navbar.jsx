import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
    <div className={styles.social}>
      <Image src="/twitter.png" alt="twitter" width={24} height={24}/>
      <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
      <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
      <Image src="/youtube.png" alt="youtube" width={24} height={24}/>
    </div>
    <div className={styles.logo}>WriteWave</div>
    <div className={styles.links}>
      <ThemeToggle/>
      <Link href="/" className={styles.links}>Homepage</Link>
      <Link href="/" className={styles.links}>Contact</Link>
      <Link href="/" className={styles.links}>About</Link>
      <AuthLinks/>
    </div>
    </div>
  )
}

export default Navbar