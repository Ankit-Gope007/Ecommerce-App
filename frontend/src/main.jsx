import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import B_LayoutHF from './LayoutHF.Buyer.jsx'
import S_LayoutHF from './LayoutHF.Seller.jsx'
import Layout from './Layout.jsx'
import FirstPage from './components/FirstPage.jsx'
import B_Home from './components/Home/Home.Buyer.jsx'
import S_Home from './components/Home/Home.Seller.jsx'
import NewArrivals from './components/NewArrivals/NewArrivals.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Order from './components/Orders/Order.jsx'
import CheckOut from './components/CheckOut/CheckOut.jsx'
import B_LoginPage from './components/Login/buyer/LoginPage.buyer.jsx'
import B_NewLoginPage from './components/Login/buyer/NewLoginPage.buyer.jsx'
import S_LoginPage from './components/Login/seller/LoginPage.seller.jsx'
import S_NewLoginPage from './components/Login/seller/NewLoginPage.seller.jsx'
import AddProduct from './components/Products/AddProduct.jsx'
import ViewProduct from './components/Products/ViewProduct.jsx'
import UpdateProduct from './components/Update/Product.update.jsx'
import Clothes_Pages from './components/Pages/Clothes.Pages.jsx'
import ProductDetails_Pages from './components/Pages/ProductDetails.Pages.jsx'
import Toys_Pages from './components/Pages/Toys.Pages.jsx'
import Kitchen_Pages from './components/Pages/Kitchen.Pages.jsx'
import Tools_Pages from './components/Pages/Tools.Pages.jsx'
import HomeDecore_Pages from './components/Pages/HomeDecore.Pages.jsx'
import Books_Pages from './components/Pages/Books.Pages.jsx'
import AddReview from './components/Pages/AddReview.jsx'


const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<FirstPage />} />
    <Route path='buyer/registerAccount' element={<B_NewLoginPage />} />
    <Route path='buyer/login' element={<B_LoginPage />} />
    <Route path='buyer/' element={<B_LayoutHF />}>
      <Route index element={<B_Home />} />
      <Route path='Clothes/' element={<Clothes_Pages />}/>
      <Route path='Toys/' element={<Toys_Pages />}/>
      <Route path='Kitchen/' element={<Kitchen_Pages />}/>
      <Route path='Tools/' element={<Tools_Pages />}/>
      <Route path='HomeDecore/' element={<HomeDecore_Pages />}/>
      <Route path='Books/' element={<Books_Pages />}/>
      <Route path='add-review/:product' element={<AddReview />} />

      <Route path='product/:id' element={<ProductDetails_Pages />} />
      <Route path='about' element={<About />} />
      <Route path='contact-us' element={<ContactUs />} />
      <Route path='orders' element={<Order />} />
    </Route>
    <Route path='seller/registerAccount' element={<S_NewLoginPage />} />
    <Route path='seller/login' element={<S_LoginPage />} />
    <Route path='seller/' element={<S_LayoutHF />}>
      <Route index element={<S_Home />} />
      <Route path='add-product' element={<AddProduct />} />
      <Route path='view-product' element={<ViewProduct />} />
      <Route path='updateProduct/:id' element={<UpdateProduct />} />

    </Route>
  </Route>
))


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={routes} />
  //  </StrictMode>, 
)
