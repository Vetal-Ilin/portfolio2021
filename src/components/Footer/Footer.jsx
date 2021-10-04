import React from 'react';
import iconGitHub from '@images/iconGitHub.svg';
import iconTelegram from '@images/iconTelegram.svg';

export default function Footer(props) {
    return (
        <div className={'footer ' + props.className}>
            <div className='container'>
                <div className='footer__wrapper'>
                    <div className='footer__wrapper__link'>
                        <a href='https://github.com/Vetal-Ilin?tab=repositories'><img src={iconGitHub} alt='GitHub' /></a>
                        <a href='https://telegram.me/dobro174'><img src={iconTelegram} alt='Telegram' /></a>
                    </div>
                    <a href='tel: +79088284777'><p>+7 908 828 47 77</p></a>
                    <h3>Спасибо за внимание!</h3>
                </div>
            </div>
        </div>
    )
}
