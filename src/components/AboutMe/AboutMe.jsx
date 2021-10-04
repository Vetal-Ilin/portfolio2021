import React from 'react';
import Fade from 'react-reveal/Fade';
import iconRightArrow from '@images/iconRightArrow.svg';

export default function AboutMe(props) {

    return (
        <section className={'about-me ' + props.className} id={props.id}>  
            <h2>ОБО МНЕ</h2>
            <div className='container'> 
                <Fade bottom>
                    <div className='about-me__list'> 
                        <div className='about-me__list__item'><p>Возраст:</p><p>27 лет</p></div>
                        <div className='about-me__list__item'>
                            <p>Образование:</p>
                            <p>Высшее</p>
                        </div>
                        <div className='about-me__list__item'>
                            <p>Телефон:</p>
                            <a href='tel:+7 908 828 47 77'>
                                <p>+7 908 828 47 77</p>
                            </a>
                        </div>
                        <div className='about-me__list__item about-me__list__item'>
                            <p>GitHub:</p>
                            <a href='https://github.com/Vetal-Ilin?tab=repositories'>
                                <p>Vetal-Ilin/repositories</p>
                                <img src={iconRightArrow} alt='перейти' />
                            </a>
                        </div>
                        <div className='about-me__list__item'>
                            <p>E-mail:</p>
                            <p>vetaly-Ilin@yandex.ru</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}