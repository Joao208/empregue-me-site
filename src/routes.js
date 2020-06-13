import React from 'react';
import { Routes, Route} from 'react-router-dom';

import jwt from 'jsonwebtoken'
import authConfig from './auth.json'

import Reset_password from './Pages/User/reset-password'
import Feed from './Pages/User/index'
import Company_profile from './Pages/User/company-profile'
import Contact from './Pages/User/contact'
import Edit_profile from './Pages/User/edit-profile'
import Phone from './Pages/User/phoneadd'
import Phoneconfirm from './Pages/User/phonecomfirm'
import Faq from './Pages/Terms/faq'
import Forgot_password from './Pages/User/forgot-password'
import Forgot_passwordb from './Pages/Bussines/forgot_passwordb'
import Reset_passwordb from './Pages/Bussines/reset_passwordb'
import Job_profile from './Pages/User/job-profile'
import Jobs from './Pages/User/jobs'
import Privacy from './Pages/Terms/privacy'
import Profile from './Pages/User/profile'
import Sign_in from './Pages/User/sign-in'
import Sign_up from './Pages/User/sign-up'
import Bussinessign_in from './Pages/Bussines/bussinessign-in'
import Bussinessign_up from './Pages/Bussines/bussinessign-up'
import Terms from './Pages/Terms/terms'
import Error404 from './Pages/User/not-found'
import Curriculum from './Pages/User/curriculum'
import Conections from './Pages/User/connection'
import ProfileView from './Pages/User/ProfileView'
import EditCompanyProfile from './Pages/Bussines/edit-company-profile'
import MyCompany_profile from './Pages/Bussines/MyCompanyProfile'
import Checkout from './Pages/User/checkout'
import ConfirmatePage from './Pages/User/confirmate'

export default function Routed() {

    const PrivateRoute = props => {
        const isAuthenticated = !! sessionStorage.getItem('token') 

        if(!isAuthenticated){
        return <Route path='/sign-in' element={<Sign_in/>}/>
        
        }else{
            <Route {...props} />       
         }

        const parts = isAuthenticated.split(' ')
        
        if(!parts.length === 2){
        return <Route path='/sign-in' element={<Sign_in/>}/>
        }else{
            <Route {...props} />          
        }

        const [scheme, token] = parts

        if (!/^Bearer$/i.test(scheme)){
        return <Route path='/sign-in' element={<Sign_in/>}/>
        }else{
            <Route {...props} />       
        }

        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if(err){
                return <Route path='/sign-in' element={<Sign_in/>}/>
            }else{
            <Route {...props} />
            }
        } )
    }

    const ConfirmateRoute = props => {
        const confirmate = !! sessionStorage.getItem('confirmate')

        if(confirmate == true){
        return confirmate ? <Route {...props}/>
        : <Route path='*' element={<Error404/>}/>
        }else{
        <Route path='*' element={<Error404/>}/>
        }
    }

    return(
<Routes>
        <PrivateRoute path='/' element={<Feed/>}   />
        <PrivateRoute path='/company-profile/:id' element={<Company_profile/>}/>
        <PrivateRoute path='/conections/:name' element={<Conections/>}/>
        <PrivateRoute path='/profile/:id' element={<ProfileView/>}/>
        <PrivateRoute path='/contact' element={<Contact/>}/>
        <PrivateRoute path='/edit-profile' element={<Edit_profile/>}/>
        <PrivateRoute path='/faq' element={<Faq/>}/>
        <PrivateRoute path='/jobs' element={<Jobs/>}/>
        <PrivateRoute path='/job-profile/:id' element={<Job_profile/>}/>
        <PrivateRoute path='/privacy' element={<Privacy/>}/>
        <PrivateRoute path='/terms' element={<Terms/>}/>
        <PrivateRoute path='/curriculum' element={<Curriculum/>}/>
        <PrivateRoute path='/checkout/:price' element={<Checkout/>}/>
        <PrivateRoute path='/edit-company' element={<EditCompanyProfile/>}/>
        <PrivateRoute path='/mycompany-profile' element={<MyCompany_profile/>}/>
        <Route path='/confirmate/user/:token' element={<ConfirmatePage/>}/>
        <PrivateRoute path='/profile' element={<Profile/>}/>
        <PrivateRoute path='/phone' element={<Phone/>}/>
        <PrivateRoute path='/phoneconfirm' element={<Phoneconfirm/>}/>
        <Route path='/sign-in' element={<Sign_in/>}/>
        <Route path='/sign-up' element={<Sign_up/>}/>
        <Route path='/bussinessign-in' element={<Bussinessign_in/>}/>
        <Route path='/bussinessign-up' element={<Bussinessign_up/>}/>
        <Route path='*' element={<Error404/>}/>
        <Route path='/forgot-password' element={<Forgot_password/>}/>
        <Route path='/reset-password' element={<Reset_password/>}/>
        <Route path='/forgot-passwordb' element={<Forgot_passwordb/>}/>
        <Route path='/reset-passwordb' element={<Reset_passwordb/>}/>
</Routes>
    );
}
