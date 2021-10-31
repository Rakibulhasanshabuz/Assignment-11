import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    // onClick={handleGoogleLogin}
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    return (
        <div className="d-flex align-items-center justify-content-center" style={{height: '90vh'}}>
            <div>
            <h1>Please Login</h1>
            <button onClick={handleGoogleLogin} className="btn btn-warning mb-5"><i className="fab fa-google"></i> Google sign In</button>
            </div>
        </div>
    );
};

export default Login;