'use client'
import React from 'react'
import styles from "./main.module.css"
import Image from 'next/image'
import { useRouter } from 'next/navigation'


function Main() {
  const router = useRouter();
  const navigate =(name)=>{
    router.push(name)
  }
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.heading}>
          <h1 className={styles.headingPara}>Improve your Resume and Linkedin profile</h1>
          <span className={styles.para}>
            Designed by top recruiters, our AI-powered tool instantly <br />
            gives you tailored feedback on your resume and Linkedin <br />
            profile. <br />
            Land 5x more interviews, opportunities, and job offers
          </span>
        </div>
        <div className={styles.buttons}>
          <button className={styles.getButtons} onClick={() => navigate("/login")}>Get started for free &#8608;</button>
          <button className={styles.previewButton} onClick={() => navigate('/preview')}> See preview &#8608;</button>

        </div>
      </div>

      <div className={styles.right}>

        <Image
          className={styles.image}
          src="/image/updated-homepage-sketch.png"
          alt="Resume Preview"
          width={400}
          height={400}
        />

      </div>
    </div>
  )
}

export default Main
