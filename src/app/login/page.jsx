'use client'
import React from 'react'
import Navbar from '../components/navbar/navbar'
import styles from './login.module.css'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


function Login() {
  const session = useSession();

  console.log(session)



  return (
    <>
      <Navbar />
      <div className={styles.Container}>
        <div className={styles.loginContainer}>
          <div className={styles.left}>
            <h3 className={styles.heading}>Login to your account</h3>
            <div className={styles.paraHandler}>
              <h5 className={styles.paraHeading}>✔ Access your resume and LinkedIn reviews</h5>
              <p className={styles.para}>Revisit the feedback from your previous or LinkedIn reviews</p>
            </div>
            <div className={styles.paraHandler}>
              <h5 className={styles.paraHeading}>✔ Get a new resume or LinkedIn review</h5>
              <p className={styles.para}>Upload your resume or LinkedIn profile again for another review!</p>
            </div>
            <div className={styles.paraHandler}>
              <h5 className={styles.paraHeading}>✔ Access the resume bullet point builder</h5>
              <p className={styles.para}>Manage your bullet points or get inspired by top resumes</p>
            </div>
          </div>
          <div className={styles.right}>
            <h3 className={styles.rightHeading}>Choose an option to continue</h3>
            <button className={styles.googleButton} onClick={() => signIn('google')}>
              Sign in with Google
            </button>
            <p className={styles.rightPara}> - or - </p>
            <button className={styles.emailButton} onClick={() => signIn('email')}>
              Sign in with Email
            </button>
            <p className={styles.terms}>
              By continuing, you agree to our <Link href="/terms"><u>Terms and Conditions</u></Link> and <Link href="/privacy"><u>Privacy Policy</u></Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
