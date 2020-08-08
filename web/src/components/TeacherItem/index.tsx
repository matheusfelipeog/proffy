import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
    "id": number,
    "subject": string,
    "cost": number,
    "name": string,
    "avatar": string,
    "whatsapp": string,
    "bio": string
}

interface TeacherItemProps {
    teacher: Teacher
}



const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher }) => {
    
    function createNewConnection(){
        api.post('/connections', {
            user_id: teacher.id
        });
    }
    
    return (
        <article className="teacher-item">
            <header>
                <img 
                    src={ teacher.avatar }
                    alt={ teacher.name }
                />
                <div>
                    <strong>{ teacher.name }</strong>
                    <span>{ teacher.subject }</span>
                </div>
            </header>

            <p>
            { teacher.bio }
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ { teacher.cost }</strong>
                </p>
                <a href={ `https://wa.me/${ teacher.whatsapp }` } target="_blank" onClick={ createNewConnection } >
                    <img src={whatsappIcon} alt="Ícone do Whatsapp" />
                    Entrar em Contanto
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;