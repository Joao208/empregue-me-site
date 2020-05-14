import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import reset_password from './Pages/reset-password'
import Feed from './Pages/index';
import company_profile from './Pages/company-profile'
import contact from './Pages/contact'
import edit_profile from './Pages/edit-profile'
import phone from './Pages/phoneadd'
import phoneconfirm from './Pages/phonecomfirm'
import faq from './Pages/faq'
import forgot_password from './Pages/forgot-password'
import forgot_passwordb from './Pages/forgot_passwordb'
import reset_passwordb from './Pages/reset_passwordb'
import job_profile from './Pages/job-profile'
import jobs from './Pages/jobs'
import notification from './Pages/notifications'
import privacy from './Pages/privacy'
import profile from './Pages/profile'
import sign_int from './Pages/sign-in'
import sign_up from './Pages/sign-up'
import bussinessign_in from './Pages/bussinessign-in'
import bussinessign_up from './Pages/bussinessign-up'
import terms from './Pages/terms'
import error404 from './Pages/not-found'
import curriculum from './Pages/curriculum'
import authConfig from './auth.json'
import jwt from 'jsonwebtoken'

const PrivateRoute = props => {
    const token = sessionStorage.getItem('token')

    if(!token)
    return <Redirect to="/sign-in"/>
    
    const parts = token.split(' ')

    if(!parts.length === 2)
    return <Redirect to="/sign-in"/>

    const [scheme, tokend] = parts
    
    if (!/^Bearer$/i.test(scheme))
    return <Redirect to="/sign-in"/>

    jwt.verify(tokend, authConfig.secret, (err, decoded) => {
        if(err) return <Redirect to="/sign-in"/>

        return <Route {...props} />
    } )
}

export default function Routes() {
    return(
<BrowserRouter>
<Switch>
<PrivateRoute path='/' exact component={Feed}   />
<PrivateRoute path='/company-profile' component={company_profile}/>
<PrivateRoute path='/contact' component={contact}/>
<PrivateRoute path='/edit-profile' component={edit_profile}/>
<PrivateRoute path='/faq' component={faq}/>
<PrivateRoute path='/phone' component={phone}/>
<PrivateRoute path='/phoneconfirm' component={phoneconfirm}/>
<Route path='/forgot-password' component={forgot_password}/>
<Route path='/reset-password' component={reset_password}/>
<Route path='/forgot-passwordb' component={forgot_passwordb}/>
<Route path='/reset-passwordb' component={reset_passwordb}/>
<PrivateRoute path='/jobs' component={jobs}/>
<PrivateRoute path='/job-profile' component={job_profile}/>
<PrivateRoute path='/notification' component={notification}/>
<PrivateRoute path='/privacy' component={privacy}/>
<PrivateRoute path='/profile' component={profile}/>
<Route path='/sign-in' component={sign_int}/>
<Route path='/sign-up' component={sign_up}/>
<Route path='/bussinessign-in' component={bussinessign_in}/>
<Route path='/bussinessign-up' component={bussinessign_up}/>
<PrivateRoute path='/terms' component={terms}/>
<Route path='*' component={error404}/>
<PrivateRoute path='/curriculum' component={curriculum}/>
</Switch>

</BrowserRouter>
    );
}
