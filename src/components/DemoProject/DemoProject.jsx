import React from 'react';
import Fade from 'react-reveal/Fade';
import iconRightArrow from '@images/iconRightArrow.svg';

export default function DemoProject(props) {
    return (
        <section className={'demo-project ' + props.className} id={props.id}>
            <div className='container'>
                <h2>Мой проект</h2>
                <div className='demo-project__wrapper'>
                    <span></span>
                    <div className='demo-project__wrapper__video'>
                        <video id='background-video' className='background-video' type='video/mp4' poster='' autoPlay loop muted playsInline>
                            <source src='video.mp4' type='video/mp4' />
                            <source src='video.webm' type='video/webm'/>
                            <source src='video.ogv' type='video/ogv'/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='demo-project__wrapper__card'>
                        <Fade left><a href='http://vinaiv.ru/'><p>посмотреть проект</p><img src={iconRightArrow} alt='перейти' /></a></Fade>
                        <Fade right><a href='https://github.com/Vetal-Ilin/VINAIV.git'><p>исходный код</p><img src={iconRightArrow} alt='перейти' /></a></Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}
