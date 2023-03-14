import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Appbar from './header/Appbar'
import Navbar from './header/Navbar'
const Layout = ({ children }) => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }
  return (
    <>
      <Appbar />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout