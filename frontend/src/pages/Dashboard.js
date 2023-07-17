import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../services/LocalStorageServices';
import { useLoggeduserQuery, useResetPasswordMutation, useSendPasswordResetEmailMutation } from '../services/userAuthApi';
import { getToken } from '../services/LocalStorageServices';
import { useEffect, useState } from 'react';
 



const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    removeToken('token')
    //console.log("Logout Clicked");
    navigate('/login')
  }
// this cosnt token function declare in service.jsx
  const token= getToken()
  const { data,isSuccess }= useLoggeduserQuery(token)
  //console.log(data)



  
  return <>
    
        <h1>Scholorships</h1>
        
        <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
     
        
    
  </>;
};

export default Dashboard;
