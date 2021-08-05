import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated} from '.';

const AdminRoute = ({children}) => {
    return (
        <Route 
            render = { () => { 
                return isAuthenticated() && isAuthenticated().user.id === 1 ? (
                    children
                ) : (
                    <Redirect to={{pathname: "/"}}/>
                );
            }}
        />
    )
}

export default AdminRoute
