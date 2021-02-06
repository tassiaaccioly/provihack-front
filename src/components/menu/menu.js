import React from 'react';
import './menu.css';

export default function Menu() {
    return(
        <div className='menu'>   
            <div className='logo'>
                Logo Bonito
            </div>
            <nav className='links'>
                <a href="/">Sobre nós</a>
                <a href="/">Parceiros</a>
                <a href="/">Contatos</a>
                <a href="/">Login</a>
            </nav>
        </div>      
    )
}