import React from 'react';
import './Homepage.css'

import oquefazemos from '../../assets/img/oquefazemos.svg';
import cardGerentes from '../../assets/img/cardGerentes.svg';
import cadastro from '../../assets/img/cadastro.svg';
import parceiros from '../../assets/img/parceiros.svg';

import ImageBox from '../imageBox/imageBox';

export default function Homepage(){
    return(
        <div className='home-page'>
            <div className='oq-fazemos'>
                <ImageBox src={oquefazemos} alt='Duas pessoas de pé com feeds e graficos' />
                <textBox />
            </div>
            <div className='card-gerente'>
                <ImageBox src={cardGerentes} alt='Duas cartas de baralho com pessoas coroadas' />
                <textBox />
            </div>
            <div className='cadastro-box'>
                <ImageBox src={cadastro} alt='Uma garota sentada com papel na mão' />
                <textBox />
            </div>
            <div className='parceiros-box'>
                <ImageBox src={parceiros} alt='Duas pessoas observando documentos e uma pasta gigante' />
                <textBox />
            </div>
        </div>
    )
}