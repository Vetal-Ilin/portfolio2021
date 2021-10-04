import React from 'react';
import ScrollDownArrow from '../ScrollDownArrow/ScrollDownArrow';

export default function SectionHeader(props) {

    return (
        <section className='section-header ' id={props.id}>
            <div className='container'>
                <div className='section-header__wrapper'>
                    <div className='section-header__wrapper__text'>
                        <h1>Ильин Виталий</h1>
                        <h3>Я начинающий frontend разработчик</h3>
                    </div>
                    <div className='section-header__wrapper__button'>
                        <ScrollDownArrow />
                    </div>
                </div>  
            </div>           
        </section>
    )
}
