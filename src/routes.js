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
import Bussinessign_in from './Pages/Bussines/sign-in'
import Bussinessign_up from './Pages/Bussines/sign-up'
import Terms from './Pages/Terms/terms'
import Error404 from './Pages/not-found'
import Conections from './Pages/User/connection'
import ConectionsB from './Pages/Bussines/connection'
import ProfileView from './Pages/User/ProfileView'
import ProfileViewB from './Pages/Bussines/ProfileView'
import EditCompanyProfile from './Pages/Bussines/edit-company-profile'
import MyCompany_profile from './Pages/Bussines/MyCompanyProfile'
import ConfirmatePage from './Pages/User/confirmate'
import Email_confirmate from './Pages/User/email-not-confirmate'
import CommentAdd from './Pages/User/coment-add'
import CommentPost from './Pages/User/coment-post'
import CommentPostB from './Pages/User/coment-postb'
import Company_ProfileB from './Pages/Bussines/company-profile'
import ComingSoom from './Pages/cooming-soon'
import Blog from './Pages/Blog/blog'
import Entrevista_de_Emprego from './Pages/Blog/DicasEntrevista'
import ResultadosQuarentena from './Pages/Blog/ResultadosDaQuarentena';
import JobsB from './Pages/Bussines/jobs'
import Job_profileB from './Pages/Bussines/job-profile'
import CommentAddB from './Pages/Bussines/coment-add'
import CommentBPostB from './Pages/Bussines/coment-postb'
import CommentBPost from './Pages/Bussines/coment-post'
import AddAnuncio from './Pages/Bussines/AddBussines'
import AddVacancie from './Pages/Bussines/AddVacancie'
import List from './Pages/Bussines/RequisitionList'
import Courses from './Pages/School/index'
import SingleCourses from './Pages/School/singleCourses'
import SearchCourses from './Pages/School/search'
import SingleCoursesB from './Pages/School/singleCourses Bussines'

export default function Routed() {

    const UserRoute = props => {
        const isAuthenticated = !! sessionStorage.getItem('user') 

            return isAuthenticated ? <Route {...props} />
            : <Route path='/sign-in' element={<Sign_in/>}/>
    }

    const PrivateRoute = props => {
       const isLogged = !! sessionStorage.getItem('token')

        return isLogged ? <Route {...props}/>
        : <Route path='/sign-in' element={<Sign_in/>}/>
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

    const Privated = props => {
    const privated = !! sessionStorage.getItem('8789887348975')
    
    return privated ? <Route {...props}/>
    : <Route path="*" element={<ComingSoom/>}/>
    }

    return(
<Routes>
    <PrivateRoute>
        <ConfirmateRoute> 
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
            <UserRoute path='/profile' element={<Profile/>}/>
            <UserRoute path='/courses/:id' element={<SingleCourses/>}/>
        </ConfirmateRoute>
    </PrivateRoute>
   <PrivateRoute>
        <Privated>
        <BussinesRoutes>
        <Route path='/edit-company' element={<EditCompanyProfile/>}/>
        <Route path='/mycompany-profile' element={<MyCompany_profile/>}/>
        <Route path='/company-profileb/:id' element={<Company_ProfileB/>}/>
        <Route path='/conectionsb/:named' element={<ConectionsB/>}/>
        <Route path='/profileb/:id' element={<ProfileViewB/>}/>
        <Route path='/feed' element={<FeedB/>}/>
        <Route path='/bussines/jobs' element={<JobsB/>}/>
        <Route path='/bussines/jobs-profile/:id' element={<Job_profileB/>}/>
        <Route path='/bussines/add/populate/:id' element={<CommentAddB/>}/>
        <Route path='/bussines/postb/populate/:id' element={<CommentBPostB/>}/>
        <Route path='/bussines/post/populate/:id' element={<CommentBPost/>}/>
        <Route path='/publicar' element={<AddAnuncio/>}/>
        <Route path='/vacancies/publicar' element={<AddVacancie/>}/>
        <Route path='/request/list' element={<List/>}/>
        <Route path='/coursesb/:id' element={<SingleCoursesB/>}/>
        </BussinesRoutes>
        </Privated>
        <Route path='/confirmate/user/:token' element={<ConfirmatePage/>}/>
        <UserRoute path='/phone' element={<Phone/>}/>
        <UserRoute path='/phoneconfirm' element={<Phoneconfirm/>}/>
   </PrivateRoute>
        <Route path='/sign-in' element={<Sign_in/>}/>
        <Route path='/sign-up' element={<Sign_up/>}/>
        <Route path='/bussinessign-in' element={<Bussinessign_in/>}/>
        <Route path='/bussinessign-up' element={<Bussinessign_up/>}/>
        <Route path='*' element={<Error404/>}/>
        <Route path='/forgot-password' element={<Forgot_password/>}/>
        <Route path='/reset-password' element={<Reset_password/>}/>
        <Route path='/forgot-passwordb' element={<Forgot_passwordb/>}/>
        <Route path='/reset-passwordb' element={<Reset_passwordb/>}/>
        <Route path='/dicas-de-entrevistas' element={<Entrevista_de_Emprego/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/search/:name' element={<SearchCourses/>}/>
        <Route path='/resultados-quarentena' element={<ResultadosQuarentena/>}/>
</Routes>
    );
}
