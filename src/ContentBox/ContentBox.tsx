import React, { Fragment } from 'react';
import { FlexCard, FlexBox } from '../components/components';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Experience from './Experience/Experience';


export const ContentBox = () => {
    return (<Fragment>
        <FlexCard>
            <FlexBox style={{flexDirection: 'column'}}>
                <Skills />
            </FlexBox>
            <FlexBox style={{flexDirection: 'column'}}>
                <Education />
                <Experience />
            </FlexBox>
        </FlexCard>
    </Fragment>)
}

export default ContentBox;