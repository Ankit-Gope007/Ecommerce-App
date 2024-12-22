import React from 'react'
import B_Header from './components/Header/Header.Buyer'
import B_Footer from './components/Footer/Footer.Buyer'
import { Outlet } from 'react-router-dom'

const B_LayoutHF = () => {
    return (
        <>
        <B_Header />
        <Outlet />
        <B_Footer />
        </>
    )
}

export default B_LayoutHF
