import React from 'react';
import logoPath from '../images/logo.svg';
import { Route, Link } from 'react-router-dom';

export default function Header({ onSignOut, email }) {
    function handleSignOut() {
        onSignOut();
    }

    return (
        <header className='header page__section'>
            <img
                src={logoPath}
                alt='Around the U.S. Logo'
                className='logo header__logo'
            />
            <Route exact path='/'>
                <div className='header__auth-wrapper'>
                    <p className='header__user'>{email}</p>
                    <button className='header__logout' onClick={handleSignOut}>
                        Log out
                    </button>
                </div>
            </Route>
            <Route path='/signup'>
                <Link className='header__auth-link' to='signin'>
                    Login
                </Link>
            </Route>
            <Route path='/signin'>
                <Link className='header__auth-link' to='signup'>
                    Sign up
                </Link>
            </Route>
        </header>
    );
}
