import React, { Fragment } from 'react';
import { FlexCard } from '../components/components';
import Skills from './Skills/Skills';


export const ContentBox = () => {
    return (<Fragment>
        <FlexCard>
            <Skills />
        </FlexCard>
    </Fragment>)
}

export default ContentBox;