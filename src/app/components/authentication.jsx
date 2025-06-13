'use client'

import React, { useEffect, useState } from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Styles from './loggedIn.module.css'
import config from "../../config.js"
import Navbar from '../components/navbar/navbar';
import Greeting from '../components/greeting';
function LoggedIn() {
  const auth = getAuth();
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user)=> {
      if (user) {
        setUser(user);
      }
      else{
        router.push("/")
      }
    })
    return ()=>unsubscribe();
  } ,[auth,router]);
  
  export default LoggedIn