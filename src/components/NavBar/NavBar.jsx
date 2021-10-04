import React from 'react'
import {Link} from 'react-scroll'; 
import iconCloseNavBar from '@images/iconCloseNavBar.svg';

export default function NavBar(props) {

    let timeScroll = 1000;
    return (
        <div className={props.isOpenNavBar ? 'nav-bar nav-bar_open ' + props.className : 'nav-bar ' + props.className} >
            <span onClick={props.onCloseNavBar}></span>
            <div className={props.backgroundDarkening ? 'nav-bar__wrapper nav-bar__wrapper__darkening' : 'nav-bar__wrapper'}>
                <div className='nav-bar__wrapper__content'>
                    <div className='nav-bar__wrapper__content__shell-icon-close' onClick={props.onCloseNavBar}>
                        <img src={iconCloseNavBar} alt='закрыть'/>
                    </div>
                    <ul>
                        <li onClick={props.onCloseNavBar}><Link to='app__section-header-id' smooth={true} duration={timeScroll} ><p>главная</p></Link></li>
                        <li onClick={props.onCloseNavBar}><Link to='app__about-me-id' smooth={true} duration={timeScroll} ><p>обо мне</p></Link></li>
                        <li onClick={props.onCloseNavBar}><Link to='app__list-skills-id' smooth={true} duration={timeScroll} offset={-100} ><p>навыки</p></Link> </li>
                        <li onClick={props.onCloseNavBar}><Link to='app__demo-project-id' smooth={true} duration={timeScroll} ><p>проект</p></Link></li>
                        <li onClick={props.onCloseNavBar}><Link to='app__education-id' smooth={true} duration={timeScroll} offset={-100} ><p>образование</p></Link></li>
                        <li onClick={props.onCloseNavBar}><Link to='app__work-id' smooth={true} duration={timeScroll} ><p>место работы</p></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
