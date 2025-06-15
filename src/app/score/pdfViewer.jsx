import React from 'react'
import Styles from "./pdfViewer.module.css"
import { BiAnalyse } from "react-icons/bi"
import { FaStar,FaMagic } from 'react-icons/fa'
 function pdfViewer() {
  return (
    <>
    <div className={Styles.body}>
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

    </div>
    </>
  )
}

export default pdfViewer