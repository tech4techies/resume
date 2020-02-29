/** @format */

import React, { Fragment } from "react";
import { IconsBox } from "../../components/components";
import { Config } from "../../config";

export const Twitter: React.FC = () => {
  return (
    <Fragment>
      <IconsBox>
        <a href={Config.twitter} target='blank'>
          <img
            src={"https://cdn.convertcart.com/uploads/43449f1c.svg"}
            title='Twitter'
            style={{ width: "100%" }}
            alt='Twitter'
          />
        </a>
      </IconsBox>
    </Fragment>
  );
};
export default Twitter;
