import React, { Fragment } from 'react';
import { FlexCard } from '../components/components';
import TopInfo from '../TopBar/TopInfo/TopInfo';
import ProfileImage from './ProfileImage/ProfileImage';


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