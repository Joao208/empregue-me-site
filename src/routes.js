/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Reset_password from './Pages/User/reset-password'
import Feed from './Pages/User/index'
import FeedB from './Pages/Bussines/index'
import Company_profile from './Pages/User/company-profile'
import Contact from './Pages/Terms/contact'
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
import Sign_inS from './Pages/Schools/sign-in'
import Sign_upS from './Pages/Schools/sign-up'
import Bussinessign_in from './Pages/Bussines/bussinessign-in'
import Bussinessign_up from './Pages/Bussines/bussinessign-up'
import Terms from './Pages/Terms/terms'
import Error404 from './Pages/User/not-found'
import Conections from './Pages/User/connection'
import ConectionsB from './Pages/Bussines/connection'
import ProfileView from './Pages/User/ProfileView'
import ProfileViewB from './Pages/Bussines/ProfileView'
import EditCompanyProfile from './Pages/Bussines/edit-company-profile'
import MyCompany_profile from './Pages/Bussines/MyCompanyProfile'
import Checkout from './Pages/Payments/checkout'
import ConfirmatePage from './Pages/User/confirmate'
import Email_confirmate from './Pages/User/email-not-confirmate'
import CommentAdd from './Pages/User/coment-add'
import CommentPost from './Pages/User/coment-post'
import CommentPostB from './Pages/User/coment-postb'
import Company_ProfileB from './Pages/Bussines/company-profile'
import ComingSoom from './Pages/cooming-soon'
import Blog from './Pages/Blog/blog'
import Entrevista_de_Emprego from './Pages/Blog/DicasEntrevista'

export default function Routed() {

    const UserRoute = props => {
        const isAuthenticated = !! sessionStorage.getItem('user') 

            return isAuthenticated ? <Route {...props} />
            : <Route path='/sign-in' element={<Sign_in/>}/>
    }

    const PrivateRoute = props => {
       const isLogged = !! sessionStorage.getItem('token')

        return isLogged ? <Route {...props}/>
        : <Route path='*' element={<Sign_in/>}/>
    }

    const BussinesRoutes = props => {
        const isBussines = !! sessionStorage.getItem('bussines')

        return isBussines ? <Route {...props} />
        : <Route path='*' element={<Error404/>}/>
    }
    const ConfirmateRoute = props => {
        const confirmate = !! sessionStorage.getItem('confirmate')
        
        return confirmate ? <Route {...props}/>
        : <Route path='*' element={<Email_confirmate/>}/>
    }

    const PhoneConfirmeRoute = props => {
        const confirmate = !! sessionStorage.getItem('phoneConfirme')
        
        return confirmate ? <Route {...props}/>
        : <Route path='*' element={<Phoneconfirm/>}/>
    }

    const Privated = props => {
    const privated = !! sessionStorage.getItem('8789887348975')
    
    return privated ? <Route {...props}/>
    : <Route path="*" element={<ComingSoom/>}/>
    }

    const ProfileUser = props => {
        const privated = !! sessionStorage.getItem('user_avatar')

        return privated ? <Route {...props}/>
        : <Route path="*" element={<Edit_profile/>}/>
    }

    const ProfileBussines = props => {
        const privated = !! sessionStorage.getItem('bussines_avatar')

        return privated ? <Route {...props}/>
        : <Route path="*" element={<EditCompanyProfile/>}/>
    }


    return(
<Routes>
    <Privated>
    <PrivateRoute>
    <ConfirmateRoute> 
    <PhoneConfirmeRoute>
    <ProfileUser>
        <UserRoute path='/' element={<Feed/>}/>
        <UserRoute path='/add/populate/:id' element={<CommentAdd/>}/>
        <UserRoute path='/postb/populate/:id' element={<CommentPostB/>}/>
        <UserRoute path='/post/populate/:id' element={<CommentPost/>}/>
        <UserRoute path='/company-profile/:id' element={<Company_profile/>}/>
        <UserRoute path='/conections/:named' element={<Conections/>}/>
        <UserRoute path='/profile/:id' element={<ProfileView/>}/>
        <UserRoute path='/contact' element={<Contact/>}/>
        <UserRoute path='/edit-profile' element={<Edit_profile/>}/>
        <UserRoute path='/faq' element={<Faq/>}/>
        <UserRoute path='/jobs' element={<Jobs/>}/>
        <UserRoute path='/job-profile/:id' element={<Job_profile/>}/>
        <UserRoute path='/privacy' element={<Privacy/>}/>
        <UserRoute path='/terms' element={<Terms/>}/>
        <UserRoute path='/checkout/:price' element={<Checkout/>}/>
        <UserRoute path='/profile' element={<Profile/>}/>
    </ProfileUser>
    </PhoneConfirmeRoute>
    </ConfirmateRoute>
    </PrivateRoute>
   <PrivateRoute>
    <ProfileBussines>
        <BussinesRoutes path='/edit-company' element={<EditCompanyProfile/>}/>
        <BussinesRoutes path='/mycompany-profile' element={<MyCompany_profile/>}/>
        <BussinesRoutes path='/company-profileb/:id' element={<Company_ProfileB/>}/>
        <BussinesRoutes path='/conectionsb/:named' element={<ConectionsB/>}/>
        <BussinesRoutes path='/profileb/:id' element={<ProfileViewB/>}/>
        <BussinesRoutes path='/feed' element={<FeedB/>}/>
        <Route path='/confirmate/user/:token' element={<ConfirmatePage/>}/>
        <UserRoute path='/phone' element={<Phone/>}/>
        <UserRoute path='/phoneconfirm' element={<Phoneconfirm/>}/>
    </ProfileBussines>
   </PrivateRoute>
        <Route path='/sign-in' element={<Sign_in/>}/>
        <Route path='/sign-up' element={<Sign_up/>}/>
        <Route path='/school/sign-in' element={<Sign_inS/>}/>
        <Route path='/school/sign-up' element={<Sign_upS/>}/>
        <Route path='/bussinessign-in' element={<Bussinessign_in/>}/>
        <Route path='/bussinessign-up' element={<Bussinessign_up/>}/>
        <Route path='*' element={<Error404/>}/>
        <Route path='/forgot-password' element={<Forgot_password/>}/>
        <Route path='/reset-password' element={<Reset_password/>}/>
        <Route path='/forgot-passwordb' element={<Forgot_passwordb/>}/>
        <Route path='/reset-passwordb' element={<Reset_passwordb/>}/>
        <Route path='/dicas-de-entrevistas' element={<Entrevista_de_Emprego/>}/>
        <Route path='/blog' element={<Blog/>}/>
</Privated>
</Routes>
    );
}
