"use client";
import styles from "./navbar.module.css";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";

function Navbar() {
  const rtPath = usePathname(); 
  const router = useRouter(); 

  console.log(rtPath);

  const handleLogout = () => {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("User logged out");
          router.push("/"); 
        })
        .catch((error) => {
          console.error("Logout error:", error);
        });
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoName}>
          <Link href="/">RESUME WORDED</Link>
        </span>
      </div>

      <div className={styles.navbarButtons}>
        {rtPath === "/" ? ( 
          <div>
            <Link href={"/login"}>Login</Link>
          </div>
        ) : (
          <div>
            <button
              onClick={handleLogout}
              style={{
                background: "none",
                border: "none",
                color: "#b6b8b8",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

