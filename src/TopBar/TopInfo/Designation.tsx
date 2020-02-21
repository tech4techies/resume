import React, { Fragment } from 'react';
import { ComponentBox, ContentBox } from '../../components/components';
import { Config } from '../../config';

export const Designation:React.FC  = () => {
    return(
        <Fragment>
            <ComponentBox>
                <img src="https://cdn.convertcart.com/uploads/8aa459ae.svg" alt=""/>
                <ContentBox style={{fontWeight: 600}}>
                    { Config.designation }
                </ContentBox>
            </ComponentBox>
        </Fragment>
    )
}
export default Designation;