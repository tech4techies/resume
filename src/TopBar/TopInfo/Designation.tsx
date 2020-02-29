/** @format */

import React, { Fragment } from "react";
import { ComponentBox, ContentBox } from "../../components/components";
import { Config } from "../../config";

export const Designation: React.FC = () => {
  return (
    <Fragment>
      <ComponentBox>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          style={{ marginTop: 3 }}
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          className='feather feather-briefcase'>
          <rect x='2' y='7' width='20' height='14' rx='2' ry='2'></rect>
          <path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'></path>
        </svg>
        <ContentBox style={{ fontWeight: 600, marginTop: 8 }}>
          {Config.designation}
        </ContentBox>
      </ComponentBox>
    </Fragment>
  );
};
export default Designation;
