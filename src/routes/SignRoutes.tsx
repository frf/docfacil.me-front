import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import Footer from '../pages/Footer'
import Home from '../pages/HomePage';

const SignRoutes: React.FC = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/login'  component={Login} />
        <Footer />
    </BrowserRouter>
  );
};

export default SignRoutes;