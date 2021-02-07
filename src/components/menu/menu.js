import React from 'react';
import './menu.css';
import logo from '../../assets/img/logo.svg'

export default function Menu() {
    return(
        <div className='menu'>   
            <div className='logo-hack'>
                <img src={logo} alt='logo Hackatanga'></img>
            </div>
            <nav className='links'>
                <a href="/">Login</a>
                <a href="/">Contato</a>
                <a href="/">Pesquise um júnior</a>
                <a href="/">Sobre nós</a>
            </nav>
        </div>      
    )
}