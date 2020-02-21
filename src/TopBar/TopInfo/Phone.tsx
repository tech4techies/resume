import React, { Fragment } from 'react';
import { Config } from '../../config';
import { ComponentBox, ContentBox } from '../../components/components';


export const Phone:React.FC = () => {
    return (
        <Fragment>
            <ComponentBox>
                <img src="https://cdn.convertcart.com/uploads/2b23e08a.svg" alt=""/>
                <ContentBox>
                    { Config.phone }
                </ContentBox>
            </ComponentBox>
        </Fragment>
    )
}
export default Phone;