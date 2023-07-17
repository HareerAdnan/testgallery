import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { getToken } from "../services/LocalStorageServices";

const Layout = () => {

  const [showLoginButton, setShowLoginButton] = useState(true)
    useEffect(()=>{
        const token = getToken()
        setShowLoginButton(!token)
        
    },[getToken()])
  return <>
    <CssBaseline />
    <Navbar 
      showLoginButton = {showLoginButton}
    />
    <Outlet />
  </>;
};

export default Layout;
