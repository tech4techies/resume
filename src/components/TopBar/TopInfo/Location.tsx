import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import IconLocation from '../../../assets/location.svg';
import { Config } from '../../../config';


const LocationBox = styled.div({
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
})

const AddressBox = styled.div({
    width: '100%',
    margin: 10,
    marginTop: 12
})

export const Location:React.FC = () => {
    return(
        <Fragment>
            <LocationBox>
                <img src="https://cdn.convertcart.com/uploads/b2f804bd.svg" alt="" />
                <AddressBox>
                    {Config.location}
                </AddressBox>
            </LocationBox>
        </Fragment>
    )
}

export default Location;