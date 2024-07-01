import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Delay the redirection slightly to allow the message to display briefly
        const timer = setTimeout(() => {
            navigate(location.pathname, { replace: true });
        }, 1000);

        return () => clearTimeout(timer);
    }, [location, navigate]);

    return (
        <div>
            <h1>Page not found. Redirecting back...</h1>
        </div>
    );
};

export default NotFound;
