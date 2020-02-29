/** @format */

import React, { Fragment } from "react";
import { Config } from "../../config";
import { ContentBox, ComponentBox } from "../../components/components";

export const Email: React.FC = () => {
  return (
    <Fragment>
      <ComponentBox>
        <img src='https://cdn.convertcart.com/uploads/20e8982e.svg' alt='' />
        <ContentBox>
          <a
            style={{ textDecoration: "none", color: "#000" }}
            href={`mailto:${Config.email}`}>
            {" "}
            {Config.email}{" "}
          </a>
        </ContentBox>
      </ComponentBox>
    </Fragment>
  );
};

export default Email;
