import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../pages/Footer'
import Upload from '../pages/Upload';
import HomePage from '../pages/HomePage';

const PrivateRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
          <Route path="/" exact component={HomePage} />
          <Route path="/upload" component={Upload} />
          <Redirect to='/upload' />
      <Footer />
    </BrowserRouter>
  );
};

export default PrivateRoutes;