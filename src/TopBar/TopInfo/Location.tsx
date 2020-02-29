/** @format */

import React, { Fragment } from "react";
import { Config } from "../../config";
import { ComponentBox, ContentBox } from "../../components/components";

export const Location: React.FC = () => {
  return (
    <Fragment>
      <ComponentBox>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          style={{ marginTop: 2 }}
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          className='feather feather-map-pin'>
          <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
          <circle cx='12' cy='10' r='3'></circle>
        </svg>
        <ContentBox>{Config.location}</ContentBox>
      </ComponentBox>
    </Fragment>
  );
};

export default Location;
