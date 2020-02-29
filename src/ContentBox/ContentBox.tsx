/** @format */

import React, { Fragment } from "react";
import { FlexCard, FlexBox } from "../components/components";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Languages from "./Languages/Languages";
import Achievements from "./Achievements/Achievements";

export const ContentBox = () => {
  return (
    <Fragment>
      <FlexCard>
        <FlexBox style={{ flexDirection: "column" }}>
          <Skills />
          <Languages />
        </FlexBox>
        <FlexBox
          style={{
            flexDirection: "column",
            width: "45%",
            alignItems: "center",
          }}>
          <Education />
          <Experience />
        </FlexBox>
        <FlexBox
          style={{
            flexDirection: "column",
            textAlign: "center",
            width: "30%",
          }}>
          <Projects />
          <Achievements />
        </FlexBox>
      </FlexCard>
    </Fragment>
  );
};

export default ContentBox;
