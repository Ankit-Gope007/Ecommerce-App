import React from 'react'
import S_Header from './components/Header/Header.Seller'
import S_Footer from './components/Footer/Footer.Seller'

import { Outlet } from 'react-router-dom'

const S_LayoutHF = () => {
    return (
        <>
        <S_Header />
        <Outlet />
        <S_Footer />
        </>
    )
}

export default S_LayoutHF
