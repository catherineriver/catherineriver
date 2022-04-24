import React from 'react'
import '../styles/globals.css'
import AppContext from '../utils/context';
import { useState } from 'react';
import data from '../utils/data.json'

function MyApp({ Component, pageProps }) {
  const [isActive, setIsActive] = useState(false);
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedLink, setSelectedLink] = useState(1);
  const [show, setShow] = useState(false);
  const [updatedContent, setUpdatedContent] = useState(data.content[0]);
  return (
    <AppContext.Provider
      value={{
        isActive, 
        setIsActive,
        setUpdatedContent,
        updatedContent,
        setSelectedTab,
        selectedTab,
        selectedLink,
        setSelectedLink,
        show,
        setShow
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp
