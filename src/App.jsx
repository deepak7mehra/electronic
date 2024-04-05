import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Category from './components/Category'
import MenuItem from './components/TableItem'
import Item from './components/Item'
import RightNav from './components/RightNav'
import Cart from './components/Cart'
import Button from './components/Button'
import Available from './components/Available'
import CustomerDetail from './components/CustomerDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TablePage from './pages/TablePage'
import MenuTable from './MenuTable'
import Menu from './Menu'
import MenuItemPage from './MenuItemPage'

export default function () {
  const [show,setShow] = useState(false);
 
  
  return (<BrowserRouter>
      <Routes>
        <Route path='/' element={<TablePage/>}/>
        <Route path='/menu' element = {<Menu/>}>
          <Route index  element = {<MenuTable/>}/>
          <Route path='item' element={<MenuItemPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
