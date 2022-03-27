import '../styles/globals.css'
import AppContext from '../components/common/context';
import { useState } from 'react';
import data from '../components/common/data.json'

function MyApp({ Component, pageProps }) {
  const [isActive, setIsActive] = useState(false);
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedLink, setSelectedLink] = useState(1);
  const [isOpenAside, setIsOpenAside] = useState(false);
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
        isOpenAside,
        setIsOpenAside
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp
