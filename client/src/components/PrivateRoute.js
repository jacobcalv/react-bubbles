import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function PrivateRoute(props) {
    const {
        component: Component,
        ...rest
    } = props

    return (
        <Route {...rest} render={(renderProps) => {
            if(localStorage.getItem("token")) {
                //if logged in, go to the private route
                return <Component {...renderProps}/>
            } else {
                // if logged out, will be redirected to login page 
                return <Redirect to='/'/>
            }
        }}
        
        />
    )
}

export default PrivateRoute
