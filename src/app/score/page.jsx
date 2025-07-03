'use client'

import Link from 'next/link'
import Styles from "./score.module.css"
import { FaHome, FaLock, FaMagic ,FaStar} from 'react-icons/fa'
import { BiAnalyse } from "react-icons/bi"
import { FiTarget } from "react-icons/fi";
import { FaPlusSquare } from 'react-icons/fa';
 import Navbar from '../components/navbar/navbar'
//  import PdfViewer  from './pdfViewer'
 import React, { useEffect, useState } from 'react';
 import { getAuth, onAuthStateChanged } from 'firebase/auth';
 import { useRouter } from 'next/navigation';
 import Greeting from '../components/greeting';
  // import config from '@/config'
  import { HiArrowSmallLeft } from "react-icons/hi2";
  import { HiOutlineArrowSmallRight } from "react-icons/hi2";
  // import UploadDocument  from '../components/uploadResume/page'
  import { useFile, fileURL } from '../components/fileContext'
import ProtectedRoute from '../components/protected routes'

function Score() {
  const { file, fileURL } = useFile();
   const auth = getAuth();
 
    const router = useRouter();
    const [user, setUser] = useState(null);
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        }
        else {
          router.push("/")
        }
      })
      return () => unsubscribe();
    }, [auth, router]);
    console.log('file:', file);
console.log('fileURL:', fileURL);
  
  return (
    <ProtectedRoute>
    <Navbar func="Logout"/>
      <div className={Styles.body}>
      
      <div className={Styles.left}>

        <div className={Styles.dashboardSide}>
          <div className={Styles.scoreCircle}>
            <div className={Styles.circle}>
              <div className={Styles.score}>
                <h1>17</h1>
                <h4>OVERALL</h4>
              </div>
            </div>
          </div>
          <div className={Styles.homeTab}>
            <li> <FaHome /> Home</li>
          </div>
          <div
            className={Styles.dashboardHeading}
          >
            TOP FIXES
          </div>
          <ul className={Styles.List} >
            <Link href="/score"><li className={Styles.subtreeSection}>
              <div className={Styles.navTab}>Quantify impact</div>
              <div className={Styles.ScoreBadge}>0</div>
            </li></Link>

           <Link href="/"> <li className={Styles.subtreeSection}>
              <div className={Styles.navTab}>Dates</div>
              <div className={Styles.ScoreBadge}>0</div>
            </li></Link>

            <Link href="/"><li className={Styles.subtreeSection} >
              <div className={Styles.navTab}>Length &amp; depth</div>
              <div className={Styles.ScoreBadge}>4</div>
            </li></Link>

          <Link href="/"> <li className={Styles.subtreeSection} >
              <div className={Styles.navTab}>Summary</div>
              <div className={Styles.ScoreBadgeLock}>
                <FaLock />
              </div>
            </li></Link> 

         <Link href="/">   <li className={Styles.subtreeSection} >
              <div className={Styles.navTab}>Filler words</div>
              <div className={Styles.ScoreBadgeLock}>
                <FaLock />
              </div>
            </li></Link>
          <Link href="/"> <li className={Styles.subtreeSection} >
              <div className={Styles.navTab}>Leadership</div>
              <div className={Styles.ScoreBadgeLock}>
                <FaLock />
              </div>
            </li></Link> 
          
          </ul>


<div
  className={Styles.showAll}
 
  style={{ cursor: 'pointer'}}
>
  12 more issues 
  <FaPlusSquare />
</div>


          <div
            className={Styles.dashboardHeading}
          >
            COMPLETES
          </div>
          <ul className={Styles.List} >
            <Link href="/score"><li className={Styles.subtreeSection}>
              <div className={Styles.navTab}>Dates</div>
              <div className={Styles.ScoreBadge}>0</div>
            </li></Link>
         <Link href="/">  <li className={Styles.subtreeSection}>
              <div className={Styles.navTab}>Uneccessary section</div>
              <div className={Styles.ScoreBadge}>0</div>
            </li></Link> 

         <Link href="/">   <li className={Styles.subtreeSection} >
              <div className={Styles.navTab}>Repetetion &amp; depth</div>
              <div className={Styles.ScoreBadge}>4</div>
            </li></Link>
          </ul>
         <div   className={Styles.showAll}
 
  style={{ cursor: 'pointer'}}
>
  1 MORE CHECKS
  <FaPlusSquare />
</div>

          <div className={Styles.separator}></div>

          <div className={Styles.dashboardHeading}
          >
            TOOLS
          </div>

          <ul className={Styles.List} >
            <Link href="/score"><li className={Styles.subtreeSection}>
              <div className={Styles.navTab}>Line Analysis</div>
             <BiAnalyse />
            </li></Link>

         <Link href="/">   <li className={Styles.subtreeSection}>
              <div className={Styles.navTab}>ATS Keywords</div>
             <FiTarget />
            </li></Link>

           <Link href="/"> <li className={Styles.subtreeSection} >
              <div className={Styles.navTab}>Magic Write</div>
            <FaMagic />
               
            </li></Link>

          </ul>
         <li className={Styles.buyProTabFixed} style={{color:"black"}}>
          <Link href="/Subscription"> <div className={Styles.navTabText}>Unlock full report</div> </Link>
          <div className={Styles.navTabValue}>
          <FaStar />
         </div>
         
         </li>
         

        </div>
        <div className={Styles.preview}>
                <div className={Styles.navigationArrows}>
                  <button className={Styles.navigationButton}><HiArrowSmallLeft /></button>
                  <button className={Styles.navigationButton}><HiOutlineArrowSmallRight /></button>
                </div>
                <div className={Styles.greetingSection}>
                  <div className={Styles.greetings}>
                      <h1 className={Styles.gretingPhrase}>
              <Greeting />  ,   {user ? user.displayName : "Guest"}.
            </h1>
                  <h2 className={Styles.gretingPhrase2}>Welcome to your resume review.</h2>
                  </div>
                  <div className={Styles.howItWork}>
                  <Link href="/"><button>HOW IT WORKS</button></Link>
                  </div>
                </div>
            <div className={Styles.previewButtons}>
              <button className={Styles.previewButton1}> <FaStar/> LATEST SCORE</button>
              <button className={Styles.previewButton2}> <FaStar/> PREVIOUS SCORE</button>
               
               </div>
             <div className={`${Styles.previewContainer}`}>
     <div className="max-w-md mx-auto bg-white pt-11 pr-0 pl-0 rounded-xl shadow space-y-6 font-sans text-gray-800">
      
      <h2 className="text-lg font-semibold leading-snug">
        Your resume scored <span className="text-indigo-600 font-bold">62</span> out of 100.
      </h2>

    
      <p className="text-sm leading-relaxed text-gray-700 pb-11">
        You're on the right track, but there's room for improvement on your resume! While your resume does well in some areas, it falls short in others which are important to hiring managers and resume screeners. But don't worry — we'll show you how to make easy improvements to your resume, which will increase your score by 20+ points.
      </p>

      
      <div className=" relative h-3 rounded-full bg-gradient-to-r from-red-500 via-yellow-300 via-yellow-400 via-green-400 to-green-600 mb-8 ">
       
        <div
          className="absolute top-1/2 -translate-y-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-transparent border-b-black"
          style={{ left: '62%' }}
        ></div>

       
        <div className="absolute top-full mt-2 left-0 text-xs text-gray-600 font-medium">0</div>
        <div className="absolute top-full mt-2 left-[62%] -translate-x-1/2 text-xs text-gray-800 font-semibold">
          YOUR RESUME
        </div>
        <div className="absolute top-full mt-2 right-0 text-xs text-gray-600 font-medium">100</div>

        <div
          className="absolute top-0 h-full border-l-2 border-dashed border-gray-900"
          style={{ left: '90%' }}
        ></div>

       
        <div
          className="absolute top-full mt-3 left-[90%] -translate-x-1/2 text-xs text-gray-800 font-semibold"
        >
          TOP RESUMES
        </div>
      </div>

    
      <div className="flex items-start space-x-3 bg-yellow-50 border border-yellow-200 p-4 mt-20 rounded-lg">
        <svg
          className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
          fill="currentColor"
        >
          <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z" />
        </svg>

        <p className="text-sm text-gray-700 leading-relaxed">
          <span className="font-medium">Use the feedback to find and fix errors</span> in your resume, then reupload it to get a new score. <span className="font-semibold">80% of people increase their score by over 20 points</span> with just three uploads and revisions.
        </p>
      </div>
    </div>
               </div>
        </div>
      </div>
      <div className={Styles.right}>
        <div className={Styles.pdfbody}>
       <div className={Styles.pdfFeatures}>
      <ul className={Styles.list}>
         <li className={Styles.listItem}>
            <FaStar style={{color:"#48edcd"}}/>  <p>GET PRO</p>
         </li>
         <li className={Styles.listItem}>
            <BiAnalyse />  <p>LINE ANALYSIS</p>
         </li>
         <li className={Styles.listItem}>
            <FaMagic  />  <p>MAGIC WRITE</p>
         </li>

      </ul>
      </div>
    <  div  style={{padding:"0px 1px",height:"auto ", width:"100%" }}>


  {fileURL && (
    <iframe
      src={fileURL}
      width="100%"
      height="800px"
     
      style={{ padding:"0px", border : "none"}}
    />
  )}
</div>
     </div>

      </div>
     
    </div>
    
    </ProtectedRoute>

  )
}

export default Score