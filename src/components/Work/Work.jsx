import React from 'react';



export default function Work(props) {
    return (
        <section className={'work ' + props.className} id={props.id}>
            <div className='container'>
                <div className='work__wrapper'>
                    <span></span>
                    <div className='work__wrapper__card'>
                        <h2>Место работы</h2>
                        <p>АО “Магнитогорский ГИПРОМЕЗ” (Государственный Институт по Проектированию Металлургических Заводов)</p>
                        <div className='work__wrapper__card__profession'>
                            <p>Инженер</p>
                            <p>Геодезист</p>
                        </div>
                    </div>
                    <div className='work__wrapper__video'>
                        <video id='background-video-work' className='background-video' type='video/mp4' poster='' autoPlay loop muted>
                            <source src='videoWork.mp4' type='video/mp4' />
                            <source src='video.webm' type='video/webm'/>
                            <source src='video.ogv' type='video/ogv'/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div> 
        </section>
    )
}

