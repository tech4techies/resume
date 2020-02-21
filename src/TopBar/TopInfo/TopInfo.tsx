import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import Name from './Name';
import Location from './Location';
import  Phone  from './Phone';
import  Email  from './Email';
import  Designation  from './Designation';
import Github from './Github';
import Linkedin from './Linkedin';
import Twitter from './Twitter';

const InfoBox = styled.div({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
})

export const TopInfo: React.FC = () => {
    return(
        <Fragment>
            <InfoBox style={{marginLeft: 20}}>
                <Name />
                <Designation />
                <Location />
                <Phone />
                <Email />
            </InfoBox>
            <InfoBox style={{marginLeft: '5%', marginRight:'5%', marginTop: 50}}>
                <Github />
                <Linkedin />
                <Twitter />
            </InfoBox>
        </Fragment>
    )
}
export default TopInfo;