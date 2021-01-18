import React, {useContext} from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { SnackbarProvider } from 'notistack';
import AuthContext from './contexts/auth';
import SignRoutes from './SignRoutes';
import PrivateRoutes from './PrivateRoutes';

import Footer from './pages/Footer'

function Routes() {
    const { signed } = useContext(AuthContext);
    console.log(signed)
    return (
        <Router>
            <Navbar />
            <SnackbarProvider maxSnack={3} anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}>
            <Switch>
                {signed ? <PrivateRoutes /> : <SignRoutes />};
            </Switch>
            </SnackbarProvider>
            <Footer />
        </Router>
    )
}

export default Routes;


