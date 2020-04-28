import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Feed from './Pages/index';
import Cooming_soon from './Pages/coming-soon'
import company_profile from './Pages/company-profile'
import components from './Pages/components'
import connection from './Pages/connection'
import contact from './Pages/contact'
import edit_profile from './Pages/edit-profile'
import faq from './Pages/faq'
import forgot_password from './Pages/forgot-password'
import job_profile from './Pages/job-profile'
import jobs from './Pages/jobs'
import maintence from './Pages/maintence'
import messages from './Pages/messages'
import not_found from './Pages/not-found'
import notification from './Pages/notifications'
import pricing from './Pages/pricing'
import privacy from './Pages/privacy'
import profile from './Pages/profile'
import sign_int from './Pages/sign-in'
import sign_up from './Pages/sign-up'
import terms from './Pages/terms'

const isAuthenticated = () => true

const PrivateRoute = ({component:Component, ...rest}) => (
    <Route
     {...rest} 
     render = {props => 
        isAuthenticated() ? (
            <Component 
            {... props} 
            />
        ) : (
            <Redirect to={{
                pathname: '/' , 
                state: {from: props.location}}} 
                />
        )
    }
    />
)



export default function Routes() {
    return(
<BrowserRouter>
<Switch>
<PrivateRoute path='/' exact component={Feed}   />
<PrivateRoute path='/cooming_soon' component={Cooming_soon}/>
<PrivateRoute path='/company-profile' component={company_profile}/>
<PrivateRoute path='/components' component={components}/>
<PrivateRoute path='/connection' component={connection}/>
<PrivateRoute path='/contact' component={contact}/>
<PrivateRoute path='/edit-profile' component={edit_profile}/>
<PrivateRoute path='/faq' component={faq}/>
<PrivateRoute path='/forgot-password' component={forgot_password}/>
<PrivateRoute path='/jobs' component={jobs}/>
<PrivateRoute path='/job-profile' component={job_profile}/>
<PrivateRoute path='/maintence' component={maintence}/>
<PrivateRoute path='/messages' component={messages}/>
<PrivateRoute path='/not-found' component={not_found}/>
<PrivateRoute path='/notification' component={notification}/>
<PrivateRoute path='/pricing' component={pricing}/>
<PrivateRoute path='/privacy' component={privacy}/>
<PrivateRoute path='/profile' component={profile}/>
<Route path='/sign-in' component={sign_int}/>
<Route path='/sign-up' component={sign_up}/>
<PrivateRoute path='/terms' component={terms}/>
</Switch>

</BrowserRouter>
    );
}
