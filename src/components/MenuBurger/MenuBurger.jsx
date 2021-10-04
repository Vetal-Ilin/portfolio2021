import React from 'react';
import iconMenuBurger from '@images/iconMenuBurger.svg';
import iconTelephone from '@images/iconTelephone.svg';

export default function MenuBurger(props) {

    return (
        <div className={props.backgroundDarkening ? 'menu-header-modile menu-header-modile__darkening ' + props.className : 'menu-header-modile ' + props.className} >
            <div className='menu-header-modile__wrapper'>
                <div className='menu-header-modile__wrapper__shell-icon' onClick={props.onOpenNavBar}>
                    <img src={iconMenuBurger} alt='меню' className='menu-header-modile__wrapper__shell-icon__icon-burger' />
                </div>
                <a href='tel:+7 908 828 47 77'><img src={iconTelephone} alt='мое фото' /></a>
            </div>
        </div>
    )
}
