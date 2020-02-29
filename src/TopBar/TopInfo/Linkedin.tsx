/** @format */

import React, { Fragment } from "react";
import { IconsBox } from "../../components/components";
import { Config } from "../../config";
export const Linkedin: React.FC = () => {
  return (
    <Fragment>
      <IconsBox>
        <a href={Config.linkedin} style={{ color: "black" }} target='blank'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-linkedin'>
            <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
            <rect x='2' y='9' width='4' height='12'></rect>
            <circle cx='4' cy='4' r='2'></circle>
          </svg>
        </a>
      </IconsBox>
    </Fragment>
  );
};
export default Linkedin;
