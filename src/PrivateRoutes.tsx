import React from 'react';
import { Route } from 'react-router-dom';

import Upload from './pages/Upload';

const PrivateRoutes: React.FC = () => {
 return (
    <Route path='/upload'  component={Upload} />
 );
};

export default PrivateRoutes;