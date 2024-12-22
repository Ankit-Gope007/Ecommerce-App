import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import LayoutHF from './LayoutHF.jsx'
import Layout from './Layout.jsx'
import FirstPage from './components/FirstPage.jsx'
import Home from './components/Home/Home.jsx'
import NewArrivals from './components/NewArrivals/NewArrivals.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Order from './components/Orders/Order.jsx'
import CheckOut from './components/CheckOut/CheckOut.jsx'
import B_LoginPage from './components/Login/buyer/LoginPage.buyer.jsx'
import B_NewLoginPage from './components/Login/buyer/NewLoginPage.buyer.jsx'
import S_LoginPage from './components/Login/seller/LoginPage.seller.jsx'
import S_NewLoginPage from './components/Login/seller/NewLoginPage.seller.jsx'


const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element= {<FirstPage/>}/>
    <Route path='buyer/registerAccount' element={<B_NewLoginPage/>}/>
    <Route path='buyer/login' element={<B_LoginPage/>}/>
    <Route path='buyer/' element={<LayoutHF/>}>
      <Route index element= {<Home/>}/>
      <Route path='new-arrivals' element={<NewArrivals/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact-us' element={<ContactUs/>}/>
      <Route path='orders' element={<Order/>}/>
      <Route path='checkout' element={<CheckOut/>}/>
      
    </Route>
    <Route path='seller/registerAccount' element={<S_NewLoginPage/>}/>
    <Route path='seller/login' element={<S_LoginPage/>}/>
    <Route path='seller/' element={<LayoutHF/>}> 

    </Route>
  </Route>
))


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
