import React from 'react'
import Header from './components/Header/Header.Buyer'
import Footer from './components/Footer/Footer.Buyer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
        <Outlet />
        </>
    )
}

export default Layout
