'use client';

import React, { useState, useRef } from 'react';
import Styles from "./upload.module.css";
import { FaCloudUploadAlt, FaLock } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useFile } from '../fileContext';

function UploadDocument() {
  const { setFile, setFileURL } = useFile();
  const router = useRouter();
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const url = URL.createObjectURL(selectedFile);

    setFile(selectedFile);
    setFileURL(url);

    router.push('/score');
  };

  const handleClick = () => {
    inputRef.current.click();


  // console.log(fileURL)
  };

  return (
    <div className={Styles.body}>
      <h1 className={Styles.uploadHeading}>Upload Your Resume</h1>

      <div onClick={handleClick} className={Styles.container}>
        <input
          type="file"
          ref={inputRef}
          style={{ display: 'none' }}
          onChange={handleChange}
          accept=".pdf,.doc,.docx"
        />

        <div className={Styles.uploadingContainer}>
          <FaCloudUploadAlt className={Styles.uploadIcon} />
          <h2>Click to upload your resume</h2>
          <h2>
            Only <strong style={{ fontWeight: 600, color: "#fff" }}>PDF or DOCX</strong> files (max 2MB).
          </h2>
        </div>
      </div>

      <span style={{
        fontFamily: 'Cerebri Sans',
        fontSize: '0.9em',
        color: 'white',
        marginTop: "2rem",
        display: 'inline-block'
      }}>
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
