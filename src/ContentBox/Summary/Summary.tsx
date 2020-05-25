/** @format */

import React from "react";
import { Box, FlexBox, Title } from "../../components/components";

export const Summary: React.FC = () => {
  return (
    <FlexBox style={{ flexDirection: "column" }}>
      <Title style={{ textAlign: "left", padding: 10, paddingBottom: 5 }}>
        {" "}
        Summary{" "}
      </Title>
      <Box style={{ padding: 10, fontSize: 18, fontWeight: 550 }}>
        Professional Software Developer with 1+ years of experience in Software
        Product Development Process, Involved in Self-Paced Learning and also
        Collaborating with other teams for the growth of the organization.
      </Box>
    </FlexBox>
  );
};

export default Summary;
