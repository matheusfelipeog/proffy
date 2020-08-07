import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img 
                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Round&hairColor=Platinum&facialHairType=MoustacheMagnum&facialHairColor=Platinum&clotheType=BlazerShirt&eyeType=EyeRoll&eyebrowType=DefaultNatural&mouthType=Concerned&skinColor=Pale"
                    alt="Uma pessoa"
                />
                <div>
                    <strong>Dr. Periódica</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Ícone do Whatsapp" />
                    Entrar em Contanto
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;