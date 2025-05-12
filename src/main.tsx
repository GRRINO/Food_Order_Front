import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'


  const router = createBrowserRouter([{
      path:'/',
      element:<Main/>,
      children:[{
        index:true,
        element:<Home/>
      },{
        path:'header',
        element:<Header/>
      },{
        path:'footer',
        element:<Footer/>
      },{
        path:'login',
        element:<Login/>
      },{
        path:'register',
        element:<Register/>
      }]
  }])

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
