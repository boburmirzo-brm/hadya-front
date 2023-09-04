import React from 'react'
import {Outlet, Navigate} from "react-router-dom"

function Auth() {
    let user = localStorage.getItem("hadya-token")
  return user ? <Outlet/> : <Navigate replace to={"/login"}/>
}

export default Auth