import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from './util/axios.customize'

;
import {  Outlet } from 'react-router-dom';
import  Header from './components/layout/header.jsx';
import { authContext } from './components/auth/auth.context.jsx';



function App() {
  const{setAuth,loading,setLoading}=useContext(authContext)
  useEffect(()=>{
      const conectionApi=async ()=>{
          setLoading(true)
          try {
            const response = await axios.get('/v1/api/account');
            if(response.email){
              setAuth({
              isLogined:true,
              userEmail:response.email,
              userName:response.name
            })}else{
               setAuth({
              isLogined:false,
              userEmail:'',
              userName:''
            })
            }
            
          } catch (error) {
           
            
            console.error(error);
          }
          setLoading(false)
        }
        conectionApi()

  },[])

  
  return (
    <div>
   {loading ? 
   <> 
      loading....
   </>: 
   
    <>
      <Header/>
      <Outlet/>
    </>}
   </div>
  
)
  
};


export default App
