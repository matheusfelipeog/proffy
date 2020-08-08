import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import blueHeartIcon from '../../assets/images/icons/blue-heart.svg';

import api from '../../services/api';

import './style.css';
import { report } from 'process';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('/connections').then(response => {
            const total = response.data.total;

            setTotalConnections(total);
        });
    }, []);

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
                    Total de { totalConnections } conexões já realizadas
                    <img src={blueHeartIcon} alt="Um coração na cor roxa" />
                </span>
            </div>
        </div>
    )
}

export default Landing;