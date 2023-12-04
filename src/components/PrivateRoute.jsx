
import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = (props) => {
   
    let data=localStorage.getItem("islogin")
  return  data ? props.children :<Navigate to={"/login"}></Navigate>
}

export default PrivateRoute

