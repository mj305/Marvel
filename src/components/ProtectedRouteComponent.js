import React, { createElement } from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ isAutenticated, ...rest }) => {

  const routeComponent = (props) => 
    
    isAutenticated ? createElement(props) : < Redirect to={{pathname: "/"}} />
    
  return < Route 
   {
     ...rest
   } render={routeComponent} />
}

export default ProtectedRoute