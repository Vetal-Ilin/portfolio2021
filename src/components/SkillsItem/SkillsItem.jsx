import React from 'react';

import logoSkillsItemJavaScript from '@images/logoSkillsItemJavaScript.png';
import logoSkillsItemHTML from '@images/logoSkillsItemHTML.png';
import logoSkillsItemLess from '@images/logoSkillsItemLess.png';
import logoSkillsItemGulp from '@images/logoSkillsItemGulp.png';
import logoSkillsItemWebpack from '@images/logoSkillsItemWebpack.png';
import logoSkillsItemReact from '@images/logoSkillsItemReact.png';

export default function SkillsItem({skill, className}) {

    function getImages() {
        switch (skill.src) {
            case 'JS':
            return logoSkillsItemJavaScript
            break
            case 'HTML':
            return logoSkillsItemHTML
            break
            case 'LESS':
            return logoSkillsItemLess
            break
            case 'GULP':
            return logoSkillsItemGulp
            break
            case 'WEBPACK':
            return logoSkillsItemWebpack
            break
            case 'REACT':
            return logoSkillsItemReact
            break
        }   
    }

    return (
        <article className={'skills-item ' + className}>
            <img src={getImages()} alt='Логотип' className='skills-item__logo-skill' />
            <h3>{skill.title}</h3>
        </article>
    )
}
