/** @format */

import React, { Fragment } from "react";
import { Config } from "../../config";
import { ContentBox, ComponentBox } from "../../components/components";

export const Email: React.FC = () => {
  return (
    <Fragment>
      <ComponentBox>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          style={{ marginTop: 2 }}
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          className='feather feather-mail'>
          <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
          <polyline points='22,6 12,13 2,6'></polyline>
        </svg>
        <ContentBox>
          <a
            style={{ textDecoration: "none", color: "#000" }}
            href={`mailto:${Config.email}`}>
            {Config.email}
          </a>
        </ContentBox>
      </ComponentBox>
    </Fragment>
  );
};

export default Email;