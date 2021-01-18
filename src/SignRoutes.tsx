import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/HomePage';
import Login from './pages/Login';

const SignRoutes: React.FC = () => {
 return (
   <BrowserRouter>
     <Route path='/' exact component={Home} />
     <Route path='/login'  component={Login} />
   </BrowserRouter>
 );
};

export default SignRoutes;