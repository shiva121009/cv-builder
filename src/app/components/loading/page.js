import React from 'react'

const Loader = () => (
  <div style={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f9f9f9"
  }}>
    <div className="spinner"></div>
    <style jsx>{`
      .spinner {
        width: 50px;
        height: 50px;
        border: 6px solid #eee;
        border-top-color: #0070f3;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default Loader;


