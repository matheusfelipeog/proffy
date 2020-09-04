import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './style.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Logotipo da Proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img 
                    src={landingImg}
                    alt="Alunos estudando via chamada de vídeo com professor"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Botão para a opção Estudar" />
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassIcon} alt="Botão para a opção Dar Aulas" />
                        Dar Aula
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas
                    <img src={purpleHeartIcon} alt="Um coração na cor roxa" />
                </span>
            </div>
        </div>
    )
}

export default Landing;