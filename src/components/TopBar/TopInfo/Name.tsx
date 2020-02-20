import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { Config } from '../../../config';

const NameBox = styled.div({
    fontWeight: 600,
    fontSize: 32,
    textTransform: 'uppercase',
})
export const Name: React.FC = () => {
    return (
        <Fragment>
            <NameBox>
                { Config.name }
            </NameBox>
        </Fragment>
    )
}
export default Name;