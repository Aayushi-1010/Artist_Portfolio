import React, { Suspense } from 'react';
import {Outlet} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader'; 

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout
