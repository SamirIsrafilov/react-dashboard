import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideMenu from '../components/SideMenu'
import Catalog from '../pages/Catalog'
import Comments from '../pages/Comments'
import Dashboard from '../pages/Dashboard'
import Users from '../pages/Users';
import Reviews from '../pages/Reviews';
import AddItem from '../pages/AddItem'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import ForgotPassword from '../pages/ForgotPassword'
import NotFoundPage from '../pages/NotFoundPage'
import EditUser from '../pages/EditUser'



class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter >

        <SideMenu>
          <Routes >
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/catalog' element={<Catalog />}></Route>
            <Route path='/users' element={<Users />}></Route>
            <Route path='/comments' element={<Comments />}></Route>
            <Route path='/reviews' element={<Reviews />}></Route>
            <Route path='/additem' element={<AddItem />}></Route>
            <Route path='/edituser' element={<EditUser />}></Route>

            <Route path='/signin' element={<SignIn />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/forgotpas' element={<ForgotPassword />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>



          </Routes>
        </SideMenu>

      </BrowserRouter>
    )
  }
}

export default AppRouter