/** @format */

import React, { Fragment } from "react";
import { FlexCard, FlexBox } from "../components/components";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Languages from "./Languages/Languages";
import Achievements from "./Achievements/Achievements";
import Interests from "./Interests/Interests";
import Summary from "./Summary/Summary";

export const ContentBox = () => {
  return (
    <Fragment>
      <FlexCard>
        <FlexBox>
          <Summary />
        </FlexBox>
      </FlexCard>
      <FlexCard>
        <FlexBox style={{ padding: 10, flexDirection: "column" }}>
          <Skills />
          <Languages />
        </FlexBox>
        <FlexBox
          style={{
            flexDirection: "column",
            width: "35%",
            padding: 10,
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
            padding: 10,
          }}>
          <Projects />
          <Achievements />
          <Interests />
        </FlexBox>
      </FlexCard>
    </Fragment>
  );
};

export default ContentBox;
