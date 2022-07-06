import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, loggedIn, ...props }) {
    return (
        <Routes>
            <Route {...props}>
                {loggedIn ? children : <Navigate to='/signin' />}
            </Route>
        </Routes>
    );
}
