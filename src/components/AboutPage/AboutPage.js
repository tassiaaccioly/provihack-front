import React from 'react';
import './AboutPage.css';

import Menu from '../Menu/menu';

export default function Aboutpage(){
    return(
        <div className='about-page'>
            <Menu />
            <div className='About'>
                <h1>Sobre nós</h1>
                <p>Somos um grupo de mulheres participantes do ProviHack Woman, um evento de tecnologia que visa impulsionar a carreira profissional através de desenvolvimento de ideias e soluções. Dentro deste, nos conhecemos e começamos a criar um projeto, em resposta ao case que abordava em uma forma de apoiar pessoas novas na carreira a conseguirem uma oportunidade de emprego. </p>
                <p>Após um dia inteiro discutindo as dores de jovens profissionais recém formados e pessoas em transição de área, ambas com pouca ou nenhuma experiência, pensamos em criar um site que aproximasse esse público a cases reais que empresas enfrentam, os incentivando a solucionar por meio de hackatons.</p>
                <p>Graças ao time composto por desenvolvedoras web (Back-end e Front-end), designer UI/UX, profissional de dados e produto, em um fim de semana o Hackatanga nasceu com propósito de ajudar a inserir júniors no mercado de trabalho, criar network com empresas e profissionais da mesma área, criar experiência e conteúdo para portfófiosl.</p>
            </div>
        </div>
        )
}