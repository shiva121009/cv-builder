import React from 'react'
import Link from 'next/link'
import Styles from "./score.module.css"
import { Stint_Ultra_Expanded } from 'next/font/google'
import { FaHome, FaLock, FaTarget,FaMagic ,FaStar} from 'react-icons/fa'
import { BiAnalyse } from "react-icons/bi"
import { FiTarget } from "react-icons/fi";
import { FaPlusSquare } from 'react-icons/fa';
 import Navbar from '../components/navbar/navbar'
 import PdfViewer from './pdfViewer'
function Score() {
  return (
    <>  
    <Navbar/>
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

        </div>
      </div>
      <div className={Styles.right}></div>
      <PdfViewer/>
    </div>
    </>

  )
}

export default Score