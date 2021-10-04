import React from 'react';
import {Link} from 'react-scroll'; 
import iconArrowDown from '@images/fi-rr-arrow-small-down.svg';

export default function ScrollDownArrow(props) {
    
    let timeScroll = 1000;

    return (
        <Link to='app__about-me-id' className={'scroll-down-arrow ' + props.className} smooth={true}  duration={timeScroll}>
           <img src={iconArrowDown} alt='вниз' />
        </Link>
    )
}
