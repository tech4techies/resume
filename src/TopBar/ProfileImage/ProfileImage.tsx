/** @format */

import React, { Fragment } from "react";
import styled from "@emotion/styled";
import profilePic from "../../../src/assets/3511100.jpg";

const ImageBox = styled.div({
  width: "30%",
});

export const ProfileImage: React.FC = () => {
  return (
    <Fragment>
      <ImageBox>
        <img
          style={{
            width: "100%",
            height: "100%",
            maxHeight: 200,
            maxWidth: 160,
            margin: 10,
            marginLeft: 20,
          }}
          alt=''
          src={profilePic}
        />
      </ImageBox>
    </Fragment>
  );
};
export default ProfileImage;
