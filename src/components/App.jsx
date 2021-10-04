import React, {useState, useEffect} from 'react';

import SectionHeader from './SectionHeader/SectionHeader';
import MenuBurger from './MenuBurger/MenuBurger';
import NavBar from './NavBar/NavBar';
import AboutMe from './AboutMe/AboutMe';
import ListSkills from './ListSkills/ListSkills';
import DemoProject from './DemoProject/DemoProject';
import Education from './Education/Education';
import Work from './Work/Work';
import Footer from './Footer/Footer';


export default function App() {

    const [isOpenNavBar, setIsOpenNavBar] = useState(false);

    const onOpenNavBar = () => {
        setIsOpenNavBar(true); 
    }

    const onCloseNavBar = () => {
        setIsOpenNavBar(false); 
    }

    const [backgroundDarkening, setBackgroundDarkeningDarkening] = useState(false);

    const listenScrollEvent = () => {
        (window.scrollY > 200) ? setBackgroundDarkeningDarkening(true) : setBackgroundDarkeningDarkening(false);
        setIsOpenNavBar(false)
    };

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () => {
            window.removeEventListener('scroll', listenScrollEvent);
        };
    });

    const listSkills = [
        {id: 1, src: 'JS', title: 'JavaScript'},
        {id: 2, src: 'HTML', title: 'HTML5'},
        {id: 3, src: 'LESS', title: 'Less'},
        {id: 4, src: 'GULP', title: 'Gulp'},
        {id: 5, src: 'WEBPACK', title: 'Webpack'},
        {id: 6, src: 'REACT', title: 'React'}
    ]

    return (
        <div className='app'>
            <MenuBurger onOpenNavBar={onOpenNavBar}  backgroundDarkening={backgroundDarkening} />
            <NavBar onCloseNavBar={onCloseNavBar} isOpenNavBar={isOpenNavBar} listenScrollEvent={listenScrollEvent} backgroundDarkening={backgroundDarkening} />
            <SectionHeader className='app__section-header' id='app__section-header-id' />
            <AboutMe className='app__about-me' id='app__about-me-id' />
            <ListSkills listSkills={listSkills} className='app__list-skills' id='app__list-skills-id' />
            <DemoProject className='app__demo-project' id='app__demo-project-id' />
            <Education className='app__education' id='app__education-id' />
            <Work className='app__work' id='app__work-id' />
            <Footer className='app__footer' />
        </div>
    )
}