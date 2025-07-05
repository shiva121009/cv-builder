'use client';

import React, { useRef } from 'react';
import Styles from "./upload.module.css";
import { FaCloudUploadAlt, FaLock } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useFile } from '../fileContext';
import ProtectedRoute from '../protected routes';

function UploadDocument() {
  const { setFile, setFileURL } = useFile();
  const router = useRouter();
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const url = URL.createObjectURL(selectedFile);
    setFile(selectedFile);
    setFileURL(url);

    const token = localStorage.getItem("token"); // Get JWT token
    if (!token) {
      alert("User not authenticated. Please log in again.");
      router.push("/login");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("https://ai-cv-builder-be.fly.dev/resume/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Upload failed:", errorText);
        alert("Resume upload failed.");
        return;
      }

      const result = await res.json();
      localStorage.setItem("resume_score", JSON.stringify(result));
      router.push("/score");
    } catch (err) {
      console.error("Upload error:", err);
      alert("Something went wrong while uploading.");
    }
  };

  return (
    <ProtectedRoute>
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
    </ProtectedRoute>
  );
}

export default UploadDocument;
