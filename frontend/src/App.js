import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Entrytest from "./pages/Entrytest";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import National from "./components/National/National";
import International from "./components/International/International";
import Scholarships from "./pages/Scholarships/Scholarships";
import {  internationalData, nationalData, scholarshipCountry } from "./Data/Data";
import SubCategory from "./pages/SubCategories/SubCategory";
import InternationalCategory from "./pages/InternationalCategory/InternationalCategory";
import ScholarshipsCategory from "./pages/Scholarships/ScholarshipCategory";
import { getToken } from "./services/LocalStorageServices";
import { PrivateRoutes } from "./utilis/PrivateRoutes";

function App() {

  
  // console.log('Token', token)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="scholarships" element={<PrivateRoutes Component ={Scholarships} />} />
          <Route path="/entrytest" element={<Entrytest />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
          <Route path='/national' element={<PrivateRoutes Component = {National} />} />
          <Route path='/international' element={<PrivateRoutes Component={International} />} />
          
          {nationalData.map((item) => (
            <Route key={item.id} path={item.path} 
            element={<PrivateRoutes Component={SubCategory} data={item.title} />}

              
            />
          ))}
          {internationalData.map((item) => (
            <Route key={item.id} path={item.path} 
            element={<PrivateRoutes Component={InternationalCategory} data={item.title} />}

            />
          ))}
          {scholarshipCountry.map((item) => (
            <Route key={item.id} path={item.path} 
            element={<PrivateRoutes Component={ScholarshipsCategory} data={item.title} />}

            />
          ))}
         </Routes>
      </Router>
    </>
  );
}

export default App;
