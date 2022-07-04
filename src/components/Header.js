import React from 'react';
import logoPath from '../images/logo.svg';

export default function Header() {
    return (
        <header className='header page__section'>
            <img
                src={logoPath}
                alt='Around the U.S. Logo'
                className='logo header__logo'
            />
        </header>
    );
}
