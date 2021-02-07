import react from 'react';
import './footer.css'
import logo from '../../assets/img/logo.svg'

export default function Footer(){
    return(
        <div className='footer'>
            <nav className='links-pag'>
                <a href='/'>Sobre nós</a>
                <a href='/'>Pesquise um júniors</a>
                <a href='/'>Contatos</a>
            </nav>
            <div className='redes-sociais'>
                <h1>Redes Sociais</h1>
                <div className='redes-img'>
                    <nav className='redes-image'>
                        <a href='/'>

                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}