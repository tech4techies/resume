import  React, { Fragment } from 'react';
import styled from '@emotion/styled';
import ProfileImage from './ProfileImage/ProfileImage';
import TopInfo from '../TopBar/TopInfo/TopInfo';
import { FlexCard } from '../components/components';


interface IProps {

}
export const TopBar: React.FC<IProps> = (props) => {
    return(
        <Fragment>
            <FlexCard>
                <ProfileImage />
                <TopInfo />
            </FlexCard>
        </Fragment>
    )
}

export default TopBar;