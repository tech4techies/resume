import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { Config } from '../../../config';

const PhoneBox = styled.div({
    display: 'flex',
    flexDirection: 'row',
})
const ContentBox = styled.div({
    width: '100%',
    margin: 10,
    marginTop: 12, 
})

export const Phone:React.FC = () => {
    return (
        <Fragment>
            <PhoneBox>
                <img src="https://cdn.convertcart.com/uploads/2b23e08a.svg" alt=""/>
                <ContentBox>
                    { Config.phone }
                </ContentBox>
            </PhoneBox>
        </Fragment>
    )
}