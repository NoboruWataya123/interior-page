import React from 'react'
import Navbar from '../components/Navbar/Items'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <main className={styles.flexbox}>
        <div className={styles.textside}>
          <h1 className={styles.heading}>Modern interior</h1>
          <article className={styles.text}>A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.</article>
          <span className={styles.link}>Read more</span>
        </div>
        <div className={styles.imgside}>
          <Image 
          src='/photo1.png'
          width={600}
          height={380}
          alt="interior"
          />
          <div className={styles.innerAvatar}>
              <Image
              src='/photo2.png'
              width={80}
              height={70}
              alt="avatar"
              />
              <span className={styles.avatarName}>Aliza Webber</span>
              <br />
              <span className={styles.avatardescription}>Interior designer</span>
              <h4 className={styles.avatarText}>Designed in 2020 by Aliza Webber</h4>
            </div>
        </div>
      </main>
      <Footer>Made by DDk</Footer>
    </div>
  )
}
