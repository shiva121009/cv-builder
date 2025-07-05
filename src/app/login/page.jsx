'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/navbar';
import styles from './login.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import config from "../../config.js";
import { FaGoogle } from "react-icons/fa";

function Login() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(config);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        console.log("✅ Firebase Login Successful:");
        console.log("User:", user);

        const userData = {
          email: user.email,
          first_name: user.displayName?.split(" ")[0] || "First",
          last_name: user.displayName?.split(" ")[1] || "Last",
          // phone: "0000000000" // Google doesn't provide phone, so use dummy
        };

        console.log("📤 Sending to /auth/verify-email:", userData);

        try {
          const res = await fetch("https://ai-cv-builder-be.fly.dev/auth/verify-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Basic " + btoa("admin:securepassword")
            },
            body: JSON.stringify(userData)
          });

          console.log("📥 Response Status:", res.status);
          const data = await res.json();
          console.log("📥 Response Body:", data);

          if (res.ok && data.access_token) {
            console.log("✅ Token received, saving to localStorage");
            localStorage.setItem("token", data.access_token);
              localStorage.setItem("refresh_token", data.refresh_token);
            router.push("./loggedIn");
          } else {
            console.error("❌ Token missing or response not OK");
            alert("Login failed on server: " + (data?.detail || "Unknown error"));
          }
        } catch (err) {
          console.error("❌ Error contacting backend:", err);
          alert("Error connecting to server");
        }
      } else {
        console.log("ℹ️ No user detected. Probably signed out.");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const auth = getAuth(config);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

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
            <button className={styles.googleButton} onClick={signInWithGoogle}>
              <FaGoogle />
              Sign in with Google
            </button>
            <p className={styles.rightPara}> - or - </p>
            <button className={styles.emailButton} onClick={() => alert("Email login not yet implemented")}>
              Sign in with Email
            </button>
            <p className={styles.terms}>
              By continuing, you agree to our{" "}
              <Link href="/terms"><u>Terms and Conditions</u></Link> and{" "}
              <Link href="/privacy"><u>Privacy Policy</u></Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
