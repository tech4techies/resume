import React, { Fragment } from 'react';
import { FlexCard } from '../components/components';
import Skills from './Skills/Skills';
import Education from './Education/Education';


export const ContentBox = () => {
    return (<Fragment>
        <FlexCard>
            <Skills />
            <Education />
        </FlexCard>
    </Fragment>)
}

export default ContentBox;