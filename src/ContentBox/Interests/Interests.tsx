/** @format */

import React, { Fragment } from "react";
import {
  Box,
  List,
  ListBox,
  ListItem,
  Title,
} from "../../components/components";
import { Config } from "../../config";

export const Interests: React.FC = () => {
  const { interests } = Config;
  return (
    <Fragment>
      <ListBox>
        <Title> Interests </Title>
        <List>
          {interests.map((interest) => (
            <ListItem key={interest}>
              <Box
                style={{
                  padding: 5,
                  border: "1px solid darkgray",
                  borderRadius: 5,
                }}>
                {interest}
              </Box>
            </ListItem>
          ))}
        </List>
      </ListBox>
    </Fragment>
  );
};

export default Interests;
