import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, loggedIn, ...props }) {
    return (
        <Route {...props}>
            {loggedIn ? children : <Navigate to='/signin' />}
        </Route>
    );
}
