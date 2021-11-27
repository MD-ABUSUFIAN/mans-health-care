import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const PrivateRoute = ({ children, ...rest}) => {
    const {user, isLoading} = useAuth();
    console.log(isLoading);
    if (isLoading) {
        return <p>lodding</p>
    }
 
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;