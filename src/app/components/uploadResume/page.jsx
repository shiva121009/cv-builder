'use client';

import React, { useState, useRef } from 'react';
import Styles from "./upload.module.css";
import { FaCloudUploadAlt, FaLock, FaTimesCircle } from "react-icons/fa";
import Link from 'next/link';
import Score from '@/app/score/page';
function UploadDocument() {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const inputRef = useRef(null);

  // const handleChange = (e) => {
  //   // const selectedFile = e.target.files[0];
  // //   if (!selectedFile) return;

  // //   setFile(selectedFile);
  // //   setFileURL(URL.createObjectURL(selectedFile));
  // // };

  // const handleClick = () => {
  // //   inputRef.current.click();
  // };

  // // const handleCancel = () => {
  // //   setFile(null);
  // //   setFileURL(null);
  // //   inputRef.current.value = ""; 
  // };


  return (
    <div className={Styles.body}>
      <h1 className={Styles.uploadHeading}>Upload Your Resume</h1>

      <Link href="/score"><div
      //  onClick={handleClick} 
      className={Styles.container}>
        <input
          type="file"
          ref={inputRef}
          style={{ display: 'none' }}
          // onChange={handleChange}
          accept=".pdf,.doc,.docx"
        />

        <div className={Styles.uploadingContainer}>
          <FaCloudUploadAlt className={Styles.uploadIcon} />
          <h2>Click to upload your resume</h2>
          <h2>
            Only <strong style={{ fontWeight: 600, color: "#fff" }}>PDF or DOCX</strong> files (max 2MB).
          </h2>
        </div>
      </div></Link>

      {/* {file && (
        <div style={{ marginTop: "2rem", color: "white", position: "relative" ,display:"flex"}}>
         
         <div style={{ height:"1000px", width:"800px", display:"flex", flexDirection:"column", justifySelf:"center", alignItems:"center", margin:"auto"}}> <h3>📄 File Info</h3>
          <p><strong>Name:</strong> {file.name}</p>
          <p><strong>Type:</strong> {file.type || 'Unknown'}</p>
          <p><strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB</p>
         </div>
           {file.type === "application/pdf" && (
            <iframe
              src={fileURL}
              width="100%"
              height="400px"
              title="PDF Preview"
              style={{ marginTop: "1rem", border: "1px solid #ccc" }}
            />
          )} <button
            // onClick={handleCancel}
            style={{
              backgroundColor: '#ff4d4d',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px',
              height:"40px",
              width:"60px"
            }}
          >
            <FaTimesCircle style={{ marginRight: '5px' }} />
            Remove File
          </button>
        
        </div>
      )} */}

      <span style={{ fontFamily: 'Cerebri Sans', fontSize: '0.9em', color: 'white', marginTop: "2rem", display: 'inline-block' }}>
        <FaLock style={{ display: 'inline', marginRight: '0.5rem' }} />
        We're committed to your{' '}
        <Link
          href="/privacy"
          target="_blank"
          style={{ borderBottom: '1px solid white', color: 'white' }}
        >
          privacy
        </Link>. Your resume is processed securely and stays private to you.
      </span>
    </div>
  );
}

export default UploadDocument;
