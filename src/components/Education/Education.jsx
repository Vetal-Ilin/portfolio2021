import React from 'react'
import Fade from 'react-reveal/Fade';

export default function Education(props) {
    return (
        <section className={'education ' + props.className} id={props.id}>
            <div className='container'>
                <h2>образование</h2>
                <ul className='education__list'>
                    <Fade bottom>
                        <li className='education__list__item'>
                            <p>БАКАЛАВР</p>
                            <p>
                                Магнитогорский государственный технический университет им. Г.И. Носова Наземные транспортно - технологические комплексы, 
                                Подъемно - транспортные строительные, 
                                дорожные машины и оборудование.
                            </p>
                            <p>Год окончания: 2015</p>
                        </li>
                    </Fade>
                    <Fade bottom>
                    <li className='education__list__item'>
                        <p>МАГИСТР</p>
                        <p>
                            Магнитогорский государственный технический университет им. Носова,г. Магнитогорск Наземные транспортно - технологические 
                            комплексы, Транспортно - технологические комплексы горно - металлургического производства.
                        </p>
                        <p>Год окончания: 2017</p>
                    </li>
                    </Fade>
                </ul>
            </div>
        </section>
    )
}
