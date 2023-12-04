import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Service from '../Pages/Service'
import Login from '../Pages/Login'
import Singleproduct from '../Pages/Singleproduct'
import PrivateRoute from '../components/PrivateRoute'


function MainRoute() {
    return (
        <div>
            <Routes>
                <Route path='/' element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }>
                </Route>
                <Route path='/:id' element={<Singleproduct />}></Route>
                <Route path='/Service' element={<Service />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/Contact' element={<Contact />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </div> 



    )
}

export default MainRoute