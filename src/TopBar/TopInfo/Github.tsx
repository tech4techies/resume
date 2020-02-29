/** @format */

import React, { Fragment } from "react";
import { IconsBox } from "../../components/components";
import { Config } from "../../config";

export const Github: React.FC = () => {
  return (
    <Fragment>
      <IconsBox>
        <a href={Config.github} target='blank'>
          <img
            style={{ width: "100%" }}
            title={"Github"}
            src={"https://cdn.convertcart.com/uploads/5cff78e4.svg"}
            alt='Github'
          />
        </a>
      </IconsBox>
    </Fragment>
  );
};
export default Github;
