/** @format */

import React, { Fragment } from "react";
import { IconsBox } from "../../components/components";
import { Config } from "../../config";
export const Linkedin: React.FC = () => {
  return (
    <Fragment>
      <IconsBox>
        <a href={Config.linkedin} target='blank'>
          <img
            src={"https://cdn.convertcart.com/uploads/beb71356.svg"}
            style={{ width: "100%" }}
            alt=''
            title='Linkedin'
          />
        </a>
      </IconsBox>
    </Fragment>
  );
};
export default Linkedin;
