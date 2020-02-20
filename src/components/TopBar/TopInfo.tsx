import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import Name from './Name';

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
            </InfoBox>
        </Fragment>
    )
}