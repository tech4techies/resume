import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import Name from './Name';
import Location from './Location';
import { Phone } from './Phone';
import { Email } from './Email';
import { Designation } from './Designation';

const InfoBox = styled.div({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 26
})

export const TopInfo: React.FC = () => {
    return(
        <Fragment>
            <InfoBox>
                <Name />
                <Designation />
                <Location />
                <Phone />
                <Email />
            </InfoBox>
        </Fragment>
    )
}