import React from 'react';
import './Homepage.css';

import oquefazemos from '../../assets/img/parceiros.svg';
import cardGerentes from '../../assets/img/cardGerentes.svg';
import cadastro from '../../assets/img/cadastro.svg';

import ImageBox from '../ImageBox/imageBox';
import TextBox from '../TextBox/textBox';
import Button from '../Button/button';
import Partner from '../Partner/partner'

export default function Homepage(){
    return(
        <div className='home-page'>
            <section className='oq-fazemos'>
                <div className='text-box'>
                    <TextBox title='O que fazemos'>
                    Somos um banco de dados de profissionais em início de carreira. Como? Aqui formamos grupos para resolver cases de empresas parceiras. Por quê?
                    Queremos que as empresas vejam sua performance em um caso real, mesmo que você ainda não esteja trabalhando.Apostamos em um portfólio mais diverso de experiências!
                    </TextBox>                
                    <Button>
                        Saiba mais
                    </Button>
                </div>
                <ImageBox src={oquefazemos} alt='Duas pessoas de pé procurando arquivos' />
            </section>

            <section className='desafio-box'>
                <ImageBox src={cardGerentes} alt='Duas cartas de baralho com pessoas coroadas' />
                <div className='desafio-box'>
                    <TextBox title='Desafio Provi'>
                    O hackatanga do mês é com nosso parceiro Provi. Viver essa experiência em grupo vai te ajudar na sua performance como júnior! E sabe o melhor? Nossos parceiros podem usar nossa plafatormas pra pesquisar candidatos, também, porque aqui vai ficar arquivado todo o processo que você e seu time fizer.
                    </TextBox>
                    <Button>
                        Participar
                    </Button>
                </div>
            </section>

            <section className='cadastro-box'>
                <div className='cadastro-box'>
                    <TextBox title='Cadastro'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                    </TextBox>
                    <Button>
                        Cadastrar
                    </Button>
                </div>
                <ImageBox src={cadastro} alt='Uma garota sentada com papel na mão' />
            </section>

            <div className='partners'>
                <Partner />
            </div>

        </div>
    )
}