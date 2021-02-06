import react from 'react';
import './footer.css'

export default function Footer(){
    return(
        <div className='footer'>
            <nav className='links-pag'>
                <a href='/'>Gerente do Mês</a>
                <a href='/'>Parceiros</a>
                <a href='/'>Contatos</a>
                <a href='/'>Login</a>
            </nav>
        </div>
    )
}