import React from 'react';
import { Routes, Route} from 'react-router-dom';


import Reset_password from './Pages/User/User/reset-password'
import Feed from './Pages/User/index'
import Company_profile from './Pages/User/company-profile'
import Contact from './Pages/User/contact'
import Edit_profile from './Pages/User/edit-profile'
import Phone from './Pages/User/phoneadd'
import Phoneconfirm from './Pages/User/phonecomfirm'
import Faq from './Pages/User/faq'
import Forgot_password from './Pages/User/forgot-password'
import Forgot_passwordb from './Pages/Bussines/forgot_passwordb'
import Reset_passwordb from './Pages/Bussines/reset_passwordb'
import Job_profile from './Pages/User/job-profile'
import Jobs from './Pages/User/jobs'
import Privacy from './Pages/User/privacy'
import Profile from './Pages/User/profile'
import Sign_in from './Pages/User/sign-in'
import Sign_up from './Pages/User/sign-up'
import Bussinessign_in from './Pages/Bussines/bussinessign-in'
import Bussinessign_up from './Pages/Bussines/bussinessign-up'
import Terms from './Pages/User/terms'
import Error404 from './Pages/User/not-found'
import Curriculum from './Pages/User/curriculum'
import Conections from './Pages/User/connection'
import ProfileView from './Pages/User/ProfileView'
import EditCompanyProfile from './Pages/Bussines/edit-company-profile'
import MyCompany_profile from './Pages/Bussines/MyCompanyProfile'
import Checkout from './Pages/User/checkout'


export default function Routed() {

    const UserRoute = props => {
        const isAuthenticated = !! sessionStorage.getItem('user') 

            return isAuthenticated ? <Route {...props} />
            : <Route path='/sign-in' element={<Sign_in/>}/>
    }

    const PrivateRoute = props => {
        const isAuthenticated = !! sessionStorage.getItem('token') 

            return isAuthenticated ? <Route {...props} />
            : <Route path='/sign-in' element={<Sign_in/>}/>
    }

    const BussinesRoutes = props => {
        const isBussines = !! sessionStorage.getItem('bussines')

        return isBussines ? <Route {...props} />
        : <Route path='*' element={<Error404/>}/>
    }

    return(
<Routes>
<UserRoute path='/' element={<Feed/>}   />
<UserRoute path='/company-profile/:id' element={<Company_profile/>}/>
<UserRoute path='/conections/:name' element={<Conections/>}/>
<UserRoute path='/profile/:id' element={<ProfileView/>}/>
<UserRoute path='/contact' element={<Contact/>}/>
<UserRoute path='/edit-profile' element={<Edit_profile/>}/>
<UserRoute path='/faq' element={<Faq/>}/>
<UserRoute path='/phone' element={<Phone/>}/>
<UserRoute path='/phoneconfirm' element={<Phoneconfirm/>}/>
<Route path='/forgot-password' element={<Forgot_password/>}/>
<Route path='/reset-password' element={<Reset_password/>}/>
<Route path='/forgot-passwordb' element={<Forgot_passwordb/>}/>
<Route path='/reset-passwordb' element={<Reset_passwordb/>}/>
<UserRoute path='/jobs' element={<Jobs/>}/>
<UserRoute path='/job-profile/:id' element={<Job_profile/>}/>
<UserRoute path='/privacy' element={<Privacy/>}/>
<UserRoute path='/profile' element={<Profile/>}/>
<Route path='/sign-in' element={<Sign_in/>}/>
<Route path='/sign-up' element={<Sign_up/>}/>
<Route path='/bussinessign-in' element={<Bussinessign_in/>}/>
<Route path='/bussinessign-up' element={<Bussinessign_up/>}/>
<UserRoute path='/terms' element={<Terms/>}/>
<Route path='*' element={<Error404/>}/>
<UserRoute path='/curriculum' element={<Curriculum/>}/>
<BussinesRoutes path='/edit-company' element={<EditCompanyProfile/>}/>
<BussinesRoutes path='/mycompany-profile' element={<MyCompany_profile/>}/>
<PrivateRoute path='/checkout/:price' element={<Checkout/>}/>
</Routes>
    );
}
