import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Reset_password from './Pages/reset-password'
import Feed from './Pages/index'
import Company_profile from './Pages/company-profile'
import Contact from './Pages/contact'
import Edit_profile from './Pages/edit-profile'
import Phone from './Pages/phoneadd'
import Phoneconfirm from './Pages/phonecomfirm'
import Faq from './Pages/faq'
import Forgot_password from './Pages/forgot-password'
import Forgot_passwordb from './Pages/forgot_passwordb'
import Reset_passwordb from './Pages/reset_passwordb'
import Job_profile from './Pages/job-profile'
import Jobs from './Pages/jobs'
import Notification from './Pages/notifications'
import Privacy from './Pages/privacy'
import Profile from './Pages/profile'
import Sign_in from './Pages/sign-in'
import Sign_up from './Pages/sign-up'
import Bussinessign_in from './Pages/bussinessign-in'
import Bussinessign_up from './Pages/bussinessign-up'
import Terms from './Pages/terms'
import Error404 from './Pages/not-found'
import Curriculum from './Pages/curriculum'
import Conections from './Pages/connection'
import ProfileView from './Pages/ProfileView'

const navigate = useNavigate()

export default function Routed() {
    return(
<Routes>
<Route path='/' element={<Feed/>}   />
<Route path='/company-profile/:id' element={<Company_profile/>}/>
<Route path='/conections/:name' element={<Conections/>}/>
<Route path='/profile/:id' element={<ProfileView/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/edit-profile' element={<Edit_profile/>}/>
<Route path='/faq' element={<Faq/>}/>
<Route path='/phone' element={<Phone/>}/>
<Route path='/phoneconfirm' element={<Phoneconfirm/>}/>
<Route path='/forgot-password' element={<Forgot_password/>}/>
<Route path='/reset-password' element={<Reset_password/>}/>
<Route path='/forgot-passwordb' element={<Forgot_passwordb/>}/>
<Route path='/reset-passwordb' element={<Reset_passwordb/>}/>
<Route path='/jobs' element={<Jobs/>}/>
<Route path='/job-profile/:id' element={<Job_profile/>}/>
<Route path='/notification' element={<Notification/>}/>
<Route path='/privacy' element={<Privacy/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/sign-in' element={<Sign_in/>}/>
<Route path='/sign-up' element={<Sign_up/>}/>
<Route path='/bussinessign-in' element={<Bussinessign_in/>}/>
<Route path='/bussinessign-up' element={<Bussinessign_up/>}/>
<Route path='/terms' element={<Terms/>}/>
<Route path='*' element={<Error404/>}/>
<Route path='/curriculum' element={<Curriculum/>}/>
</Routes>
    );
}
