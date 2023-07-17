import { useEffect } from "react"
import { getToken } from "../services/LocalStorageServices"
import { useNavigate } from "react-router-dom"

export const PrivateRoutes = (props)=>{
    const {Component, data} = props 
    const naivgate = useNavigate()
    
    useEffect(()=>{
        const token = getToken()

        if(!token){
            naivgate('/login')
        }
    },[])


    
    return  <Component data ={data}/>
    

    
}