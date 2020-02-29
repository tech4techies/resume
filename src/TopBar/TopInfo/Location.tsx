/** @format */

import React, { Fragment } from "react";
import { Config } from "../../config";
import { ComponentBox, ContentBox } from "../../components/components";

export const Location: React.FC = () => {
  return (
    <Fragment>
      <ComponentBox>
        <img src='https://cdn.convertcart.com/uploads/b2f804bd.svg' alt='' />
        <ContentBox>{Config.location}</ContentBox>
      </ComponentBox>
    </Fragment>
  );
};

export default Location;
