// FileContext.js
'use client';
import React, { createContext, useState, useContext } from 'react';

const FileContext = createContext();

export  function FileProvider({ children }) {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);

  return (
    <FileContext.Provider value={{ file, setFile, fileURL, setFileURL }}>
      {children}
    </FileContext.Provider>
  );
}

export  function useFile() {
  return useContext(FileContext);
  // return fileURL()
}
