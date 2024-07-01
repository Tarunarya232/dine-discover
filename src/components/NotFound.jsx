import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to the same URL that caused the 404 error
        navigate(location.pathname, { replace: true });
    }, [location, navigate]);

    return (
        <div>
            <h1>Page not found. Redirecting back...</h1>
        </div>
    );
};

export default NotFound;
