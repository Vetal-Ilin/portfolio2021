import React from 'react';
import Fade from 'react-reveal/Fade';
import SkillsItem from '../SkillsItem/SkillsItem';


export default function ListSkills({listSkills = [], className, id}) {
    return (
        <div className={'list-skills ' + className} id={id}>
            <div className='container'>
                <h2>Мои навыки</h2>
                <Fade bottom>
                    <div className='list-skills__wrapper'>
                        {listSkills.map(item => <SkillsItem key={item.id} skill={item} className='list-skills__wrapper__item' />)}
                    </div>
                </Fade>
            </div>
        </div>
    )
}
