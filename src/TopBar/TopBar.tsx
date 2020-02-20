import  React, { Fragment } from 'react';
import styled from '@emotion/styled';
import ProfileImage from './ProfileImage/ProfileImage';
import { TopInfo } from './TopInfo/TopInfo';

const FlexCard = styled.div({
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '75%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '2%',
    marginLeft: '10%',
    boxShadow: '0px 0px 0px 2px rgb(249, 246, 246)'
})
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