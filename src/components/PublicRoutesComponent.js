import React, { createElement } from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ user, ...rest }) => {

  const routeComponent = (props) => 
    
    user ? < Redirect to={{pathname: "/allcharacters"}} /> : createElement(props) 
    
  return < Route 
   {
     ...rest
   } render={routeComponent} />
}

export default PublicRoute